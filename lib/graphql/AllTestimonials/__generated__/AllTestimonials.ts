/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {
	PostObjectsConnectionOrderbyEnum,
	OrderEnum
} from './../../../../_types/graphql-global-types';

// ====================================================
// GraphQL query operation: AllTestimonials
// ====================================================

export interface AllTestimonials_testimonials_edges_node_featuredImage_node {
	__typename: 'MediaItem';
	/**
	 * Url of the mediaItem
	 */
	sourceUrl: string | null;
}

export interface AllTestimonials_testimonials_edges_node_featuredImage {
	__typename: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: AllTestimonials_testimonials_edges_node_featuredImage_node | null;
}

export interface AllTestimonials_testimonials_edges_node {
	__typename: 'Testimonial';
	/**
	 * The content of the post.
	 */
	content: string | null;
	/**
	 * The globally unique identifier of the testimonial object.
	 */
	id: string;
	/**
	 * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
	 */
	title: string | null;
	/**
	 * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
	 */
	slug: string | null;
	/**
	 * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
	 */
	modified: string | null;
	/**
	 * Connection between the NodeWithFeaturedImage type and the MediaItem type
	 */
	featuredImage: AllTestimonials_testimonials_edges_node_featuredImage | null;
}

export interface AllTestimonials_testimonials_edges {
	__typename: 'RootQueryToTestimonialConnectionEdge';
	/**
	 * A cursor for use in pagination
	 */
	cursor: string | null;
	/**
	 * The item at the end of the edge
	 */
	node: AllTestimonials_testimonials_edges_node | null;
}

export interface AllTestimonials_testimonials {
	__typename: 'RootQueryToTestimonialConnection';
	/**
	 * Edges for the RootQueryToTestimonialConnection connection
	 */
	edges: (AllTestimonials_testimonials_edges | null)[] | null;
}

export interface AllTestimonials {
	/**
	 * Connection between the RootQuery type and the testimonial type
	 */
	testimonials: AllTestimonials_testimonials | null;
}

export interface AllTestimonialsVariables {
	field: PostObjectsConnectionOrderbyEnum;
	order: OrderEnum;
	first: number;
}
