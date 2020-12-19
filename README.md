# drisdell-consulting-services

## Push for prod

## S3 Bucket

- https://aws.amazon.com/blogs/compute/deploying-a-highly-available-wordpress-site-on-amazon-lightsail-part-2-using-amazon-s3-with-wordpress-to-securely-deliver-media-files/

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

Nextjs, Headless WordPress, TypeScript, Apollo Client, GraphQL Codegen, WPGraphQL, Tailwindcss, and Vercel

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

## develop branch init

- Landing Page ✔
- About Page content on home page
- sub-page routing

## svchost error troubleshooting (windows)

- https://ugetfix.com/ask/how-to-fix-svchost-exe-application-error/

## Debug node with vscode

- https://itnext.io/the-absolute-easiest-way-to-debug-node-js-with-vscode-2e02ef5b1bad

### JavaScript Heap out of Memory (Nodejs)

- https://support.snyk.io/hc/en-us/articles/360002046418-JavaScript-heap-out-of-memory
- https://stackoverflow.com/questions/38558989/node-js-heap-out-of-memory
- https://platformengineer.com/limit-javascript-heap-usage-and-fix-heap-out-of-memory-error-using-max_old_space_size-header/
