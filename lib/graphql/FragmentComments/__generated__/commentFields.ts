/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: commentFields
// ====================================================

export interface commentFields {
	__typename: 'Comment';
	/**
	 * The globally unique identifier for the comment object
	 */
	id: string;
	/**
	 * Date the comment was posted in local time. This field is equivalent to WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL.
	 */
	date: string | null;
	/**
	 * Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and the value matching the &quot;comment_type&quot; column in SQL.
	 */
	type: string | null;
	/**
	 * The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL.
	 */
	approved: boolean | null;
	/**
	 * Content of the comment. This field is equivalent to WP_Comment-&gt;comment_content and the value matching the &quot;comment_content&quot; column in SQL.
	 */
	content: string | null;
}
