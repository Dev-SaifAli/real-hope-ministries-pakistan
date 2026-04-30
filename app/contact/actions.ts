'use server'

import nodemailer from 'nodemailer'

export type ContactFormState = {
  success: boolean
  message: string
}

export async function sendContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const fullName = formData.get('fullName') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const website = formData.get('website') as string
  const message = formData.get('message') as string

  // Server-side validation
  if (!fullName || !email || !message) {
    return {
      success: false,
      message: 'Please fill in all required fields (Name, Email, Message).'
    }
  }

  // Simple email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: 'Please enter a valid email address.'
    }
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })

    await transporter.sendMail({
      from: `"${fullName}" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `🚨 New Contact Form Message from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
          <h2 style="color: #06162b; border-bottom: 2px solid #57b33e; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Website:</strong> ${website || 'Not provided'}</p>
          
          <h3 style="margin-top: 30px; color: #06162b;">Message:</h3>
          <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</p>
        </div>
      `
    })

    return {
      success: true,
      message: 'Message sent successfully! We will get back to you soon.'
    }
  } catch (error) {
    console.error('Email sending error:', error)
    return {
      success: false,
      message: 'Failed to send message. Please try again later.'
    }
  }
}
