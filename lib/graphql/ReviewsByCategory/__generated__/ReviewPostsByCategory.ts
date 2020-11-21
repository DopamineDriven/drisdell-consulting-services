/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ReviewPostsByCategory
// ====================================================

export interface ReviewPostsByCategory_posts_edges_node_author_node_avatar {
	__typename: 'Avatar';
	/**
	 * URL for the gravatar image source.
	 */
	url: string | null;
}

export interface ReviewPostsByCategory_posts_edges_node_author_node {
	__typename: 'User';
	/**
	 * Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument.
	 */
	avatar: ReviewPostsByCategory_posts_edges_node_author_node_avatar | null;
	/**
	 * First name of the user. This is equivalent to the WP_User-&gt;user_first_name property.
	 */
	firstName: string | null;
	/**
	 * Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property.
	 */
	lastName: string | null;
	/**
	 * Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property.
	 */
	name: string | null;
}

export interface ReviewPostsByCategory_posts_edges_node_author {
	__typename: 'NodeWithAuthorToUserConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: ReviewPostsByCategory_posts_edges_node_author_node | null;
}

export interface ReviewPostsByCategory_posts_edges_node {
	__typename: 'Post';
	/**
	 * Connection between the NodeWithAuthor type and the User type
	 */
	author: ReviewPostsByCategory_posts_edges_node_author | null;
	/**
	 * Post publishing date.
	 */
	date: string | null;
	/**
	 * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
	 */
	slug: string | null;
	/**
	 * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
	 */
	title: string | null;
	/**
	 * The content of the post.
	 */
	content: string | null;
}

export interface ReviewPostsByCategory_posts_edges {
	__typename: 'RootQueryToPostConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: ReviewPostsByCategory_posts_edges_node | null;
}

export interface ReviewPostsByCategory_posts {
	__typename: 'RootQueryToPostConnection';
	/**
	 * Edges for the RootQueryToPostConnection connection
	 */
	edges: (ReviewPostsByCategory_posts_edges | null)[] | null;
}

export interface ReviewPostsByCategory {
	/**
	 * Connection between the RootQuery type and the post type
	 */
	posts: ReviewPostsByCategory_posts | null;
}

export interface ReviewPostsByCategoryVariables {
	first: number;
}
