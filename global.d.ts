declare module 'next-themes';

declare module '*.yml';

declare module '*.graphql' {
	import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
	const Schema: DocumentNode;
	export = Schema;
}

declare module '/graphql.d.ts';

export type ReNonNullable<T> = Required<
	NonNullable<{ [K in keyof T]: RecursiveNonNullable<T[K]> }>
>;

export type HeadlessContentElement = [
	string,
	(domNode: DomElement) => React.ReactNode
];
