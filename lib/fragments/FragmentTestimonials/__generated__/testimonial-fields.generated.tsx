import * as Types from '../../../global/global-types.generated';

import { gql } from '@apollo/client';
export type TestimonialFieldsFragment = { __typename?: 'Testimonial' } & Pick<
	Types.Testimonial,
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

export const TestimonialFieldsFragmentDoc = gql`
	fragment TestimonialFields on Testimonial {
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
