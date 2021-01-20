import * as Types from '../../../global-types';

import { gql } from '@apollo/client';
export type TestimonialFieldsFragment = {
	__typename?: 'Testimonial';
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
