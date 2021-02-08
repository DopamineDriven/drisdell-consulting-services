import * as Types from '../../../global/global-types.generated';

import { gql } from '@apollo/client';
export type PositionFieldsFragment = { __typename?: 'Position' } & Pick<
	Types.Position,
	'content' | 'id' | 'title' | 'date' | 'modified' | 'excerpt' | 'slug'
> & {
		positionDetails?: Types.Maybe<
			{ __typename?: 'Position_Positiondetails' } & Pick<
				Types.Position_Positiondetails,
				'dateclosing' | 'jobtitle' | 'positiontype' | 'remotestatus'
			>
		>;
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
		date
		modified
		excerpt
		slug
		positionDetails {
			dateclosing
			jobtitle
			positiontype
			remotestatus
		}
		featuredImage {
			node {
				sourceUrl
			}
		}
	}
`;
