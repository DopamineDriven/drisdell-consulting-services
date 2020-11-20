/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PostIdType } from './../../../../_types/graphql-global-types';

// ====================================================
// GraphQL query operation: GetPostBySlug
// ====================================================

export interface GetPostBySlug_post_author_node_avatar {
	__typename: 'Avatar';
	/**
	 * URL for the gravatar image source.
	 */
	url: string | null;
	/**
	 * The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image.
	 */
	size: number | null;
	/**
	 * Height of the avatar image.
	 */
	height: number | null;
	/**
	 * Width of the avatar image.
	 */
	width: number | null;
}

export interface GetPostBySlug_post_author_node {
	__typename: 'User';
	/**
	 * Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property.
	 */
	name: string | null;
	/**
	 * First name of the user. This is equivalent to the WP_User-&gt;user_first_name property.
	 */
	firstName: string | null;
	/**
	 * Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property.
	 */
	lastName: string | null;
	/**
	 * Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument.
	 */
	avatar: GetPostBySlug_post_author_node_avatar | null;
}

export interface GetPostBySlug_post_author {
	__typename: 'NodeWithAuthorToUserConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: GetPostBySlug_post_author_node | null;
}

export interface GetPostBySlug_post_categories_edges_node {
	__typename: 'Category';
	/**
	 * The globally unique ID for the object
	 */
	id: string;
	/**
	 * The human friendly name of the object.
	 */
	name: string | null;
}

export interface GetPostBySlug_post_categories_edges {
	__typename: 'PostToCategoryConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: GetPostBySlug_post_categories_edges_node | null;
}

export interface GetPostBySlug_post_categories {
	__typename: 'PostToCategoryConnection';
	/**
	 * Edges for the PostToCategoryConnection connection
	 */
	edges: (GetPostBySlug_post_categories_edges | null)[] | null;
}

export interface GetPostBySlug_post {
	__typename: 'Post';
	/**
	 * Connection between the NodeWithAuthor type and the User type
	 */
	author: GetPostBySlug_post_author | null;
	/**
	 * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
	 */
	title: string | null;
	/**
	 * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
	 */
	slug: string | null;
	/**
	 * The content of the post.
	 */
	content: string | null;
	/**
	 * Connection between the post type and the category type
	 */
	categories: GetPostBySlug_post_categories | null;
}

export interface GetPostBySlug {
	/**
	 * An object of the post Type.
	 */
	post: GetPostBySlug_post | null;
}

export interface GetPostBySlugVariables {
	id: string;
	idType: PostIdType;
}
