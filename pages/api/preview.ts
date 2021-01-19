import type { NextApiRequest, NextApiResponse } from 'next';

export default (_req: NextApiRequest, res: NextApiResponse) => {
	// Enable Preview Mode by setting the cookies
	res.setPreviewData({});

	// Redirect to the homepage
	res.writeHead(307, { Location: '/' });
	res.end();
};
