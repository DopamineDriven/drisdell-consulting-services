import mailgunSdk from 'mailgun-js';
import { NextApiResponse, NextApiRequest } from 'next';
const domain = `${process.env.API_BASE_URL}` ?? '';
const apiKey = process.env.MAILGUN_PRIVATE_API_KEY ?? '';
const mailgun = mailgunSdk({ apiKey, domain });

export default async function (
	req: NextApiRequest,
	response: mailgunSdk.messages.SendResponse | undefined,
	res: NextApiResponse
): Promise<void | mailgunSdk.messages.SendResponse> {
	try {
		response = await mailgun.messages().send({
			to: req.body.to,
			from: req.body.from,
			subject: req.body.subject,
			text: req.body.text
		});

		return res.status(200).json({ result: response.message });
	} catch (error) {
		res.status(error.statusCode || 500).json({ error: error.message });
	}
	return response;
}
