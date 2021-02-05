import * as Types from '../../../global/global-types.generated';

import { MenuFragmentFragment } from '../../../fragments/FragmentMenu/__generated__/menu-fields.generated';
import { gql } from '@apollo/client';
import { MenuFragmentFragmentDoc } from '../../../fragments/FragmentMenu/__generated__/menu-fields.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type HeaderFooterQueryVariables = Types.Exact<{
	idHead: Types.Scalars['ID'];
	idTypeHead: Types.MenuNodeIdTypeEnum;
	idFoot: Types.Scalars['ID'];
	idTypeFoot: Types.MenuNodeIdTypeEnum;
}>;

export type HeaderFooterQuery = { __typename?: 'RootQuery' } & {
	headerDynamic?: Types.Maybe<
		{ __typename?: 'Menu' } & {
			menuItems?: Types.Maybe<
				{ __typename?: 'MenuToMenuItemConnection' } & {
					edges?: Types.Maybe<
						Array<
							Types.Maybe<
								{ __typename?: 'MenuToMenuItemConnectionEdge' } & {
									node?: Types.Maybe<
										{ __typename?: 'MenuItem' } & {
											childItems?: Types.Maybe<
												{ __typename?: 'MenuItemToMenuItemConnection' } & {
													edges?: Types.Maybe<
														Array<
															Types.Maybe<
																{ __typename?: 'MenuItemToMenuItemConnectionEdge' } & {
																	node?: Types.Maybe<
																		{ __typename?: 'MenuItem' } & {
																			childItems?: Types.Maybe<
																				{ __typename?: 'MenuItemToMenuItemConnection' } & {
																					edges?: Types.Maybe<
																						Array<
																							Types.Maybe<
																								{ __typename?: 'MenuItemToMenuItemConnectionEdge' } & {
																									node?: Types.Maybe<
																										{ __typename?: 'MenuItem' } & MenuFragmentFragment
																									>;
																								}
																							>
																						>
																					>;
																				}
																			>;
																		} & MenuFragmentFragment
																	>;
																}
															>
														>
													>;
												}
											>;
										} & MenuFragmentFragment
									>;
								}
							>
						>
					>;
				}
			>;
		}
	>;
	footerDynamic?: Types.Maybe<
		{ __typename?: 'Menu' } & {
			menuItems?: Types.Maybe<
				{ __typename?: 'MenuToMenuItemConnection' } & {
					edges?: Types.Maybe<
						Array<
							Types.Maybe<
								{ __typename?: 'MenuToMenuItemConnectionEdge' } & {
									node?: Types.Maybe<
										{ __typename?: 'MenuItem' } & {
											childItems?: Types.Maybe<
												{ __typename?: 'MenuItemToMenuItemConnection' } & {
													edges?: Types.Maybe<
														Array<
															Types.Maybe<
																{ __typename?: 'MenuItemToMenuItemConnectionEdge' } & {
																	node?: Types.Maybe<
																		{ __typename?: 'MenuItem' } & MenuFragmentFragment
																	>;
																}
															>
														>
													>;
												}
											>;
										} & MenuFragmentFragment
									>;
								}
							>
						>
					>;
				}
			>;
		}
	>;
};

export const HeaderFooterDocument = gql`
	query HeaderFooter(
		$idHead: ID!
		$idTypeHead: MenuNodeIdTypeEnum!
		$idFoot: ID!
		$idTypeFoot: MenuNodeIdTypeEnum!
	) {
		headerDynamic: menu(id: $idHead, idType: $idTypeHead) {
			menuItems(where: { parentId: 0 }) {
				edges {
					node {
						...MenuFragment
						childItems {
							edges {
								node {
									...MenuFragment
									childItems {
										edges {
											node {
												...MenuFragment
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
		footerDynamic: menu(id: $idFoot, idType: $idTypeFoot) {
			menuItems(where: { parentId: 0 }) {
				edges {
					node {
						...MenuFragment
						childItems {
							edges {
								node {
									...MenuFragment
								}
							}
						}
					}
				}
			}
		}
	}
	${MenuFragmentFragmentDoc}
`;

/**
 * __useHeaderFooterQuery__
 *
 * To run a query within a React component, call `useHeaderFooterQuery` and pass it any options that fit your needs.
 * When your component renders, `useHeaderFooterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHeaderFooterQuery({
 *   variables: {
 *      idHead: // value for 'idHead'
 *      idTypeHead: // value for 'idTypeHead'
 *      idFoot: // value for 'idFoot'
 *      idTypeFoot: // value for 'idTypeFoot'
 *   },
 * });
 */
export function useHeaderFooterQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		HeaderFooterQuery,
		HeaderFooterQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<
		HeaderFooterQuery,
		HeaderFooterQueryVariables
	>(HeaderFooterDocument, baseOptions);
}
export function useHeaderFooterLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		HeaderFooterQuery,
		HeaderFooterQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<
		HeaderFooterQuery,
		HeaderFooterQueryVariables
	>(HeaderFooterDocument, baseOptions);
}
export type HeaderFooterQueryHookResult = ReturnType<
	typeof useHeaderFooterQuery
>;
export type HeaderFooterLazyQueryHookResult = ReturnType<
	typeof useHeaderFooterLazyQuery
>;
export type HeaderFooterQueryResult = Apollo.QueryResult<
	HeaderFooterQuery,
	HeaderFooterQueryVariables
>;
