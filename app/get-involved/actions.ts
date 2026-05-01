'use server'

import nodemailer from 'nodemailer'

export type InvolvementFormState = {
  success: boolean
  message: string
}

export async function sendInvolvementForm(
  prevState: InvolvementFormState,
  formData: FormData
): Promise<InvolvementFormState> {
  const fullName = formData.get('fullName') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const country = formData.get('country') as string
  const areaOfInterest = formData.get('areaOfInterest') as string
  const message = formData.get('message') as string

  // Server-side validation
  if (!fullName || !email || !country || !areaOfInterest || !message) {
    return {
      success: false,
      message: 'Please fill in all required fields.'
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
      subject: `🤝 New Involvement Application from ${fullName} - ${areaOfInterest}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
          <h2 style="color: #06162b; border-bottom: 2px solid #57b33e; padding-bottom: 10px;">Get Involved Application</h2>
          
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Country:</strong> ${country}</p>
          <p><strong>Area of Interest:</strong> ${areaOfInterest}</p>
          
          <h3 style="margin-top: 30px; color: #06162b;">Message / Motivation:</h3>
          <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</p>
        </div>
      `
    })

    return {
      success: true,
      message: 'Application submitted successfully! We will contact you soon.'
    }
  } catch (error) {
    console.error('Email sending error:', error)
    return {
      success: false,
      message: 'Failed to submit application. Please try again later.'
    }
  }
}
