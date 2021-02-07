import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';
// const aws = require('aws-sdk');
const smtpEndpoint = 'email-smtp.us-east-2.amazonaws.com';
const port = 465;
import secrets from '../../aws';
const {
	SMTP_SENDER_ADDRESS,
	SMTP_RECIPIENT_ADDRESS,
	SMTP_PASSWORD,
	SMTP_USERNAME
} = secrets;
const senderAddress = SMTP_SENDER_ADDRESS;
const toAddress = SMTP_RECIPIENT_ADDRESS;
const ccAddress = SMTP_SENDER_ADDRESS;
const bccAddress = SMTP_SENDER_ADDRESS;
const smtpUsername = SMTP_USERNAME;
const smtpPassword = SMTP_PASSWORD;
// resumes@drisdellconsulting.com
// bcc mary.drisdell@drisdellconsulting.com
export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { text, subject, name, email, resume, coverLetter } = req.body;
	try {
		const subjectSmtp = `Resume Submission Event - ${subject}`;
		const body_text = `Resume Submission via AWS SES & Nodemailer
	---------------------------------------------------------
	${text}
	`;

		// email providers that accept embedded html
		const body_html = `<html>
	<head></head>
	<body>
		<h1>${subject}</h1>
		<h2>name: ${name}</p>
		<p>email: ${email}</p>
		 <p>${text}</p>
     <input type="file" name=${resume}>${resume}</input>
     <input type="file" name=${coverLetter ?? ''}>${coverLetter ?? ''}</input>
	</body>
	</html>`;
		let transporter = nodemailer.createTransport({
			host: smtpEndpoint,
			port: port,
			secure: true, // true for 465, false for all other ports
			auth: {
				user: smtpUsername,
				pass: smtpPassword
			}
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
		const data: any = {
			payload: [text, subject, name, email, resume, coverLetter]
		};
		let response = await transporter.sendMail(mailOptions, {
			// @ts-ignore
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			method: 'POST'
		});

		// swallow any errors from aws ses and return a better error message

		if (response === typeof Error) {
			return res.status(400).json({
				error:
					'There was an internal error ⚙... \n Shoot me an email at [Mary.Drisdell@drisdellconsulting.com]'
			});
		}
		return res.status(201).json({ error: '' });
	} catch (error) {
		return res.status(500).json({ error: error.message || error.toString() });
	}
};

// https://github.com/awsdocs/aws-doc-sdk-examples/blob/master/javascript/example_code/ses/ses_sendemailsmtp.js