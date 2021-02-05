/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {
	PostObjectsConnectionOrderbyEnum,
	OrderEnum
} from './../../../graphql-global-types';

// ====================================================
// GraphQL query operation: PositionSlugs
// ====================================================

export interface PositionSlugs_positionSlugs_edges_node {
	__typename: 'Position';
	/**
	 * URI path for the resource
	 */
	uri: string;
	/**
	 * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
	 */
	slug: string | null;
}

export interface PositionSlugs_positionSlugs_edges {
	__typename: 'RootQueryToPositionConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: PositionSlugs_positionSlugs_edges_node | null;
}

export interface PositionSlugs_positionSlugs {
	__typename: 'RootQueryToPositionConnection';
	/**
	 * Edges for the RootQueryToPositionConnection connection
	 */
	edges: (PositionSlugs_positionSlugs_edges | null)[] | null;
}

export interface PositionSlugs {
	/**
	 * Connection between the RootQuery type and the position type
	 */
	positionSlugs: PositionSlugs_positionSlugs | null;
}

export interface PositionSlugsVariables {
	field: PostObjectsConnectionOrderbyEnum;
	order: OrderEnum;
	first: number;
}
