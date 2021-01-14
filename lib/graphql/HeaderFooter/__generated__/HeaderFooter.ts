/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MenuNodeIdTypeEnum } from './../../../../_types/graphql-global-types';

// ====================================================
// GraphQL query operation: HeaderFooter
// ====================================================

export interface HeaderFooter_headerDynamic_menuItems_edges_node_childItems_edges_node {
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

export interface HeaderFooter_headerDynamic_menuItems_edges_node_childItems_edges {
	__typename: 'MenuItemToMenuItemConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: HeaderFooter_headerDynamic_menuItems_edges_node_childItems_edges_node | null;
}

export interface HeaderFooter_headerDynamic_menuItems_edges_node_childItems {
	__typename: 'MenuItemToMenuItemConnection';
	/**
	 * Edges for the MenuItemToMenuItemConnection connection
	 */
	edges:
		| (HeaderFooter_headerDynamic_menuItems_edges_node_childItems_edges | null)[]
		| null;
}

export interface HeaderFooter_headerDynamic_menuItems_edges_node {
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
	childItems: HeaderFooter_headerDynamic_menuItems_edges_node_childItems | null;
}

export interface HeaderFooter_headerDynamic_menuItems_edges {
	__typename: 'MenuToMenuItemConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: HeaderFooter_headerDynamic_menuItems_edges_node | null;
}

export interface HeaderFooter_headerDynamic_menuItems {
	__typename: 'MenuToMenuItemConnection';
	/**
	 * Edges for the MenuToMenuItemConnection connection
	 */
	edges: (HeaderFooter_headerDynamic_menuItems_edges | null)[] | null;
}

export interface HeaderFooter_headerDynamic {
	__typename: 'Menu';
	/**
	 * Connection between the Menu type and the MenuItem type
	 */
	menuItems: HeaderFooter_headerDynamic_menuItems | null;
}

export interface HeaderFooter_footerDynamic_menuItems_edges_node_childItems_edges_node {
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

export interface HeaderFooter_footerDynamic_menuItems_edges_node_childItems_edges {
	__typename: 'MenuItemToMenuItemConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: HeaderFooter_footerDynamic_menuItems_edges_node_childItems_edges_node | null;
}

export interface HeaderFooter_footerDynamic_menuItems_edges_node_childItems {
	__typename: 'MenuItemToMenuItemConnection';
	/**
	 * Edges for the MenuItemToMenuItemConnection connection
	 */
	edges:
		| (HeaderFooter_footerDynamic_menuItems_edges_node_childItems_edges | null)[]
		| null;
}

export interface HeaderFooter_footerDynamic_menuItems_edges_node {
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
	childItems: HeaderFooter_footerDynamic_menuItems_edges_node_childItems | null;
}

export interface HeaderFooter_footerDynamic_menuItems_edges {
	__typename: 'MenuToMenuItemConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: HeaderFooter_footerDynamic_menuItems_edges_node | null;
}

export interface HeaderFooter_footerDynamic_menuItems {
	__typename: 'MenuToMenuItemConnection';
	/**
	 * Edges for the MenuToMenuItemConnection connection
	 */
	edges: (HeaderFooter_footerDynamic_menuItems_edges | null)[] | null;
}

export interface HeaderFooter_footerDynamic {
	__typename: 'Menu';
	/**
	 * Connection between the Menu type and the MenuItem type
	 */
	menuItems: HeaderFooter_footerDynamic_menuItems | null;
}

export interface HeaderFooter {
	/**
	 * A WordPress navigation menu
	 */
	headerDynamic: HeaderFooter_headerDynamic | null;
	/**
	 * A WordPress navigation menu
	 */
	footerDynamic: HeaderFooter_footerDynamic | null;
}

export interface HeaderFooterVariables {
	idHead: string;
	idTypeHead: MenuNodeIdTypeEnum;
	idFoot: string;
	idTypeFoot: MenuNodeIdTypeEnum;
}
