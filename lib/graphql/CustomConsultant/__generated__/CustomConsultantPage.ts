/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ConsultantIdType } from './../../../graphql-global-types';

// ====================================================
// GraphQL query operation: CustomConsultantPage
// ====================================================

export interface CustomConsultantPage_consultantSlug_featuredImage_node {
	__typename: 'MediaItem';
	/**
	 * Url of the mediaItem
	 */
	sourceUrl: string | null;
}

export interface CustomConsultantPage_consultantSlug_featuredImage {
	__typename: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: CustomConsultantPage_consultantSlug_featuredImage_node | null;
}

export interface CustomConsultantPage_consultantSlug {
	__typename: 'Consultant';
	/**
	 * The content of the post.
	 */
	content: string | null;
	/**
	 * The globally unique identifier of the consultant object.
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
	featuredImage: CustomConsultantPage_consultantSlug_featuredImage | null;
}

export interface CustomConsultantPage_positionsPreview_edges_node_positionDetails {
	__typename: 'Position_Positiondetails';
	dateclosing: string | null;
	/**
	 * Title of open position
	 */
	jobtitle: string | null;
	/**
	 * Full-time, part-time. contract, temporary
	 */
	positiontype: string | null;
	/**
	 * remote, in-person, mixed
	 */
	remotestatus: string | null;
}

export interface CustomConsultantPage_positionsPreview_edges_node {
	__typename: 'Position';
	/**
	 * The globally unique identifier of the position object.
	 */
	id: string;
	/**
	 * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
	 */
	slug: string | null;
	positionDetails: CustomConsultantPage_positionsPreview_edges_node_positionDetails | null;
}

export interface CustomConsultantPage_positionsPreview_edges {
	__typename: 'RootQueryToPositionConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: CustomConsultantPage_positionsPreview_edges_node | null;
}

export interface CustomConsultantPage_positionsPreview {
	__typename: 'RootQueryToPositionConnection';
	/**
	 * Edges for the RootQueryToPositionConnection connection
	 */
	edges: (CustomConsultantPage_positionsPreview_edges | null)[] | null;
}

export interface CustomConsultantPage {
	/**
	 * An object of the consultant Type. Children posts of the Consultants Page
	 */
	consultantSlug: CustomConsultantPage_consultantSlug | null;
	/**
	 * Connection between the RootQuery type and the position type
	 */
	positionsPreview: CustomConsultantPage_positionsPreview | null;
}

export interface CustomConsultantPageVariables {
	id: string;
	idType: ConsultantIdType;
}
