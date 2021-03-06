/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MenuFragment
// ====================================================

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
	 * The globally unique identifier of the parent nav menu item object.
	 */
	parentId: string | null;
}
