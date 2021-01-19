import mailgunSdk from 'mailgun-js';
import { NextApiResponse, NextApiRequest } from 'next';
const domain = `${process.env.API_BASE_URL}` ?? '';
const apiKey = process.env.MAILGUN_PRIVATE_API_KEY ?? '';
const mailgun = mailgunSdk({ apiKey, domain });
const approvedeEmail = process.env.MAILGUN_DOMAIN ?? '';
import { parseISO, format } from 'date-fns';

export const MailGun = async (req: NextApiRequest, res: NextApiResponse) => {
	let response;
	let email = 'andrew.simpson.ross@gmail.com';
	const formattedTimeStamp = parseISO(format(Date.now(), 'LLLL	d, yyyy'));
	// const { messages } = mailgun;
	// const { send } = messages();
	// // const { data } = send.caller(sendData);
	try {
		response = await mailgun.messages().send({
			to: (req.body.to = approvedeEmail),
			from: `${(req.body.from = email)} <mailgun@${process.env.MAILGUN_DOMAIN}>`,
			subject: `Sent via Mailgun, ${email} reached out about ${(req.body.subject =
				'🤡 🤡')} on ${formattedTimeStamp}!`,
			text: (req.body.text = ` - ${(req.body.text =
				'this is a test, one, two, three...')}\n
			 - ${(email = req.body.from)}\n,
			   ${formattedTimeStamp}`)
		});
		// const data = {
		// 	to: `${(req.body.to = approvedeEmail)}`,
		// 	from: `email: ${(req.body.from = email)} <mailgun@${
		// 		process.env.MAILGUN_DOMAIN
		// 	}>`,
		// 	subject: `Sent via Mailgun, ${(req.body.from = email)} reached out on ${formattedTimeStamp}!`,
		// 	text: ` - ${(req.body.text = 'this is a test, one, two, three...')}\n
		//   - ${(email = req.body.from)}\n,
		//   ${formattedTimeStamp}`
		// };

		return res
			.status(200)
			.json({ result: { id: response.id, message: response.message } });
	} catch (error) {
		res.status(error.statusCode || 500).json({ error: error.message });
	}
	console.log();
	return { ...response };
};
