import { render } from '@react-email/components';
import nodemailer from 'nodemailer';
import { Email } from '@/components/email';

export async function POST(req, res) {
	const body = await req.json();
	const { nombre, email, message } = body;

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
	
	const transporterInstance = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: process.env.SMTP_PORT,
		secure: true,
		auth: {
			user: process.env.SMTP_EMAIL,
			pass: process.env.SMTP_PASSWORD,
		},
	});

	const mailOptions = {
		from: process.env.SMTP_EMAIL,
		to: process.env.SMTP_EMAIL,
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
		from: process.env.SMTP_EMAIL,
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

	// verify connection configuration
	await new Promise((resolve, reject) => {
		transporterInstance.verify(function (error, success) {
			if (error) {
				reject(error);
			} else {
				resolve(success);
			}
		});
	});

	// send internal mail
	await new Promise((resolve, reject) => {
		transporterInstance.sendMail(mailOptions, (err, info) => {
			if (err) {
				reject(err);
			} else {
				resolve(info);
			}
		});
	});

	// send client mail
	await new Promise((resolve, reject) => {
		// send mail
		transporterInstance.sendMail(mailClientOptions, (err, info) => {
			if (err) {
				reject(err);
			} else {
				resolve(info);
			}
		});
	});
	return new Response('OK');
	
}
