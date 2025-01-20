import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from 'next'

const SMPT_HOST = 'mail.kolomyaka.ru';
const SMPT_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMPT_PASSWORD = process.env.SMTP_SERVER_PASSWORD;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body)
  const { email, message, name } = req.body;


  const transporter = nodemailer.createTransport({
    host: SMPT_HOST,
    port: 465,
    secure: true,
    auth: {
      SMPT_USERNAME,
      SMPT_PASSWORD,
    },
  });
  console.log('AFTER CREATE TRANSPORT')
  const mailOptions = {
    from: SMPT_USERNAME,
    to: email,
    subject: "ПРИЗНАНИЕ В ЛЮБВИ",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };


  try {

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
}

// export default async function POST(request: Request) {
//   try {
//     const { name, email, message } = await request.json();
//
//     const transporter = nodemailer.createTransport({
//       host: SMPT_HOST,
//       port: 465,
//       secure: true,
//       auth: {
//         SMPT_USERNAME,
//         SMPT_PASSWORD,
//       },
//     });
//
//     const mailOptions = {
//       from: SMPT_USERNAME,
//       to: email,
//       subject: "ПРИЗНАНИЕ В ЛЮБВИ",
//       text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//     };
//
//     await transporter.sendMail(mailOptions);
//
//     return NextResponse.json(
//       { message: "Message sent successfully" },
//       { status: 200 },
//     );
//   } catch (error) {
//     return new NextResponse("Failed to send message.", { status: 500 })
//   }
// }