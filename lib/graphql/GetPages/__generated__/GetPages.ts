/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {
	PostObjectsConnectionOrderbyEnum,
	OrderEnum
} from './../../../../_types/graphql-global-types';

// ====================================================
// GraphQL query operation: GetPages
// ====================================================

export interface GetPages_pages_nodes {
	__typename: 'Page';
	/**
	 * The globally unique identifier of the page object.
	 */
	id: string;
	/**
	 * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
	 */
	slug: string | null;
	/**
	 * URI path for the resource
	 */
	uri: string;
}

export interface GetPages_pages {
	__typename: 'RootQueryToPageConnection';
	/**
	 * The nodes of the connection, without the edges
	 */
	nodes: (GetPages_pages_nodes | null)[] | null;
}

export interface GetPages {
	/**
	 * Connection between the RootQuery type and the page type
	 */
	pages: GetPages_pages | null;
}

export interface GetPagesVariables {
	first: number;
	field: PostObjectsConnectionOrderbyEnum;
	order: OrderEnum;
}
