import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SMPT_HOST = process.env.SMTP_SERVER_HOST;
const SMPT_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMPT_PASSWORD = process.env.SMTP_SERVER_PASSWORD;

export default async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      host: SMPT_HOST,
      port: 465,
      secure: true,
      auth: {
        SMPT_USERNAME,
        SMPT_PASSWORD,
      },
    });

    const mailOptions = {
      from: SMPT_USERNAME,
      to: email,
      subject: "ПРИЗНАНИЕ В ЛЮБВИ",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    return new NextResponse("Failed to send message.", { status: 500 })
  }
}