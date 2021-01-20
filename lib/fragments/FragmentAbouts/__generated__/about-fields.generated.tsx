import * as Types from '../../../global-types';

import { gql } from '@apollo/client';
export type AboutFieldsFragment = {
	__typename?: 'About';
	content: Types.Maybe<string>;
	id: string;
	title: Types.Maybe<string>;
	modified: Types.Maybe<string>;
	slug: Types.Maybe<string>;
	featuredImage: Types.Maybe<{
		__typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
		node: Types.Maybe<{
			__typename?: 'MediaItem';
			sourceUrl: Types.Maybe<string>;
		}>;
	}>;
};

export const AboutFieldsFragmentDoc = gql`
	fragment AboutFields on About {
		content
		id
		title
		modified
		slug
		featuredImage {
			node {
				sourceUrl
			}
		}
	}
`;
