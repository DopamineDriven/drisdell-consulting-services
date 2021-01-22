import * as Types from '../../../global/global-types.generated';

import { gql } from '@apollo/client';
export type CustomPageFieldsFragment = { __typename?: 'Page' } & Pick<
	Types.Page,
	'title' | 'content' | 'id' | 'slug'
> & {
		featuredImage?: Types.Maybe<
			{ __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge' } & {
				node?: Types.Maybe<
					{ __typename?: 'MediaItem' } & Pick<Types.MediaItem, 'sourceUrl'>
				>;
			}
		>;
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
