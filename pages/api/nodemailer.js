const nodemailer = require('nodemailer');
// const aws = require('aws-sdk');
const smtpEndpoint = 'email-smtp.us-east-2.amazonaws.com';
const port = 465;
const {
	SMTP_SENDER_ADDRESS,
	SMTP_RECIPIENT_ADDRESS,
	SMTP_PASSWORD,
	SMTP_USERNAME
} = require('../../aws');
const senderAddress = SMTP_SENDER_ADDRESS;
const toAddress = SMTP_RECIPIENT_ADDRESS;
const ccAddress = SMTP_SENDER_ADDRESS;
const bccAddress = SMTP_SENDER_ADDRESS;
const smtpUsername = SMTP_USERNAME;
const smtpPassword = SMTP_PASSWORD;

export default async (req, res) => {
	const { text, subject, name, email } = req.body;

	try {
		const subjectSmtp = `Contact Us Form Submission - ${subject}`;
		const body_text = `Contact Us Form Submission via AWS SES & Nodemailer
	---------------------------------------------------------
	${text}
	`;

		const body_html = `<html>
	<head></head>
	<body>
		<h1>${subject}</h1>
		<h2>name: ${name}</p>
		<p>email: ${email}</p>
		<p>This email was sent with <a href="https://aws.amazon.com/ses/" target="_blank">Amazon SES</a>
		 using <a href="https://nodemailer.com" target="_blank">Nodemailer</a> for Node.js. 🎉 </p>
		 <p>${text}</p>
		 <time>${Date.now()}</time>
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
		const data = {
			payload: [text, subject, name, email]
		};
		let response = await transporter.sendMail(mailOptions, {
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST'
		});

		// swallow any errors from aws ses and return a better error message

		if (response.status >= 400) {
			return res.status(400).json({
				error:
					'There was an internal error ⚙... \n Shoot me an email at [Mary.Drisdell@drisdellconsulting.com]'
			});
		}
		return res.status(201).json({ error: '' });
	} catch (err) {
		return res.status(500).json({ error: err.message || err.toString() });
	}
};

// https://github.com/awsdocs/aws-doc-sdk-examples/blob/master/javascript/example_code/ses/ses_sendemailsmtp.js

// let response = await transporter.sendMail(mailOptions);

// console.log('Message sent! Message ID: ', response.messageId);
// res.json({ messageId });

// // console.log(
// // 	'Message sent! Message ID: ',
// // 	response.messageId,
// // 	to,
// // 	from,
// // 	text,
// // 	subject
// // );
