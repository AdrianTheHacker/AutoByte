'use server'

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (email: string) => {
  await resend.emails.send({
    to: "adriantarantino2006@gmail.com",
    from: "onboarding@resend.dev",
    subject: "Hello, World",
    html: "<p>Test Successful🥳</p>"
  })
}