import * as Types from '../../../global-types';

import { gql } from '@apollo/client';
export type CustomPageFieldsFragment = {
	__typename?: 'Page';
	title: Types.Maybe<string>;
	content: Types.Maybe<string>;
	id: string;
	slug: Types.Maybe<string>;
	featuredImage: Types.Maybe<{
		__typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
		node: Types.Maybe<{
			__typename?: 'MediaItem';
			sourceUrl: Types.Maybe<string>;
		}>;
	}>;
};

export const CustomPageFieldsFragmentDoc = gql`
	fragment CustomPageFields on Page {
		title
		content
		id
		slug
		featuredImage {
			node {
				sourceUrl
			}
		}
	}
`;
