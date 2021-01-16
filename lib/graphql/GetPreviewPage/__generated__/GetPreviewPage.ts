/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PageIdType } from '../../../graphql-global-types';

// ====================================================
// GraphQL query operation: GetPreviewPage
// ====================================================

export interface GetPreviewPage_preview {
	__typename: 'Page';
	/**
	 * The ID of the node in the database.
	 */
	databaseId: number;
	/**
	 * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
	 */
	slug: string | null;
	/**
	 * The current status of the object
	 */
	status: string | null;
	/**
	 * URI path for the resource
	 */
	uri: string;
}

export interface GetPreviewPage {
	/**
	 * An object of the page Type.
	 */
	preview: GetPreviewPage_preview | null;
}

export interface GetPreviewPageVariables {
	idPage: string;
	idTypePage: PageIdType;
}
