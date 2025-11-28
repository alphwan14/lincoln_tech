import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

// Initialize Resend only if API key is available
let resend: Resend | null = null

try {
  if (process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY)
  }
} catch (error) {
  console.error('Failed to initialize Resend:', error)
}

export async function POST(request: NextRequest) {
  try {
    // Validate API key
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service is not configured. Please set RESEND_API_KEY environment variable.' },
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      )
    }

    // Validate receiver email
    if (!process.env.CONTACT_RECEIVER_EMAIL) {
      console.error('CONTACT_RECEIVER_EMAIL is not configured')
      return NextResponse.json(
        { error: 'Receiver email is not configured. Please set CONTACT_RECEIVER_EMAIL environment variable.' },
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      )
    }

    // Parse request body
    let body
    try {
      body = await request.json()
    } catch (parseError) {
      console.error('Failed to parse request body:', parseError)
      return NextResponse.json(
        { error: 'Invalid request body. Please ensure all fields are provided.' },
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      )
    }

    const { name, email, phone, message, time } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      )
    }

    // Sanitize inputs
    const sanitizedName = String(name).trim()
    const sanitizedEmail = String(email).trim()
    const sanitizedPhone = phone ? String(phone).trim() : 'Not provided'
    const sanitizedMessage = String(message).trim()
    const sanitizedTime = time || new Date().toLocaleString('en-US', {
      timeZone: 'Africa/Nairobi',
      dateStyle: 'full',
      timeStyle: 'long',
    })

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(sanitizedEmail)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      )
    }

    // Create HTML email content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #0A1A2F 0%, #111111 100%);
              color: #00E0FF;
              padding: 30px;
              border-radius: 8px 8px 0 0;
              text-align: center;
            }
            .content {
              background: #ffffff;
              padding: 30px;
              border: 1px solid #e0e0e0;
              border-top: none;
              border-radius: 0 0 8px 8px;
            }
            .field {
              margin-bottom: 20px;
              padding-bottom: 15px;
              border-bottom: 1px solid #f0f0f0;
            }
            .field:last-child {
              border-bottom: none;
            }
            .label {
              font-weight: 600;
              color: #0A1A2F;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 5px;
            }
            .value {
              color: #333;
              font-size: 16px;
            }
            .message-box {
              background: #f8f9fa;
              padding: 20px;
              border-radius: 6px;
              border-left: 4px solid #00E0FF;
              margin-top: 10px;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #e0e0e0;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Lincoln Tech Website</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name</div>
              <div class="value">${sanitizedName}</div>
            </div>
            <div class="field">
              <div class="label">Email</div>
              <div class="value">
                <a href="mailto:${sanitizedEmail}" style="color: #00E0FF; text-decoration: none;">
                  ${sanitizedEmail}
                </a>
              </div>
            </div>
            <div class="field">
              <div class="label">Phone</div>
              <div class="value">${sanitizedPhone}</div>
            </div>
            <div class="field">
              <div class="label">Time</div>
              <div class="value">${sanitizedTime}</div>
            </div>
            <div class="field">
              <div class="label">Message</div>
              <div class="message-box">
                <div class="value" style="white-space: pre-wrap;">${sanitizedMessage}</div>
              </div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from the Lincoln Tech contact form.</p>
            <p>You can reply directly to this email to respond to ${sanitizedName}.</p>
          </div>
        </body>
      </html>
    `

    // Ensure Resend is initialized
    if (!resend) {
      console.error('Resend is not initialized')
      return NextResponse.json(
        { error: 'Email service is not properly configured. Please check RESEND_API_KEY.' },
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      )
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Lincoln Tech Contact Form <onboarding@resend.dev>', // You can customize this after domain verification
      to: process.env.CONTACT_RECEIVER_EMAIL,
      replyTo: sanitizedEmail,
      subject: `New Contact Form Message from ${sanitizedName}`,
      html: htmlContent,
    })

    if (error) {
      console.error('Resend API error:', error)
      return NextResponse.json(
        { error: 'Failed to send email', details: error.message },
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      )
    }

    // Log success (only in development)
    if (process.env.NODE_ENV === 'development') {
      console.log('Email sent successfully:', data)
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        id: data?.id 
      },
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )

  } catch (error: any) {
    console.error('Error processing contact form:', error)
    
    // Ensure we always return JSON, even on unexpected errors
    return NextResponse.json(
      { 
        error: 'Internal server error', 
        message: 'An unexpected error occurred while processing your request.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined 
      },
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST to send messages.' },
    { 
      status: 405,
      headers: {
        'Content-Type': 'application/json',
      }
    }
  )
}

