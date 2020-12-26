/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {
	PageIdType,
	MenuNodeIdTypeEnum
} from './../../../../_types/graphql-global-types';

// ====================================================
// GraphQL query operation: GetPage
// ====================================================

export interface GetPage_headerMenus_menuItems_edges_node_childItems_edges_node_childItems_edges_node {
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

export interface GetPage_headerMenus_menuItems_edges_node_childItems_edges_node_childItems_edges {
	__typename: 'MenuItemToMenuItemConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: GetPage_headerMenus_menuItems_edges_node_childItems_edges_node_childItems_edges_node | null;
}

export interface GetPage_headerMenus_menuItems_edges_node_childItems_edges_node_childItems {
	__typename: 'MenuItemToMenuItemConnection';
	/**
	 * Edges for the MenuItemToMenuItemConnection connection
	 */
	edges:
		| (GetPage_headerMenus_menuItems_edges_node_childItems_edges_node_childItems_edges | null)[]
		| null;
}

export interface GetPage_headerMenus_menuItems_edges_node_childItems_edges_node {
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
	childItems: GetPage_headerMenus_menuItems_edges_node_childItems_edges_node_childItems | null;
}

export interface GetPage_headerMenus_menuItems_edges_node_childItems_edges {
	__typename: 'MenuItemToMenuItemConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: GetPage_headerMenus_menuItems_edges_node_childItems_edges_node | null;
}

export interface GetPage_headerMenus_menuItems_edges_node_childItems {
	__typename: 'MenuItemToMenuItemConnection';
	/**
	 * Edges for the MenuItemToMenuItemConnection connection
	 */
	edges:
		| (GetPage_headerMenus_menuItems_edges_node_childItems_edges | null)[]
		| null;
}

export interface GetPage_headerMenus_menuItems_edges_node {
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
	childItems: GetPage_headerMenus_menuItems_edges_node_childItems | null;
}

export interface GetPage_headerMenus_menuItems_edges {
	__typename: 'MenuToMenuItemConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: GetPage_headerMenus_menuItems_edges_node | null;
}

export interface GetPage_headerMenus_menuItems {
	__typename: 'MenuToMenuItemConnection';
	/**
	 * Edges for the MenuToMenuItemConnection connection
	 */
	edges: (GetPage_headerMenus_menuItems_edges | null)[] | null;
}

export interface GetPage_headerMenus {
	__typename: 'Menu';
	/**
	 * Connection between the Menu type and the MenuItem type
	 */
	menuItems: GetPage_headerMenus_menuItems | null;
}

export interface GetPage_footerMenus_menuItems_edges_node_childItems_edges_node_childItems_edges_node {
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

export interface GetPage_footerMenus_menuItems_edges_node_childItems_edges_node_childItems_edges {
	__typename: 'MenuItemToMenuItemConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: GetPage_footerMenus_menuItems_edges_node_childItems_edges_node_childItems_edges_node | null;
}

export interface GetPage_footerMenus_menuItems_edges_node_childItems_edges_node_childItems {
	__typename: 'MenuItemToMenuItemConnection';
	/**
	 * Edges for the MenuItemToMenuItemConnection connection
	 */
	edges:
		| (GetPage_footerMenus_menuItems_edges_node_childItems_edges_node_childItems_edges | null)[]
		| null;
}

export interface GetPage_footerMenus_menuItems_edges_node_childItems_edges_node {
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
	childItems: GetPage_footerMenus_menuItems_edges_node_childItems_edges_node_childItems | null;
}

export interface GetPage_footerMenus_menuItems_edges_node_childItems_edges {
	__typename: 'MenuItemToMenuItemConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: GetPage_footerMenus_menuItems_edges_node_childItems_edges_node | null;
}

export interface GetPage_footerMenus_menuItems_edges_node_childItems {
	__typename: 'MenuItemToMenuItemConnection';
	/**
	 * Edges for the MenuItemToMenuItemConnection connection
	 */
	edges:
		| (GetPage_footerMenus_menuItems_edges_node_childItems_edges | null)[]
		| null;
}

export interface GetPage_footerMenus_menuItems_edges_node {
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
	childItems: GetPage_footerMenus_menuItems_edges_node_childItems | null;
}

export interface GetPage_footerMenus_menuItems_edges {
	__typename: 'MenuToMenuItemConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: GetPage_footerMenus_menuItems_edges_node | null;
}

export interface GetPage_footerMenus_menuItems {
	__typename: 'MenuToMenuItemConnection';
	/**
	 * Edges for the MenuToMenuItemConnection connection
	 */
	edges: (GetPage_footerMenus_menuItems_edges | null)[] | null;
}

export interface GetPage_footerMenus {
	__typename: 'Menu';
	/**
	 * Connection between the Menu type and the MenuItem type
	 */
	menuItems: GetPage_footerMenus_menuItems | null;
}

export interface GetPage_page {
	__typename: 'Page';
	/**
	 * The globally unique identifier of the page object.
	 */
	id: string;
	/**
	 * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
	 */
	title: string | null;
	/**
	 * The content of the post.
	 */
	content: string | null;
	/**
	 * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
	 */
	slug: string | null;
	/**
	 * URI path for the resource
	 */
	uri: string;
}

export interface GetPage {
	/**
	 * A WordPress navigation menu
	 */
	headerMenus: GetPage_headerMenus | null;
	/**
	 * A WordPress navigation menu
	 */
	footerMenus: GetPage_footerMenus | null;
	/**
	 * An object of the page Type.
	 */
	page: GetPage_page | null;
}

export interface GetPageVariables {
	idPage: string;
	idTypePage: PageIdType;
	idHead: string;
	idTypeHead: MenuNodeIdTypeEnum;
	idFoot: string;
	idTypeFoot: MenuNodeIdTypeEnum;
}
