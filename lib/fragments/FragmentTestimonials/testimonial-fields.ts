import { gql, TypedDocumentNode } from '@apollo/client';

const TESTIMONIAL_FIELDS: TypedDocumentNode = gql`
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

export default TESTIMONIAL_FIELDS;
