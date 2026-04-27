import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const to = process.env.CONTACT_EMAIL
  if (!to) {
    console.error('[contact] CONTACT_EMAIL env var not set')
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }

  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'short',
  })

  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeMessage = escapeHtml(message)

  const resend = new Resend(process.env.RESEND_API_KEY)
  const { data, error } = await resend.emails.send({
    from: 'ProMotion Website <onboarding@resend.dev>',
    to,
    replyTo: email,
    subject: `New Enquiry from ${name} — ProMotion Website`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f9f9f9; margin: 0; padding: 40px 20px; }
    .card { background: #fff; border-radius: 12px; max-width: 560px; margin: 0 auto; padding: 40px; border: 1px solid #eee; }
    .label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #888; margin-bottom: 4px; }
    .value { font-size: 15px; color: #111; margin-bottom: 24px; line-height: 1.6; }
    .message-box { background: #f5f5f5; border-radius: 8px; padding: 16px 20px; white-space: pre-wrap; font-size: 15px; color: #333; line-height: 1.7; }
    .footer { margin-top: 32px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #aaa; }
    .badge { display: inline-block; background: #ff3c00; color: #fff; font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 20px; margin-bottom: 28px; letter-spacing: 0.05em; }
    h2 { font-size: 22px; font-weight: 800; color: #111; margin: 0 0 24px 0; }
  </style>
</head>
<body>
  <div class="card">
    <div class="badge">PROMOTION WEBSITE</div>
    <h2>New Contact Enquiry</h2>

    <div class="label">Name</div>
    <div class="value">${safeName}</div>

    <div class="label">Email</div>
    <div class="value"><a href="mailto:${safeEmail}" style="color:#ff3c00">${safeEmail}</a></div>

    <div class="label">Message</div>
    <div class="message-box">${safeMessage}</div>

    <div class="footer">
      Submitted on ${timestamp} (IST)<br/>
      Reply directly to this email to respond to the enquiry.
    </div>
  </div>
</body>
</html>
    `,
  })

  if (error) {
    console.error('[contact] resend error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  console.log('[contact] sent, id:', data?.id)
  return NextResponse.json({ ok: true })
}
