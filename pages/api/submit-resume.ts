import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';
// import fs from 'fs';
// const aws = require('aws-sdk');
const smtpEndpoint = 'email-smtp.us-east-2.amazonaws.com';
// import { SESClient, SendTemplatedEmailCommand } from '@aws-sdk/client-ses';
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
// resumes@drisdellconsulting.com
// bcc mary.drisdell@drisdellconsulting.com

// type IResponse = {
// 	error?: string;
// 	data?: {
// 		payload: {
// 			text: string;
// 			name: string;
// 			subject: string;
// 			email: string;
// 			resume: string | File;
// 			coverLetter: string | File;
// 		}[];
// 	};
// };

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { text, name, email, resume } = req.body;
	console.log(req.body);
	console.log(resume);
	try {
		const subjectSmtp = `Resume Submission Event`;
		const body_text = `Resume Submission via AWS SES & Nodemailer
	---------------------------------------------------------
	${text}
	`;

		// email providers that accept embedded html
		const body_html = `<html>
	<head></head>
	<body>
		<h1>Resume Submission from ${name}</h1>
		<h2>name: ${name}</h2>
		<h2>email: ${email}</h2>
		 <p>${text}</p>
	</body>
	</html>`;
		let transporter = nodemailer.createTransport({
			host: smtpEndpoint,
			port: port,
			secure: true, // true for 465, false for all other ports
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
			html: body_html,
			attachments: resume
			// attachments: [
			// 	{
			// 		filename: `${__dirname + resume}`,
			// 		path: __dirname + `${resume}`,
			// 		content: `${resume}`
			// 	}
			// ]
		};
		const data = [text, name, email, resume];

		let response = await transporter.sendMail(mailOptions, {
			// @ts-ignore
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json; application/msword; charset=utf-8',
				'Cache-Control': 's-maxage=1, stale-while-revalidate',
				'Accept-Encoding': 'gzip'
			},
			method: ['POST', 'GET', 'OPTIONS']
		});

		// swallow any errors from aws ses and return a better error message

		if (response === typeof Error) {
			return res.status(400).json({
				error:
					'There was an internal error ⚙... \n Shoot me an email at [Mary.Drisdell@drisdellconsulting.com]'
			});
		}
		return res.status(201).send({ error: '' });
	} catch (error) {
		return res.status(500).json({ error: error.message || error.toString() });
	}
};

// https://github.com/awsdocs/aws-doc-sdk-examples/blob/master/javascript/example_code/ses/ses_sendemailsmtp.js
