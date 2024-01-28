import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/components";
import nodemailer from "nodemailer";
import { smtpEmail } from "@/utils/nodemailer";
import { Email } from "@/components/email";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const { nombre, email, message } = body;

  const emailHtml = render(
    <Email type={'interno'} title={'¡Recibiste una nueva consulta en Infinity Digital!'} name={nombre} email={email} message={'Muchas gracias por enviarnos tu consulta.'} />
  );
  const emailHtmlClient = render(
    <Email type={'cliente'} title={'¡Recibimos tu consulta!'} name={nombre} email={email} message={'Muchas gracias por escibirnos. Estaremos contactándote a la brevedad para brindarte más información.'} />
  );

  const transporterInstance = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    // secure: true,
    auth: {
      // type: 'OAuth2',
      // user: process.env.MAIL_USERNAME,
      user: process.env.GOOGLE_EMAIL,
      pass: process.env.GOOGLE_PASSWORD
      // clientId: process.env.OAUTH_CLIENTID,
      // clientSecret: process.env.OAUTH_CLIENT_SECRET,
      // refreshToken: process.env.OAUTH_REFRESH_TOKEN
    },
  });

  const mailOptions = {
    from: smtpEmail,
    to: smtpEmail,
    subject: "Infinity Digital - Nuevo mensaje de contacto",
    html: message,
  };

  const mailClientOptions = {
    from: smtpEmail,
    to: email,
    subject: "Infinity Digital - Consulta recibida con éxito",
    html: emailHtmlClient,
  };

  try {
    await transporterInstance.sendMail(mailOptions);
    await transporterInstance.sendMail(mailClientOptions);
    console.log("Correo enviado con éxito");
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return new Response("Error al enviar el correo", { status: 500 });
  }

  return new Response("OK");
}
