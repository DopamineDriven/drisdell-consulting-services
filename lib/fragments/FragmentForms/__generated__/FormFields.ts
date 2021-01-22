/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FormFields
// ====================================================

export interface FormFields_uniqueFieldSet {
	__typename: 'FormUniqueFieldSet';
	/**
	 * unique_field
	 */
	uniqueField: string | null;
}

export interface FormFields_fields_edges_node {
	__typename:
		| 'AddressField'
		| 'Address2Field'
		| 'ButtonField'
		| 'CheckboxField'
		| 'CityField'
		| 'ConfirmField'
		| 'DateField'
		| 'EmailField'
		| 'FirstnameField'
		| 'HtmlField'
		| 'HiddenField'
		| 'LastnameField'
		| 'ListcheckboxField'
		| 'ListcountryField'
		| 'ListimageField'
		| 'ListmultiselectField'
		| 'ListradioField'
		| 'ListselectField'
		| 'ListstateField'
		| 'NoteField'
		| 'NumberField'
		| 'PasswordField'
		| 'PasswordconfirmField'
		| 'PhoneField'
		| 'ProductField'
		| 'QuantityField'
		| 'RecaptchaField'
		| 'ShippingField'
		| 'SpamField'
		| 'StarratingField'
		| 'SubmitField'
		| 'TermsField'
		| 'TextareaField'
		| 'TextboxField'
		| 'TotalField'
		| 'UnknownField'
		| 'ZipField'
		| 'HrField';
	/**
	 * Label of the field
	 */
	fieldLabel: string | null;
	/**
	 * The globally unique identifier of the field
	 */
	id: string;
	/**
	 * The Id of the field
	 */
	fieldId: number | null;
	/**
	 * Label of the field
	 */
	label: string | null;
	/**
	 * type of the field
	 */
	type: string | null;
}

export interface FormFields_fields_edges {
	__typename: 'FormToFormFieldConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: FormFields_fields_edges_node | null;
}

export interface FormFields_fields {
	__typename: 'FormToFormFieldConnection';
	/**
	 * Edges for the FormToFormFieldConnection connection
	 */
	edges: (FormFields_fields_edges | null)[] | null;
}

export interface FormFields {
	__typename: 'Form';
	/**
	 * Add Submit Button
	 */
	addSubmit: boolean | null;
	/**
	 * The Id of the form
	 */
	databaseId: number;
	/**
	 * The globally unique identifier of the form
	 */
	id: string;
	/**
	 * Form Title
	 */
	title: string | null;
	/**
	 * Form Key
	 */
	key: string | null;
	/**
	 * The Id of the form
	 */
	formId: number | null;
	/**
	 * Unique Field
	 */
	uniqueFieldSet: FormFields_uniqueFieldSet | null;
	/**
	 * Connection between the Form type and the FormField type
	 */
	fields: FormFields_fields | null;
}
