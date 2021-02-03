import * as Types from '../../../global/global-types.generated';

import { gql } from '@apollo/client';
export type PositionFieldsFragment = { __typename?: 'Position' } & Pick<
	Types.Position,
	'content' | 'id' | 'title' | 'modified' | 'excerpt' | 'slug'
> & {
		featuredImage?: Types.Maybe<
			{ __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge' } & {
				node?: Types.Maybe<
					{ __typename?: 'MediaItem' } & Pick<Types.MediaItem, 'sourceUrl'>
				>;
			}
		>;
	};

export const PositionFieldsFragmentDoc = gql`
	fragment PositionFields on Position {
		content
		id
		title
		modified
		excerpt
		slug
		featuredImage {
			node {
				sourceUrl
			}
		}
	}
`;
