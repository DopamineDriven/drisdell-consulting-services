/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CustomPageFields
// ====================================================

export interface CustomPageFields_featuredImage_node {
	__typename: 'MediaItem';
	/**
	 * Url of the mediaItem
	 */
	sourceUrl: string | null;
}

export interface CustomPageFields_featuredImage {
	__typename: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: CustomPageFields_featuredImage_node | null;
}

export interface CustomPageFields {
	__typename: 'Page';
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
	/**
	 * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
	 */
	slug: string | null;
	/**
	 * Connection between the NodeWithFeaturedImage type and the MediaItem type
	 */
	featuredImage: CustomPageFields_featuredImage | null;
}
