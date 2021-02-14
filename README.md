# drisdell-consulting-services

### approach from AWS-TS SDK V3...no dice

```ts
import {
	SESClient,
	SendEmailCommand,
	SendEmailCommandInput
} from '@aws-sdk/client-ses';

const REGION = 'us-east-2';
const ses = new SESClient({ region: REGION });
export async function handler({
	text,
	email,
	name,
	subject,
	ccAddress,
	bccAddress,
	toAddress
}: any) {
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
	const params: SendEmailCommandInput = {
		Destination: {
			CcAddresses: [`${ccAddress}`],
			BccAddresses: [`${bccAddress}`],
			ToAddresses: [`${toAddress}`]
		},
		Message: {
			Body: {
				Html: {
					Charset: 'UTF-8',
					Data: body_html
				},
				Text: {
					Charset: 'UTF-8',
					Data: body_text
				}
			},
			Subject: {
				Charset: 'UTF-8',
				Data: subjectSmtp
			}
		},
		Source: `${process.env.SMTP_SENDER_ADDRESS}`,
		ReplyToAddresses: [`${process.env.SMTP_SENDER_ADDRESS}`]
	};
	try {
		const data = await ses.send(new SendEmailCommand(params));
		console.log('data', data);
	} catch (err) {
		console.log('error', err);
	}
}
```

## use id instead of slug for object key in abstracted getStaticPaths type

## [SES V3 TS](https://github.com/awsdocs/aws-doc-sdk-examples/tree/master/javascriptv3/example_code/ses/src)

## [aws-doc-sdk-examples/jsv3(ts)/example_code](https://github.com/awsdocs/aws-doc-sdk-examples/tree/master/javascriptv3/example_code)

## [File Storage and Uploads](https://vercel.com/docs/solutions/file-storage)

## [Definitely Typed](https://www.typescriptlang.org/dt/search?search=)

## [NodeMailer w3Path](https://w3path.com/node-js-send-email-with-attachment/)

## [Stack Abuse Nodemailer](https://stackabuse.com/read-files-with-node-js/)

## [Vercel Serverless Functions](https://vercel.com/docs/serverless-functions/introduction)

## [Formspree](https://formspree.io/javascript)

## [Auth0 -- TypeScript -- Nextjs](https://github.com/auth0/nextjs-auth0/tree/master/examples/typescript-example)

## [Nodemailer + Mailgun -- api for submitting emails with a form ✉](https://www.reddit.com/r/nextjs/comments/gvvkn7/email_with_forms_serverless_function/)

- https://leerob.io/snippets/google-analytics

## [Effective TS - Advanced Methods](https://effectivetypescript.com/2020/11/05/template-literal-types)

## Next + ApolloClient v3

- https://github.com/vercel/next.js/discussions/10946

## GraphQL Codegen

- https://medium.com/swlh/how-to-configure-react-apollo-client-and-graphql-codegen-to-do-work-for-you-ecb305d983aa

## S3 Bucket

- https://aws.amazon.com/blogs/compute/deploying-a-highly-available-wordpress-site-on-amazon-lightsail-part-1-implementing-a-highly-available-lightsail-database-with-wordpress/
- https://aws.amazon.com/blogs/compute/deploying-a-highly-available-wordpress-site-on-amazon-lightsail-part-2-using-amazon-s3-with-wordpress-to-securely-deliver-media-files/
- https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-connecting-wordpress-to-amazon-s3

## Use Amazon CloudFront

- https://aws.amazon.com/blogs/compute/deploying-a-highly-available-wordpress-site-on-amazon-lightsail-part-3-increasing-security-and-performance-using-amazon-cloudfront/

## CDN Without using a custom domain

- https://aws.amazon.com/blogs/compute/improving-website-performance-with-lightsail-content-delivery-network/

## [disqus-react](https://github.com/disqus/disqus-react)

- Comment Embed, comment count, etc.

### Checkout and create a new branch

```git
git checkout -b <new branch name>
```

### Checkout to an existing branch (commit -m changes with or without pushing first)

```git
git checkout <branch name>
```

### remove files from the index to gitignore

```git
# Remove the files from the index (not the actual files in the working copy)
$ git rm -r --cached .
```

### forcefully delete node_modules (or any other file)

```git
git rm -rf node_modules
```

## Headlessui/react

- https://github.com/tailwindlabs/headlessui/tree/develop/packages/%40headlessui-react#menu-button-dropdown

## Color Wheel and Palettes

- https://www.color-hex.com/color-wheel/

Nextjs, AWS Cloudfront, Headless WordPress, TypeScript, Apollo Client, GraphQL Codegen, WPGraphQL, Tailwindcss, and Vercel

### Headers Returned Demystified via Postman

| Key                           | Value                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------ |
| Content-Type                  | application/json; charset=UTF-8                                                |
| Transfer-Encoding             | chunked                                                                        |
| Connection                    | keep-alive                                                                     |
| Date                          | Thu, 26 Nov 2020 06:03:03 GMT                                                  |
| Server                        | Apache                                                                         |
| X-Powered-By                  | PHP/7.3.18                                                                     |
| Access-Control-Allow-Origin   | \*                                                                             |
| Access-Control-Allow-Headers  | Authorization, Content-Type, X-JWT-Auth, X-JWT-Refresh                         |
| Access-Control-Max-Age        | 600                                                                            |
| X-Robots-Tag                  | noindex                                                                        |
| X-Content-Type-Options        | nosniff                                                                        |
| X-hacker                      | If you're reading this, you should visit github.com/wp-graphql and contribute! |
| Access-Control-Expose-Headers | X-JWT-Refresh                                                                  |
| X-Frame-Options               | SAMEORIGIN                                                                     |
| Vary                          | Cookie                                                                         |
| Cache-Control                 | s-maxage=10                                                                    |
| X-Cache                       | Miss from cloudfront                                                           |
| Via                           | 1.1 aae94205fef749bc8580cf140c626670.cloudfront.net (CloudFront)               |
| X-Amz-Cf-Pop                  | SFO5-C1                                                                        |
| X-Amz-Cf-Id                   | OcLSLSFemPJL5Tl6JFmSuhsWS4gq5Evg9Dg-wurJRrw2NiV4VR7CsA==                       |

### [Resume Refactoring](https://leerob.io/blog/resume)

### [DynamoDB](https://egghead.io/lessons/aws-use-aws-iam-to-create-a-user-with-permission-for-dynamodb)

### [Nodemailer+SES](https://nodemailer.com/transports/ses/)

### [Script to run to send mail from cli](https://docs.aws.amazon.com/cli/latest/reference/ses/send-email.html)

```d
$ aws ses send-email --from andrew@windycitydevs.io --destination file://destination.json --message file://message.json
```
