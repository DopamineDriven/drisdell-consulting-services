```tsx
import { NextApiRequest, NextApiResponse } from 'next';
import { initializeApollo } from '@lib/apollo';
import { getSlug } from '@lib/index';
import { GET_PREVIEW_PAGE } from '@lib/graphql';
import {
	GetPreviewPage,
	GetPreviewPageVariables
} from '../../lib/graphql/GetPreviewPage/__generated__/GetPreviewPage';
import { PageIdType } from '@_types/graphql-global-types';
import { useRouter } from 'next/router';
import { ApolloQueryResult } from '@apollo/client';
import {
	GetPreviewPage_preview,
	GetPreviewPage
} from '../../lib/graphql/GetPreviewPage/__generated__/GetPreviewPage';

export default async function getPagePreview(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { pathname } = useRouter();
	const apolloClient = initializeApollo();
	const { URI, DATABASE_ID } = PageIdType;
	const { ...preview }: GetPreviewPage = await apolloClient
		.query<
			GetPreviewPage & ApolloQueryResult<typeof preview>,
			GetPreviewPageVariables
		>({
			query: GET_PREVIEW_PAGE,
			notifyOnNetworkStatusChange: true,
			variables: {
				idPage: pathname,
				idTypePage: URI || DATABASE_ID
			},
			returnPartialData: true
		})
		.then(preview => {});
	const { ...databaseId, ...slug, ...uri, ...status } = preview;
	if (
		(preview !== null && !process.env.WORDPRESS_PREVIEW_SECRET) ||
		!databaseId ||
		!slug
	) {
		return (
			res.status(401) &&
			new Error(`401 -- Page Not Found ${typeof preview + typeof status}`)
		);
	}
}

export async function preview(req: NextApiRequest, res: NextApiResponse) {
	const { secret, id, slug } = req.query;

	// Check the secret and next parameters
	// This secret should only be known by this API route
	if (
		!process.env.WORDPRESS_PREVIEW_SECRET ||
		secret !== process.env.WORDPRESS_PREVIEW_SECRET ||
		(!id && !slug)
	) {
		return res.status(401).json({ message: 'Invalid token' });
	}

	// Fetch WordPress to check if the provided `id` or `slug` exists
	const post = await fetch(id || slug, id ? 'DATABASE_ID' : 'SLUG');

	// If the post doesn't exist prevent preview mode from being enabled
	if (!post) {
		return res.status(401).json({ message: 'Post not found' });
	}

	// Enable Preview Mode by setting the cookies
	res.setPreviewData({
		post: {
			id: post.databaseId,
			slug: post.slug,
			status: post.status
		}
	});

	// Redirect to the path from the fetched post
	// We don't redirect to `req.query.slug` as that might lead to open redirect vulnerabilities
	res.writeHead(307, { Location: `/posts/${post.slug || post.databaseId}` });
	res.end();
}
```
