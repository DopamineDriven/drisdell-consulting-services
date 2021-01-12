/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ConsultantIdType } from './../../../../_types/graphql-global-types';

// ====================================================
// GraphQL query operation: ConsultantBySlug
// ====================================================

export interface ConsultantBySlug_consultantPost_featuredImage_node {
	__typename: 'MediaItem';
	/**
	 * Url of the mediaItem
	 */
	sourceUrl: string | null;
}

export interface ConsultantBySlug_consultantPost_featuredImage {
	__typename: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: ConsultantBySlug_consultantPost_featuredImage_node | null;
}

export interface ConsultantBySlug_consultantPost {
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
	featuredImage: ConsultantBySlug_consultantPost_featuredImage | null;
}

export interface ConsultantBySlug {
	/**
	 * An object of the consultant Type. Children posts of the Consultants Page
	 */
	consultantPost: ConsultantBySlug_consultantPost | null;
}

export interface ConsultantBySlugVariables {
	id: string;
	idType: ConsultantIdType;
}
