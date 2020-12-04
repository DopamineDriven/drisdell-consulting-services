/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {
	PostObjectsConnectionOrderbyEnum,
	OrderEnum
} from './../../../../_types/graphql-global-types';

// ====================================================
// GraphQL query operation: AboutChildren
// ====================================================

export interface AboutChildren_pages_edges_node {
	__typename: 'Page';
	/**
	 * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
	 */
	slug: string | null;
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
}

export interface AboutChildren_pages_edges {
	__typename: 'RootQueryToPageConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: AboutChildren_pages_edges_node | null;
}

export interface AboutChildren_pages {
	__typename: 'RootQueryToPageConnection';
	/**
	 * Edges for the RootQueryToPageConnection connection
	 */
	edges: (AboutChildren_pages_edges | null)[] | null;
}

export interface AboutChildren {
	/**
	 * Connection between the RootQuery type and the page type
	 */
	pages: AboutChildren_pages | null;
}

export interface AboutChildrenVariables {
	nameIn?: (string | null)[] | null;
	field: PostObjectsConnectionOrderbyEnum;
	order: OrderEnum;
}
