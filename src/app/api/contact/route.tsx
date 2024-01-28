import {NextRequest, NextResponse} from 'next/server';
import {render} from '@react-email/components';
import nodemailer from 'nodemailer';
import {smtpEmail} from '@/utils/nodemailer';
import {Email} from '@/components/email';
import fs from 'fs';

export async function POST(req: NextRequest, res: NextResponse) {
	const body = await req.json();
	const {nombre, email, message} = body;

	const emailHtml = render(
		<Email
			type={'interno'}
			title={'¡Recibiste una nueva consulta en Infinity Digital!'}
			name={nombre}
			email={email}
			message={message}
		/>
	);
	const emailHtmlClient = render(
		<Email
			type={'cliente'}
			title={'¡Recibimos tu consulta!'}
			name={nombre}
			email={email}
			message={
				'Muchas gracias por escibirnos. Estaremos contactándote a la brevedad para brindarte más información.'
			}
		/>
	);

	const transporterInstance = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 587,
		// secure: true,
		auth: {
			// type: 'OAuth2',
			// user: process.env.MAIL_USERNAME,
			user: process.env.GOOGLE_EMAIL,
			pass: process.env.GOOGLE_PASSWORD,
			// clientId: process.env.OAUTH_CLIENTID,
			// clientSecret: process.env.OAUTH_CLIENT_SECRET,
			// refreshToken: process.env.OAUTH_REFRESH_TOKEN
		},
	});

	const mailOptions = {
		from: process.env.GOOGLE_EMAIL,
		to: process.env.GOOGLE_EMAIL,
		subject: 'Infinity Digital - Nuevo mensaje de contacto',
		html: emailHtml,
		attachments: [
			{
				filename: 'logo',
				path: './public/img/logos/logo-colores.png',
				cid: '1234', //same cid value as in the html img src
			},
		],
	};

	const mailClientOptions = {
		from: process.env.GOOGLE_EMAIL,
		to: email,
		subject: 'Infinity Digital - Consulta recibida con éxito',
		html: emailHtmlClient,
		attachments: [
			{
				filename: 'logo',
				path: './public/img/logos/logo-colores.png',
				// content: fs.createReadStream('./public/img/logos/infinity-digital-logo-cropped.svg'),
				cid: '1234', //same cid value as in the html img src
			},
		],
	};

	await new Promise((resolve, reject) => {
		// send mail
		transporterInstance.sendMail(mailOptions, (err, info) => {
			if (err) {
				console.error(err);
				reject(err);
			} else {
				console.log(info);
				resolve(info);
			}
		});
	});
	await new Promise((resolve, reject) => {
		// send mail
		transporterInstance.sendMail(mailClientOptions, (err, info) => {
			if (err) {
				console.error(err);
				reject(err);
        console.error('Error al enviar el correo:', err);
			} else {
				// console.log(info);
        console.log('Correo enviado con éxito');
				resolve(info);
			}
		});
	});
	// try {
	// 	await transporterInstance.sendMail(mailOptions);
	// 	await transporterInstance.sendMail(mailClientOptions);
	// } catch (error) {
	// 	return new Response('Error al enviar el correo', {status: 500});
	// }

	return new Response('OK');
}
