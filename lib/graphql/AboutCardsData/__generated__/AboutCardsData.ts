/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {
	PostObjectsConnectionOrderbyEnum,
	OrderEnum
} from './../../../graphql-global-types';

// ====================================================
// GraphQL query operation: AboutCardsData
// ====================================================

export interface AboutCardsData_pages_edges_node_featuredImage_node {
	__typename: 'MediaItem';
	/**
	 * Url of the mediaItem
	 */
	sourceUrl: string | null;
}

export interface AboutCardsData_pages_edges_node_featuredImage {
	__typename: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: AboutCardsData_pages_edges_node_featuredImage_node | null;
}

export interface AboutCardsData_pages_edges_node {
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
	featuredImage: AboutCardsData_pages_edges_node_featuredImage | null;
}

export interface AboutCardsData_pages_edges {
	__typename: 'RootQueryToPageConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: AboutCardsData_pages_edges_node | null;
}

export interface AboutCardsData_pages {
	__typename: 'RootQueryToPageConnection';
	/**
	 * Edges for the RootQueryToPageConnection connection
	 */
	edges: (AboutCardsData_pages_edges | null)[] | null;
}

export interface AboutCardsData_abouts_edges_node_featuredImage_node {
	__typename: 'MediaItem';
	/**
	 * Url of the mediaItem
	 */
	sourceUrl: string | null;
}

export interface AboutCardsData_abouts_edges_node_featuredImage {
	__typename: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: AboutCardsData_abouts_edges_node_featuredImage_node | null;
}

export interface AboutCardsData_abouts_edges_node {
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
	 * Connection between the NodeWithFeaturedImage type and the MediaItem type
	 */
	featuredImage: AboutCardsData_abouts_edges_node_featuredImage | null;
}

export interface AboutCardsData_abouts_edges {
	__typename: 'RootQueryToAboutConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: AboutCardsData_abouts_edges_node | null;
}

export interface AboutCardsData_abouts {
	__typename: 'RootQueryToAboutConnection';
	/**
	 * Edges for the RootQueryToAboutConnection connection
	 */
	edges: (AboutCardsData_abouts_edges | null)[] | null;
}

export interface AboutCardsData {
	/**
	 * Connection between the RootQuery type and the page type
	 */
	pages: AboutCardsData_pages | null;
	/**
	 * Connection between the RootQuery type and the about type
	 */
	abouts: AboutCardsData_abouts | null;
}

export interface AboutCardsDataVariables {
	name: string;
	field: PostObjectsConnectionOrderbyEnum;
	order: OrderEnum;
	first: number;
}
