/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AboutIdType } from './../../../graphql-global-types';

// ====================================================
// GraphQL query operation: AboutBySlug
// ====================================================

export interface AboutBySlug_aboutPost_featuredImage_node {
	__typename: 'MediaItem';
	/**
	 * Url of the mediaItem
	 */
	sourceUrl: string | null;
}

export interface AboutBySlug_aboutPost_featuredImage {
	__typename: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: AboutBySlug_aboutPost_featuredImage_node | null;
}

export interface AboutBySlug_aboutPost {
	__typename: 'About';
	/**
	 * The content of the post.
	 */
	content: string | null;
	/**
	 * The globally unique identifier of the about object.
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
	 * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
	 */
	slug: string | null;
	/**
	 * Connection between the NodeWithFeaturedImage type and the MediaItem type
	 */
	featuredImage: AboutBySlug_aboutPost_featuredImage | null;
}

export interface AboutBySlug {
	/**
	 * An object of the about Type. About
	 */
	aboutPost: AboutBySlug_aboutPost | null;
}

export interface AboutBySlugVariables {
	id: string;
	idType: AboutIdType;
}
