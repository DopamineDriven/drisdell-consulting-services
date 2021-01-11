/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {
	OrderEnum,
	PostObjectsConnectionOrderbyEnum
} from './../../../../_types/graphql-global-types';

// ====================================================
// GraphQL query operation: AboutPage
// ====================================================

export interface AboutPage_pages_edges_node_featuredImage_node {
	__typename: 'MediaItem';
	/**
	 * Url of the mediaItem
	 */
	sourceUrl: string | null;
}

export interface AboutPage_pages_edges_node_featuredImage {
	__typename: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: AboutPage_pages_edges_node_featuredImage_node | null;
}

export interface AboutPage_pages_edges_node_children_nodes_About {
	__typename: 'About' | 'MediaItem' | 'Post' | 'Testimonial';
	/**
	 * The uri slug for the post. This is equivalent to the WP_Post->post_name field and the post_name column in the database for the "post_objects" table.
	 */
	slug: string | null;
}

export interface AboutPage_pages_edges_node_children_nodes_Page {
	__typename: 'Page';
	/**
	 * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
	 */
	slug: string | null;
	/**
	 * The globally unique identifier of the page object.
	 */
	id: string;
	/**
	 * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
	 */
	title: string | null;
}

export type AboutPage_pages_edges_node_children_nodes =
	| AboutPage_pages_edges_node_children_nodes_About
	| AboutPage_pages_edges_node_children_nodes_Page;

export interface AboutPage_pages_edges_node_children {
	__typename: 'HierarchicalContentNodeToContentNodeChildrenConnection';
	/**
	 * The nodes of the connection, without the edges
	 */
	nodes: (AboutPage_pages_edges_node_children_nodes | null)[] | null;
}

export interface AboutPage_pages_edges_node {
	__typename: 'Page';
	/**
	 * Connection between the NodeWithFeaturedImage type and the MediaItem type
	 */
	featuredImage: AboutPage_pages_edges_node_featuredImage | null;
	/**
	 * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
	 */
	title: string | null;
	/**
	 * The content of the post.
	 */
	content: string | null;
	/**
	 * Connection between the HierarchicalContentNode type and the ContentNode type
	 */
	children: AboutPage_pages_edges_node_children | null;
}

export interface AboutPage_pages_edges {
	__typename: 'RootQueryToPageConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: AboutPage_pages_edges_node | null;
}

export interface AboutPage_pages {
	__typename: 'RootQueryToPageConnection';
	/**
	 * Edges for the RootQueryToPageConnection connection
	 */
	edges: (AboutPage_pages_edges | null)[] | null;
}

export interface AboutPage {
	/**
	 * Connection between the RootQuery type and the page type
	 */
	pages: AboutPage_pages | null;
}

export interface AboutPageVariables {
	name: string;
	order: OrderEnum;
	field: PostObjectsConnectionOrderbyEnum;
}
