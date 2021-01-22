import * as Types from '../../../global/global-types.generated';

import { gql } from '@apollo/client';
export type ConsultantFieldsFragment = { __typename?: 'Consultant' } & Pick<
	Types.Consultant,
	'content' | 'id' | 'title' | 'slug' | 'modified'
> & {
		featuredImage?: Types.Maybe<
			{ __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge' } & {
				node?: Types.Maybe<
					{ __typename?: 'MediaItem' } & Pick<Types.MediaItem, 'sourceUrl'>
				>;
			}
		>;
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
