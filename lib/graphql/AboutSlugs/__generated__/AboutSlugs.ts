/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {
	PostObjectsConnectionOrderbyEnum,
	OrderEnum
} from './../../../graphql-global-types';

// ====================================================
// GraphQL query operation: AboutSlugs
// ====================================================

export interface AboutSlugs_aboutslugs_edges_node {
	__typename: 'About';
	/**
	 * URI path for the resource
	 */
	uri: string;
	/**
	 * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
	 */
	slug: string | null;
}

export interface AboutSlugs_aboutslugs_edges {
	__typename: 'RootQueryToAboutConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: AboutSlugs_aboutslugs_edges_node | null;
}

export interface AboutSlugs_aboutslugs {
	__typename: 'RootQueryToAboutConnection';
	/**
	 * Edges for the RootQueryToAboutConnection connection
	 */
	edges: (AboutSlugs_aboutslugs_edges | null)[] | null;
}

export interface AboutSlugs {
	/**
	 * Connection between the RootQuery type and the about type
	 */
	aboutslugs: AboutSlugs_aboutslugs | null;
}

export interface AboutSlugsVariables {
	field: PostObjectsConnectionOrderbyEnum;
	order: OrderEnum;
	first: number;
}
