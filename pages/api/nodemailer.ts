import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';
import secrets from 'aws';

const port = 465;
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

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { text, subject, name, email } = req.body;
	try {
		const body_subject = `Contact Us Submission Event - ${subject}`;
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
			host: 'email-smtp.us-east-1.amazonaws.com',
			port: port,
			secure: true,
			auth: {
				user: smtpUsername,
				pass: smtpPassword
			}
		});

		let response = transporter.sendMail({
			sender: senderAddress,
			from: `${senderAddress}`,
			to: toAddress,
			cc: ccAddress,
			bcc: bccAddress,
			subject: body_subject,
			text: body_text,
			html: body_html
		});
		if ((await response) === typeof Error) {
			return res.status(400).json({
				error:
					'There was an internal error ⚙... \n Shoot me an email at [Mary.Drisdell@drisdellconsulting.com]'
			});
		}
		return res.status(200).json({ error: '', data: response ?? '' });
	} catch (error) {
		return res.status(500).json({ error: error.message || error.toString() });
	}
};
export default handler;
