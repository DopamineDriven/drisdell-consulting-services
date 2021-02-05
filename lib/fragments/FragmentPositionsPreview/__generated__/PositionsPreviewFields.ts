/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PositionsPreviewFields
// ====================================================

export interface PositionsPreviewFields_positionDetails {
	__typename: 'Position_Positiondetails';
	dateclosing: string | null;
	/**
	 * Title of open position
	 */
	jobtitle: string | null;
	/**
	 * Full-time, part-time. contract, temporary
	 */
	positiontype: string | null;
	/**
	 * remote, in-person, mixed
	 */
	remotestatus: string | null;
}

export interface PositionsPreviewFields {
	__typename: 'Position';
	/**
	 * The globally unique identifier of the position object.
	 */
	id: string;
	/**
	 * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
	 */
	slug: string | null;
	positionDetails: PositionsPreviewFields_positionDetails | null;
}
