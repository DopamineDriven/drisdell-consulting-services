import { gql, TypedDocumentNode } from '@apollo/client';
import { FRAGMENT_TESTIMONIAL_FIELDS } from '../../fragments';

const ALL_TESTIMONIALS: TypedDocumentNode = gql`
	${FRAGMENT_TESTIMONIAL_FIELDS}
	query AllTestimonials(
		$field: PostObjectsConnectionOrderbyEnum!
		$order: OrderEnum!
		$first: Int!
	) {
		testimonials(
			where: { orderby: { field: $field, order: $order } }
			first: $first
		) {
			edges {
				cursor
				node {
					...TestimonialFields
				}
			}
		}
	}
`;

export default ALL_TESTIMONIALS;
