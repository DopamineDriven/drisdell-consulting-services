/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SendEmail
// ====================================================

export interface SendEmail_sendEmail {
	__typename: 'SendEmailPayload';
	clientMutationId: string | null;
	/**
	 * Message
	 */
	message: string | null;
	/**
	 * Origin that sent the request
	 */
	origin: string | null;
	/**
	 * reply To address used
	 */
	replyTo: string | null;
	/**
	 * Who the email got sent to
	 */
	to: string | null;
	/**
	 * Was the email sent
	 */
	sent: boolean | null;
}

export interface SendEmail {
	/**
	 * The payload for the sendEmail mutation
	 */
	sendEmail: SendEmail_sendEmail | null;
}

export interface SendEmailVariables {
	body?: string | null;
	clientMutationId?: string | null;
	from?: string | null;
	replyTo?: string | null;
	subject?: string | null;
	to?: string | null;
}
