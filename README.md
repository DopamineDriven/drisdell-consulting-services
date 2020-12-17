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

## Dependencies Init For Base Packages

```git
yarn add @apollo/client @artsy/fresnel @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @react-aria/overlays apollo classnames date-fns deepmerge graphql keen-slider lodash.random lodash.throttle next react react-aria react-dom react-ga react-intersection-observer react-markdown react-syntax-highlighter react-ticker subscriptions-transport-ws tailwindcss postcss-import@12.0.0 postcss-nesting @headlessui/react && yarn add -D @graphql-codegen/cli @graphql-codegen/introspection @graphql-codegen/plugin-helpers @graphql-codegen/typed-document-node @graphql-codegen/typescript @graphql-codegen/typescript-apollo-client-helpers @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo @next/bundle-analyzer @types/classnames @types/gtag.js @types/jest @types/js-cookie @types/lodash.random @types/lodash.throttle @types/node @types/react @types/react-dom @types/react-syntax-highlighter @types/react-test-renderer autoprefixer babel-jest graphql-tag husky jest next-compose-plugins patch-package postinstall-postinstall postcss-flexbugs-fixes postcss-preset-env prettier pretty-quick react-test-renderer stylelint stylelint-config-recommended tailwindcss-gradients typescript yaml-loader && yarn add -P @babel/core@7.0.0 prop-types@15.6.0
```
