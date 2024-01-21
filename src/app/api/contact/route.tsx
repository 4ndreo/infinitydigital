import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/components";
import nodemailer from "nodemailer";
import { smtpEmail } from "@/utils/nodemailer";
import { Email } from "@/components/email";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const { nombre, email, message } = body;

  const emailHtml = render(
    <Email name={nombre} email={email} message={message} />
  );

  const transporterInstance = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    // secure: true,
    auth: {
      // type: 'OAuth2',
      // user: process.env.MAIL_USERNAME,
      user: 'franjandreo@gmail.com',
      pass: 'lrol yzfs hqla jggu'
      // clientId: process.env.OAUTH_CLIENTID,
      // clientSecret: process.env.OAUTH_CLIENT_SECRET,
      // refreshToken: process.env.OAUTH_REFRESH_TOKEN
    },
  });

  const mailOptions = {
    from: smtpEmail,
    to: smtpEmail,
    subject: "Nuevo mensaje de contacto",
    html: message,
  };

  try {
    await transporterInstance.sendMail(mailOptions);
    console.log("Correo enviado con éxito");
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return new Response("Error al enviar el correo", { status: 500 });
  }

  return new Response("OK");
}
