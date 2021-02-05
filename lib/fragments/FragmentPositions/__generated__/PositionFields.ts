/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PositionFields
// ====================================================

export interface PositionFields_positionDetails {
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

export interface PositionFields_featuredImage_node {
	__typename: 'MediaItem';
	/**
	 * Url of the mediaItem
	 */
	sourceUrl: string | null;
}

export interface PositionFields_featuredImage {
	__typename: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: PositionFields_featuredImage_node | null;
}

export interface PositionFields {
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
	 * Post publishing date.
	 */
	date: string | null;
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
	positionDetails: PositionFields_positionDetails | null;
	/**
	 * Connection between the NodeWithFeaturedImage type and the MediaItem type
	 */
	featuredImage: PositionFields_featuredImage | null;
}
