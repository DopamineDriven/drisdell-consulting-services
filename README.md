# drisdell-consulting-services

# TO-DO

- repurpose skillsandpositions gql data for _any_ custom consultant page (submit resume portal injection)
- do the same with about-us for careers and project-delivery
- double check getStaticPaths/getStaticProps config of dynamic sub-directories for optimization

## Can only initialize cdk as a typescript project if the project repo is empty

```ts
import core, { App, Stack, StackProps } from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import { HttpMethods, BucketAccessControl } from '@aws-cdk/aws-s3/lib';

export class CdkStack extends Stack {
	constructor(scope: App, id: string, props?: StackProps) {
		super(scope, id, props);

		new s3.Bucket(this, 'ResumeBucket', {
			versioned: true,
			removalPolicy: core.RemovalPolicy.DESTROY,
			accessControl: BucketAccessControl.PRIVATE,
			publicReadAccess: false,
			cors: [
				{
					allowedHeaders: ['*'],
					allowedMethods: [HttpMethods.POST],
					allowedOrigins: ['*']
				}
			]
		});
	}
}
```

### [oEmbed](https://webdevstudios.com/2019/08/15/fixing-oembed/)

```php
<?php
namespace EPH\DAEmbed;

function register_providers() {
	$callback = __NAMESPACE__ . '\handle_deviantart';

	wp_embed_register_handler( 'deviantart-main', '#https://www.deviantart.com/*+#', $callback, 10 );
	// Include other handlers as needed
}

function handle_deviantart( $matches, $attr, $url, $rawattr ) {
	$http_options = [
		'headers' => [
			'User-Agent'      => 'WordPress OEmbed Consumer',
		],
	];

	$da_response = \wp_remote_get( 'https://backend.deviantart.com/oembed?url=' . rawurlencode( $url ), $http_options );
	if ( empty( $da_response ) || 200 !== $da_response['response']['code'] ) {
		return "<p><!-- Could not embed --><a href=\"{$url}\">View Deviation</a></p>";
	}

	// Generate client-side HTML here

	return $html;
}

add_action( 'init', __NAMESPACE__ . '\register_providers' );
```

### [Useful MIME Types](https://stackoverflow.com/questions/4212861/what-is-a-correct-mime-type-for-docx-pptx-etc)

### [AWS SES Raw Email Attachments](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-raw.html)

- Content-Type: The file type of the attachment. The following are examples of common MIME Content-Type declarations:

  - Plain text file: Content-Type: text/plain; name="sample.txt"

  - Microsoft Word Document: Content-Type: application/msword; name="document.docx"

  - JPG image: Content-Type: image/jpeg; name="photo.jpeg"

- Content-Disposition: Specifies how the recipient's email client should handle the content. For attachments, this value is

  - Content-Disposition: attachment

- Content-Transfer-Encoding: The scheme that was used to encode the attachment. For file attachments, this value is almost always base64

  - Content-Transfer-Encoding: base64

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
