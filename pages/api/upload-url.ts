import aws from 'aws-sdk';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	aws.config.update({
		accessKeyId: process.env.ACCESS_KEY,
		secretAccessKey: process.env.SECRET_KEY,
		region: process.env.REGION,
		signatureVersion: 'v4'
	});

	const s3 = new aws.S3();
	const uploadResume = await s3.createPresignedPost({
		Bucket: process.env.BUCKET_NAME,
		Fields: {
			key: req.query.file
		},
		Expires: 60, // seconds
		Conditions: [
			['content-length-range', 0, 1048576] // Bytes = 1 MB
		]
	});
	res.status(200).json(uploadResume);
}

/**
 * X-Amz-Signature achieved via @createPresignedPost
 * 'X-Amz-Signature': string;
 * A hex-encoded HMAC of the POST policy, signed with the credentials
 * provided to the S3 client.
 */
