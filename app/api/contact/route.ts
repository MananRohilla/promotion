import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const RECIPIENTS = ['promotion.frames@gmail.com', 'cabiverse.india@gmail.com']

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'ProMotion Website <onboarding@resend.dev>',
      to: RECIPIENTS,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${message}</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] resend failed:', err)
    return NextResponse.json({ error: 'Mail failed' }, { status: 500 })
  }
}
