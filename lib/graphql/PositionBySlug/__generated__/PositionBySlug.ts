/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PositionIdType } from './../../../graphql-global-types';

// ====================================================
// GraphQL query operation: PositionBySlug
// ====================================================

export interface PositionBySlug_positionBySlug_featuredImage_node {
	__typename: 'MediaItem';
	/**
	 * Url of the mediaItem
	 */
	sourceUrl: string | null;
}

export interface PositionBySlug_positionBySlug_featuredImage {
	__typename: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: PositionBySlug_positionBySlug_featuredImage_node | null;
}

export interface PositionBySlug_positionBySlug {
	__typename: 'Position';
	/**
	 * The content of the post.
	 */
	content: string | null;
	/**
	 * The globally unique identifier of the position object.
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
	 * The excerpt of the post.
	 */
	excerpt: string | null;
	/**
	 * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
	 */
	slug: string | null;
	/**
	 * Connection between the NodeWithFeaturedImage type and the MediaItem type
	 */
	featuredImage: PositionBySlug_positionBySlug_featuredImage | null;
}

export interface PositionBySlug {
	/**
	 * An object of the position Type. Positions for consultants
	 */
	positionBySlug: PositionBySlug_positionBySlug | null;
}

export interface PositionBySlugVariables {
	id: string;
	idType: PositionIdType;
}
