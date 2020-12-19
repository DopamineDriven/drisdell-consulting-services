/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ABOUT_CHILDREN
// ====================================================

export interface ABOUT_CHILDREN_pages_nodes_featuredImage_node {
	__typename: 'MediaItem';
	/**
	 * Url of the mediaItem
	 */
	sourceUrl: string | null;
}

export interface ABOUT_CHILDREN_pages_nodes_featuredImage {
	__typename: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: ABOUT_CHILDREN_pages_nodes_featuredImage_node | null;
}

export interface ABOUT_CHILDREN_pages_nodes {
	__typename: 'Page';
	/**
	 * The content of the post.
	 */
	content: string | null;
	/**
	 * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
	 */
	title: string | null;
	/**
	 * The globally unique identifier of the page object.
	 */
	id: string;
	/**
	 * URI path for the resource
	 */
	uri: string;
	/**
	 * The ID of the node in the database.
	 */
	databaseId: number;
	/**
	 * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
	 */
	slug: string | null;
	/**
	 * Connection between the NodeWithFeaturedImage type and the MediaItem type
	 */
	featuredImage: ABOUT_CHILDREN_pages_nodes_featuredImage | null;
	/**
	 * The globally unique identifier of the parent node.
	 */
	parentId: string | null;
}

export interface ABOUT_CHILDREN_pages {
	__typename: 'RootQueryToPageConnection';
	/**
	 * The nodes of the connection, without the edges
	 */
	nodes: (ABOUT_CHILDREN_pages_nodes | null)[] | null;
}

export interface ABOUT_CHILDREN {
	/**
	 * Connection between the RootQuery type and the page type
	 */
	pages: ABOUT_CHILDREN_pages | null;
}

export interface ABOUT_CHILDRENVariables {
	parentID: string;
}
