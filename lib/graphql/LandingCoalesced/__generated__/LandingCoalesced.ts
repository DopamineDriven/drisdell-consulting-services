/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {
	PostObjectsConnectionOrderbyEnum,
	OrderEnum
} from './../../../graphql-global-types';

// ====================================================
// GraphQL query operation: LandingCoalesced
// ====================================================

export interface LandingCoalesced_landingPage_edges_node_featuredImage_node {
	__typename: 'MediaItem';
	/**
	 * Url of the mediaItem
	 */
	sourceUrl: string | null;
}

export interface LandingCoalesced_landingPage_edges_node_featuredImage {
	__typename: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: LandingCoalesced_landingPage_edges_node_featuredImage_node | null;
}

export interface LandingCoalesced_landingPage_edges_node {
	__typename: 'Page';
	/**
	 * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
	 */
	title: string | null;
	/**
	 * The content of the post.
	 */
	content: string | null;
	/**
	 * The globally unique identifier of the page object.
	 */
	id: string;
	/**
	 * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
	 */
	slug: string | null;
	/**
	 * Connection between the NodeWithFeaturedImage type and the MediaItem type
	 */
	featuredImage: LandingCoalesced_landingPage_edges_node_featuredImage | null;
}

export interface LandingCoalesced_landingPage_edges {
	__typename: 'RootQueryToPageConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: LandingCoalesced_landingPage_edges_node | null;
}

export interface LandingCoalesced_landingPage {
	__typename: 'RootQueryToPageConnection';
	/**
	 * Edges for the RootQueryToPageConnection connection
	 */
	edges: (LandingCoalesced_landingPage_edges | null)[] | null;
}

export interface LandingCoalesced_clientTestimonials_edges_node_featuredImage_node {
	__typename: 'MediaItem';
	/**
	 * Url of the mediaItem
	 */
	sourceUrl: string | null;
}

export interface LandingCoalesced_clientTestimonials_edges_node_featuredImage {
	__typename: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: LandingCoalesced_clientTestimonials_edges_node_featuredImage_node | null;
}

export interface LandingCoalesced_clientTestimonials_edges_node {
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
	featuredImage: LandingCoalesced_clientTestimonials_edges_node_featuredImage | null;
}

export interface LandingCoalesced_clientTestimonials_edges {
	__typename: 'RootQueryToTestimonialConnectionEdge';
	/**
	 * A cursor for use in pagination
	 */
	cursor: string | null;
	/**
	 * The item at the end of the edge
	 */
	node: LandingCoalesced_clientTestimonials_edges_node | null;
}

export interface LandingCoalesced_clientTestimonials {
	__typename: 'RootQueryToTestimonialConnection';
	/**
	 * Edges for the RootQueryToTestimonialConnection connection
	 */
	edges: (LandingCoalesced_clientTestimonials_edges | null)[] | null;
}

export interface LandingCoalesced_aboutPage_edges_node_featuredImage_node {
	__typename: 'MediaItem';
	/**
	 * Url of the mediaItem
	 */
	sourceUrl: string | null;
}

export interface LandingCoalesced_aboutPage_edges_node_featuredImage {
	__typename: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: LandingCoalesced_aboutPage_edges_node_featuredImage_node | null;
}

export interface LandingCoalesced_aboutPage_edges_node {
	__typename: 'Page';
	/**
	 * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
	 */
	title: string | null;
	/**
	 * The content of the post.
	 */
	content: string | null;
	/**
	 * The globally unique identifier of the page object.
	 */
	id: string;
	/**
	 * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
	 */
	slug: string | null;
	/**
	 * Connection between the NodeWithFeaturedImage type and the MediaItem type
	 */
	featuredImage: LandingCoalesced_aboutPage_edges_node_featuredImage | null;
}

export interface LandingCoalesced_aboutPage_edges {
	__typename: 'RootQueryToPageConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: LandingCoalesced_aboutPage_edges_node | null;
}

export interface LandingCoalesced_aboutPage {
	__typename: 'RootQueryToPageConnection';
	/**
	 * Edges for the RootQueryToPageConnection connection
	 */
	edges: (LandingCoalesced_aboutPage_edges | null)[] | null;
}

export interface LandingCoalesced_aboutOur_edges_node_polly {
	__typename: 'About_Polly';
	/**
	 * AWS Polly URL
	 */
	audio: string | null;
}

export interface LandingCoalesced_aboutOur_edges_node_featuredImage_node {
	__typename: 'MediaItem';
	/**
	 * Url of the mediaItem
	 */
	sourceUrl: string | null;
}

export interface LandingCoalesced_aboutOur_edges_node_featuredImage {
	__typename: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: LandingCoalesced_aboutOur_edges_node_featuredImage_node | null;
}

export interface LandingCoalesced_aboutOur_edges_node {
	__typename: 'About';
	/**
	 * The content of the post.
	 */
	content: string | null;
	/**
	 * The globally unique identifier of the about object.
	 */
	id: string;
	/**
	 * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
	 */
	title: string | null;
	/**
	 * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
	 */
	modified: string | null;
	/**
	 * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
	 */
	slug: string | null;
	/**
	 * AWS Polly URL
	 */
	polly: LandingCoalesced_aboutOur_edges_node_polly | null;
	/**
	 * Connection between the NodeWithFeaturedImage type and the MediaItem type
	 */
	featuredImage: LandingCoalesced_aboutOur_edges_node_featuredImage | null;
}

export interface LandingCoalesced_aboutOur_edges {
	__typename: 'RootQueryToAboutConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: LandingCoalesced_aboutOur_edges_node | null;
}

export interface LandingCoalesced_aboutOur {
	__typename: 'RootQueryToAboutConnection';
	/**
	 * Edges for the RootQueryToAboutConnection connection
	 */
	edges: (LandingCoalesced_aboutOur_edges | null)[] | null;
}

export interface LandingCoalesced {
	/**
	 * Connection between the RootQuery type and the page type
	 */
	landingPage: LandingCoalesced_landingPage | null;
	/**
	 * Connection between the RootQuery type and the testimonial type
	 */
	clientTestimonials: LandingCoalesced_clientTestimonials | null;
	/**
	 * Connection between the RootQuery type and the page type
	 */
	aboutPage: LandingCoalesced_aboutPage | null;
	/**
	 * Connection between the RootQuery type and the about type
	 */
	aboutOur: LandingCoalesced_aboutOur | null;
}

export interface LandingCoalescedVariables {
	name: string;
	aboutName: string;
	field: PostObjectsConnectionOrderbyEnum;
	order: OrderEnum;
	first: number;
}
