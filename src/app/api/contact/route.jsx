import {NextRequest, NextResponse} from 'next/server';
import {render} from '@react-email/components';
import nodemailer from 'nodemailer';
import {smtpEmail} from '@/utils/nodemailer';
import {Email} from '@/components/email';
import fs from 'fs';
import {google} from 'googleapis';
import logo from '@/utils/img/logo_colores.png';

export async function POST(req, res) {
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
				'Muchas gracias por escribirnos. Estaremos contactándote a la brevedad para brindarte más información.'
			}
		/>
	);

	const oAuth2Client = new google.auth.OAuth2(
		process.env.OAUTH_CLIENTID,
		process.env.OAUTH_CLIENT_SECRET,
		process.env.REDIRECT_URI
	);

	oAuth2Client.setCredentials({refresh_token: process.env.OAUTH_REFRESH_TOKEN});

	const ACCESS_TOKEN = await oAuth2Client.getAccessToken();
	const transporterInstance = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			type: 'OAuth2',
			user: process.env.GOOGLE_EMAIL,
			clientId: process.env.OAUTH_CLIENTID,
			clientSecret: process.env.OAUTH_CLIENT_SECRET,
			refreshToken: process.env.OAUTH_REFRESH_TOKEN,
			accessToken: ACCESS_TOKEN,
		},
		tls: {
			rejectUnauthorized: true,
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
				path: 'https://res.cloudinary.com/dpsdqgh0g/image/upload/f_auto,q_auto/logo',
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
				path: 'https://res.cloudinary.com/dpsdqgh0g/image/upload/f_auto,q_auto/logo',
				cid: '1234', //same cid value as in the html img src
			},
		],
	};

	await new Promise((resolve, reject) => {
		// verify connection configuration

		transporterInstance.verify(function (error, success) {
			if (error) {
				console.log(error);
				reject(error);
			} else {
				console.log('Server is ready to take our messages');
				resolve(success);
			}
		});
	});

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
	return new Response('OK');
}
