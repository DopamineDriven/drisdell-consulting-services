import * as Types from '../../../global/global-types.generated';

import { gql } from '@apollo/client';
export type AboutFieldsFragment = { __typename?: 'About' } & Pick<
	Types.About,
	'content' | 'id' | 'title' | 'modified' | 'slug'
> & {
		polly?: Types.Maybe<
			{ __typename?: 'About_Polly' } & Pick<Types.About_Polly, 'audio'>
		>;
		featuredImage?: Types.Maybe<
			{ __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge' } & {
				node?: Types.Maybe<
					{ __typename?: 'MediaItem' } & Pick<Types.MediaItem, 'sourceUrl'>
				>;
			}
		>;
	};

export const AboutFieldsFragmentDoc = gql`
	fragment AboutFields on About {
		content
		id
		title
		modified
		slug
		polly {
			audio
		}
		featuredImage {
			node {
				sourceUrl
			}
		}
	}
`;
