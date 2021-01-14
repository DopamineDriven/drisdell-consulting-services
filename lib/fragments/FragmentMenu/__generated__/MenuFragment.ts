/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MenuFragment
// ====================================================

export interface MenuFragment_childItems_edges_node {
	__typename: 'MenuItem';
	/**
	 * The globally unique identifier of the nav menu item object.
	 */
	id: string;
	/**
	 * Label or title of the menu item.
	 */
	label: string | null;
	/**
	 * The globally unique identifier of the parent nav menu item object.
	 */
	parentId: string | null;
	/**
	 * Path for the resource. Relative path for internal resources. Absolute path for external resources.
	 */
	path: string;
}

export interface MenuFragment_childItems_edges {
	__typename: 'MenuItemToMenuItemConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: MenuFragment_childItems_edges_node | null;
}

export interface MenuFragment_childItems {
	__typename: 'MenuItemToMenuItemConnection';
	/**
	 * Edges for the MenuItemToMenuItemConnection connection
	 */
	edges: (MenuFragment_childItems_edges | null)[] | null;
}

export interface MenuFragment {
	__typename: 'MenuItem';
	/**
	 * The globally unique identifier of the nav menu item object.
	 */
	id: string;
	/**
	 * Label or title of the menu item.
	 */
	label: string | null;
	/**
	 * URL or destination of the menu item.
	 */
	url: string | null;
	/**
	 * Path for the resource. Relative path for internal resources. Absolute path for external resources.
	 */
	path: string;
	/**
	 * Connection between the MenuItem type and the MenuItem type
	 */
	childItems: MenuFragment_childItems | null;
}
