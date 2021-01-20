import * as Types from '../../../global-types';

import { gql } from '@apollo/client';
export type ConsultantFieldsFragment = {
	__typename?: 'Consultant';
	content: Types.Maybe<string>;
	id: string;
	title: Types.Maybe<string>;
	slug: Types.Maybe<string>;
	modified: Types.Maybe<string>;
	featuredImage: Types.Maybe<{
		__typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
		node: Types.Maybe<{
			__typename?: 'MediaItem';
			sourceUrl: Types.Maybe<string>;
		}>;
	}>;
};

export const ConsultantFieldsFragmentDoc = gql`
	fragment ConsultantFields on Consultant {
		content
		id
		title
		slug
		modified
		featuredImage {
			node {
				sourceUrl
			}
		}
	}
`;
