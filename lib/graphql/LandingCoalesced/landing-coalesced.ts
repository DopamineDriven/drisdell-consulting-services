import { gql, TypedDocumentNode } from '@apollo/client';
import {
	FRAGMENT_TESTIMONIAL_FIELDS,
	FRAGMENT_CUSTOM_PAGE_FIELDS,
	FRAGMENT_ABOUT_FIELDS
} from '../../fragments';

const LANDING_COALESCED: TypedDocumentNode = gql`
${FRAGMENT_ABOUT_FIELDS},
	${FRAGMENT_CUSTOM_PAGE_FIELDS},
  ${FRAGMENT_TESTIMONIAL_FIELDS}
query LandingCoalesced($name: String!, $aboutName:String!, $field: PostObjectsConnectionOrderbyEnum!, $order: OrderEnum!, $first: Int!) {
  landingPage: pages(where: {name: $name}) {
    edges {
      node {
        ...CustomPageFields
      }
    }
  }
  clientTestimonials: testimonials(where: {orderby: {field: $field, order: $order}}, first: $first) {
    edges {
      cursor
      node {
        ...TestimonialFields
      }
    }
  }
  aboutPage: pages(where: { name: $aboutName }) {
  edges {
    node {
      ...CustomPageFields
    }
  }
  }
  aboutOur: abouts(first: $first, where: { orderby: { field:$field, order:$order} }) {
    edges{
      node {
        ...AboutFields
      }
    }
  }
}
`;

export default LANDING_COALESCED;
