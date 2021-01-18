import mailgunSdk from 'mailgun-js';
import { NextApiResponse, NextApiRequest } from 'next';
const domain = `mail.${process.env.MAILGUN_DOMAIN}` ?? '';
const apiKey = process.env.MAILGUN_API_KEY ?? '';
const mailgun = mailgunSdk({ apiKey, domain });

export default async (req: NextApiRequest, res: NextApiResponse) => {
	let response;

	try {
		response = await mailgun.messages().send({
			to: req.body.to,
			from: req.body.from,
			subject: req.body.subject,
			text: req.body.text
		});
	} catch (error) {
		return res.status(error.statusCode || 500).json({ error: error.message });
	}

	return res.status(200).json({ result: response.message });
};
