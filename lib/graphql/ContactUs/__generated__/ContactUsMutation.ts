/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InputField } from './../../../graphql-global-types';

// ====================================================
// GraphQL mutation operation: ContactUsMutation
// ====================================================

export interface ContactUsMutation_submitForm_errors {
	__typename: 'FieldError';
	/**
	 * Field Id
	 */
	fieldId: number;
	/**
	 * Localized error message
	 */
	message: string | null;
}

export interface ContactUsMutation_submitForm {
	__typename: 'SubmitFormPayload';
	/**
	 * Field errors
	 */
	errors: (ContactUsMutation_submitForm_errors | null)[] | null;
	/**
	 * Generic operation message
	 */
	message: string | null;
	/**
	 * Form submitted successfuly
	 */
	success: boolean | null;
}

export interface ContactUsMutation {
	/**
	 * The payload for the submitForm mutation
	 */
	submitForm: ContactUsMutation_submitForm | null;
}

export interface ContactUsMutationVariables {
	formId?: number | null;
	data?: (InputField | null)[] | null;
}
