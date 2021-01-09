/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {
	OrderEnum,
	PostObjectsConnectionOrderbyEnum
} from './../../../../_types/graphql-global-types';

// ====================================================
// GraphQL query operation: ConsultantsPage
// ====================================================

export interface ConsultantsPage_pages_edges_node_featuredImage_node {
	__typename: 'MediaItem';
	/**
	 * Url of the mediaItem
	 */
	sourceUrl: string | null;
}

export interface ConsultantsPage_pages_edges_node_featuredImage {
	__typename: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: ConsultantsPage_pages_edges_node_featuredImage_node | null;
}

export interface ConsultantsPage_pages_edges_node_children_nodes_MediaItem {
	__typename: 'MediaItem' | 'Post';
	/**
	 * The uri slug for the post. This is equivalent to the WP_Post->post_name field and the post_name column in the database for the "post_objects" table.
	 */
	slug: string | null;
}

export interface ConsultantsPage_pages_edges_node_children_nodes_Page {
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

export type ConsultantsPage_pages_edges_node_children_nodes =
	| ConsultantsPage_pages_edges_node_children_nodes_MediaItem
	| ConsultantsPage_pages_edges_node_children_nodes_Page;

export interface ConsultantsPage_pages_edges_node_children {
	__typename: 'HierarchicalContentNodeToContentNodeChildrenConnection';
	/**
	 * The nodes of the connection, without the edges
	 */
	nodes: (ConsultantsPage_pages_edges_node_children_nodes | null)[] | null;
}

export interface ConsultantsPage_pages_edges_node {
	__typename: 'Page';
	/**
	 * Connection between the NodeWithFeaturedImage type and the MediaItem type
	 */
	featuredImage: ConsultantsPage_pages_edges_node_featuredImage | null;
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
	children: ConsultantsPage_pages_edges_node_children | null;
}

export interface ConsultantsPage_pages_edges {
	__typename: 'RootQueryToPageConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: ConsultantsPage_pages_edges_node | null;
}

export interface ConsultantsPage_pages {
	__typename: 'RootQueryToPageConnection';
	/**
	 * Edges for the RootQueryToPageConnection connection
	 */
	edges: (ConsultantsPage_pages_edges | null)[] | null;
}

export interface ConsultantsPage {
	/**
	 * Connection between the RootQuery type and the page type
	 */
	pages: ConsultantsPage_pages | null;
}

export interface ConsultantsPageVariables {
	name: string;
	order: OrderEnum;
	field: PostObjectsConnectionOrderbyEnum;
}
