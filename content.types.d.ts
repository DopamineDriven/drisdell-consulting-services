/**
 * Recursively require and non-null all possible values within a type
 *
 * Useful when looking deep within codegen generated graphql types
 */
type RecursiveNonNullable<T> = Required<
	NonNullable<{ [K in keyof T]: RecursiveNonNullable<T[K]> }>
>;

export type CMSContentElement = [
	string,
	(domNode: DomElement) => React.ReactNode
];
