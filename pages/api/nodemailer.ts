import nodemailer, { SentMessageInfo } from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';
// import parseConnectionUrl from 'nodemailer';
// const aws = require('aws-sdk');
// import { Serialize } from '@lib/jsonify';
const port = 465;
import secrets from '../../aws';
const {
	SMTP_SENDER_ADDRESS,
	SMTP_RECIPIENT_ADDRESS,
	SMTP_PASSWORD,
	SMTP_USERNAME,
	SMTP_BCC_ADDRESS
} = secrets;
const senderAddress = SMTP_SENDER_ADDRESS;
const toAddress = SMTP_RECIPIENT_ADDRESS;
const ccAddress = SMTP_SENDER_ADDRESS;
const bccAddress = SMTP_BCC_ADDRESS;
const smtpUsername = SMTP_USERNAME;
const smtpPassword = SMTP_PASSWORD;

// type IBody = {
// 	error?: string;
// 	data?: {
// 		text: string;
// 		name: string;
// 		subject: string;
// 		email: string;
// 	}[];
// };

// type IResult = {

// }
// https://github.com/vercel/next.js/discussions/11634
export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { text, subject, name, email } = req.body;
	try {
		const subjectSmtp = `Contact Us Submission Event - ${subject}`;
		const body_text = `Contact Us Form Submission via AWS SES & Nodemailer
	---------------------------------------------------------
	${text}
	`;
		const body_html = `<html>
	<head></head>
	<body>
		<h1>${subject}</h1>
		\n
		<h2>Name: ${name}</p>
		\n
		<h2>email: ${email}</h2>
		\n
		<p>${text}</p>
	</body>
	</html>`;
		let transporter = nodemailer.createTransport({
			host: 'email-smtp.us-east-2.amazonaws.com',
			port: port,
			secure: true,
			auth: {
				user: smtpUsername,
				pass: smtpPassword
			},
			logger: true,
			debug: true
		});
		let mailOptions = {
			from: senderAddress,
			to: toAddress,
			subject: subjectSmtp,
			cc: ccAddress,
			bcc: bccAddress,
			text: body_text,
			html: body_html
		};
		// const data = [text, subject, name, email];

		let response: SentMessageInfo = await transporter.sendMail(
			mailOptions,
			(info, err) => {
				if (!err)
					console.log(
						'\n info.message: ',
						info?.message,
						'\n info.stack: ',
						info?.stack,
						'\n info.name: ',
						info?.name
					);
				console.log(err);
				// @ts-ignore
				// body: JSON.stringify(data),
				// headers: {
				// 	'Content-Type': 'application/json; charset=utf-8',
				// 	'Cache-Control': 's-maxage=1, stale-while-revalidate',
				// 	'Accept-Encoding': 'gzip'
				// },
				// method: 'POST'
			}
		);
		// console.log('Message sent: %s', response.messageId);
		// console.log('Message Envelope: %s', response.envelope);
		// swallow any errors from aws ses and return a better error message
		// res.setHeader('Cache-Control', 's-maxage=86400');
		if (response === typeof Error) {
			return res.status(400).json({
				error:
					'There was an internal error ⚙... \n Shoot me an email at [Mary.Drisdell@drisdellconsulting.com]'
			});
		}
		return res.status(200).json({ error: '', data: (await response) ?? '' });
	} catch (error) {
		return res.status(500).json({ error: error.message || error.toString() });
	}
};

// import nodemailer from 'nodemailer';
// import { NextApiRequest, NextApiResponse } from 'next';
// const AWS = require('aws-sdk');
// // import { Serialize } from '@lib/jsonify';
// // const smtpEndpoint = 'email-smtp.us-east-2.amazonaws.com';
// // const port = 465;
// import secrets from '../../aws';
// const {
// 	SMTP_SENDER_ADDRESS,
// 	SMTP_RECIPIENT_ADDRESS,
// 	SMTP_PASSWORD,
// 	SMTP_USERNAME,
// 	SMTP_BCC_ADDRESS
// } = secrets;
// const senderAddress = SMTP_SENDER_ADDRESS;
// const toAddress = SMTP_RECIPIENT_ADDRESS;
// const ccAddress = SMTP_SENDER_ADDRESS;
// const bccAddress = SMTP_BCC_ADDRESS;
// const smtpUsername = SMTP_USERNAME;
// const smtpPassword = SMTP_PASSWORD;

// // type IBody = {
// // 	error?: string;
// // 	data?: {
// // 		text: string;
// // 		name: string;
// // 		subject: string;
// // 		email: string;
// // 	}[];
// // };

// // type IResult = {

// // }

// // type IResponse = {
// // 	error?: Error;
// // 	envelope?: string;
// // 	messageId?: string;
// // }

// // https://github.com/vercel/next.js/discussions/11634
// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
// 	const { text, subject, name, email } = req.body;
// 	console.log(req.body);
// 	console.log(text);
// 	AWS.config.update({
// 		accessKeyId: `${smtpUsername}`,
// 		secretAccessKey: `${smtpPassword}`,
// 		region: `us-east-2`
// 	});
// 	try {
// 		const subjectSmtp = `Contact Us Submission Event - ${subject}`;
// 		const body_text = `Contact Us Form Submission via AWS SES & Nodemailer
// 	---------------------------------------------------------
// 	${text}
// 	`;
// 		const body_html = `<html>
// 	<head></head>
// 	<body>
// 		<h1>${subject}</h1>
// 		\n
// 		<h2>Name: ${name}</p>
// 		\n
// 		<h2>email: ${email}</h2>
// 		\n
// 		<p>${text}</p>
// 	</body>
// 	</html>`;
// 		let transporter = nodemailer.createTransport({
// 			// host: smtpEndpoint,
// 			// port: port,
// 			// secure: true,
// 			// auth: {
// 			// 	user: smtpUsername,
// 			// 	pass: smtpPassword
// 			// },
// 			// logger: true,
// 			// debug: true,
// 			SES: new AWS.SES({
// 				apiVersion: '2010-12-01'
// 			})
// 		});
// 		let mailOptions = {
// 			from: senderAddress,
// 			to: toAddress,
// 			subject: subjectSmtp,
// 			cc: ccAddress,
// 			bcc: bccAddress,
// 			text: body_text,
// 			html: body_html
// 		};
// 		const data = [text, subject, name, email];

// 		let response = await transporter.sendMail(mailOptions, {
// 			// @ts-ignore
// 			body: JSON.stringify(data),
// 			headers: {
// 				'Content-Type': 'application/json; charset=utf-8',
// 				'Cache-Control': 's-maxage=1, stale-while-revalidate',
// 				'Accept-Encoding': 'gzip'
// 			},
// 			method: ['POST']
// 		})

// 		// swallow any errors from aws ses and return a better error message
// 		res.setHeader('Cache-Control', 's-maxage=86400');
// 		if (response === typeof Error) {
// 			return res.status(400).json({
// 				error:
// 					'There was an internal error ⚙... \n Shoot me an email at [Mary.Drisdell@drisdellconsulting.com]'
// 			});
// 		}

// 		return res.status(200).send({ error: '', data: data ?? '' });
// 	} catch (error) {
// 		return res.status(500).json({ error: error.message || error.toString() });
// 	}
// };

// // https://github.com/awsdocs/aws-doc-sdk-examples/blob/master/javascript/example_code/ses/ses_sendemailsmtp.js
// // https://github.com/vercel/vercel/discussions/4387

// export default handler;
