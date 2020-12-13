/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HeaderFooter
// ====================================================

export interface HeaderFooter_headerMenu_edges_node_childItems_edges_node_childItems_edges_node {
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
}

export interface HeaderFooter_headerMenu_edges_node_childItems_edges_node_childItems_edges {
	__typename: 'MenuItemToMenuItemConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: HeaderFooter_headerMenu_edges_node_childItems_edges_node_childItems_edges_node | null;
}

export interface HeaderFooter_headerMenu_edges_node_childItems_edges_node_childItems {
	__typename: 'MenuItemToMenuItemConnection';
	/**
	 * Edges for the MenuItemToMenuItemConnection connection
	 */
	edges:
		| (HeaderFooter_headerMenu_edges_node_childItems_edges_node_childItems_edges | null)[]
		| null;
}

export interface HeaderFooter_headerMenu_edges_node_childItems_edges_node {
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
	childItems: HeaderFooter_headerMenu_edges_node_childItems_edges_node_childItems | null;
}

export interface HeaderFooter_headerMenu_edges_node_childItems_edges {
	__typename: 'MenuItemToMenuItemConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: HeaderFooter_headerMenu_edges_node_childItems_edges_node | null;
}

export interface HeaderFooter_headerMenu_edges_node_childItems {
	__typename: 'MenuItemToMenuItemConnection';
	/**
	 * Edges for the MenuItemToMenuItemConnection connection
	 */
	edges: (HeaderFooter_headerMenu_edges_node_childItems_edges | null)[] | null;
}

export interface HeaderFooter_headerMenu_edges_node {
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
	childItems: HeaderFooter_headerMenu_edges_node_childItems | null;
}

export interface HeaderFooter_headerMenu_edges {
	__typename: 'RootQueryToMenuItemConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: HeaderFooter_headerMenu_edges_node | null;
}

export interface HeaderFooter_headerMenu {
	__typename: 'RootQueryToMenuItemConnection';
	/**
	 * Edges for the RootQueryToMenuItemConnection connection
	 */
	edges: (HeaderFooter_headerMenu_edges | null)[] | null;
}

export interface HeaderFooter_footerMenu_edges_node_childItems_edges_node {
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
}

export interface HeaderFooter_footerMenu_edges_node_childItems_edges {
	__typename: 'MenuItemToMenuItemConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: HeaderFooter_footerMenu_edges_node_childItems_edges_node | null;
}

export interface HeaderFooter_footerMenu_edges_node_childItems {
	__typename: 'MenuItemToMenuItemConnection';
	/**
	 * Edges for the MenuItemToMenuItemConnection connection
	 */
	edges: (HeaderFooter_footerMenu_edges_node_childItems_edges | null)[] | null;
}

export interface HeaderFooter_footerMenu_edges_node {
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
	childItems: HeaderFooter_footerMenu_edges_node_childItems | null;
}

export interface HeaderFooter_footerMenu_edges {
	__typename: 'RootQueryToMenuItemConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: HeaderFooter_footerMenu_edges_node | null;
}

export interface HeaderFooter_footerMenu {
	__typename: 'RootQueryToMenuItemConnection';
	/**
	 * Edges for the RootQueryToMenuItemConnection connection
	 */
	edges: (HeaderFooter_footerMenu_edges | null)[] | null;
}

export interface HeaderFooter {
	/**
	 * Connection between the RootQuery type and the MenuItem type
	 */
	headerMenu: HeaderFooter_headerMenu | null;
	/**
	 * Connection between the RootQuery type and the MenuItem type
	 */
	footerMenu: HeaderFooter_footerMenu | null;
}
