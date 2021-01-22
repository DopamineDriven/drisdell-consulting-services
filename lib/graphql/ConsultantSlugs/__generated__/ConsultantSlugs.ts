/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {
	PostObjectsConnectionOrderbyEnum,
	OrderEnum
} from './../../../graphql-global-types';

// ====================================================
// GraphQL query operation: ConsultantSlugs
// ====================================================

export interface ConsultantSlugs_consultantSlugs_edges_node {
	__typename: 'Consultant';
	/**
	 * URI path for the resource
	 */
	uri: string;
	/**
	 * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
	 */
	slug: string | null;
}

export interface ConsultantSlugs_consultantSlugs_edges {
	__typename: 'RootQueryToConsultantConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: ConsultantSlugs_consultantSlugs_edges_node | null;
}

export interface ConsultantSlugs_consultantSlugs {
	__typename: 'RootQueryToConsultantConnection';
	/**
	 * Edges for the RootQueryToConsultantConnection connection
	 */
	edges: (ConsultantSlugs_consultantSlugs_edges | null)[] | null;
}

export interface ConsultantSlugs {
	/**
	 * Connection between the RootQuery type and the consultant type
	 */
	consultantSlugs: ConsultantSlugs_consultantSlugs | null;
}

export interface ConsultantSlugsVariables {
	field: PostObjectsConnectionOrderbyEnum;
	order: OrderEnum;
	first: number;
}
