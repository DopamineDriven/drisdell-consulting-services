import * as Types from '../../../global/global-types.generated';

import { MenuFragmentFragment } from '../../../fragments/FragmentMenu/__generated__/menu-fields.generated';
import { PageFragmentFragment } from '../../../fragments/FragmentPage/__generated__/page-fields.generated';
import { gql } from '@apollo/client';
import { MenuFragmentFragmentDoc } from '../../../fragments/FragmentMenu/__generated__/menu-fields.generated';
import { PageFragmentFragmentDoc } from '../../../fragments/FragmentPage/__generated__/page-fields.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type GetPageQueryVariables = Types.Exact<{
	idPage: Types.Scalars['ID'];
	idTypePage: Types.PageIdType;
	idHead: Types.Scalars['ID'];
	idTypeHead: Types.MenuNodeIdTypeEnum;
	idFoot: Types.Scalars['ID'];
	idTypeFoot: Types.MenuNodeIdTypeEnum;
}>;

export type GetPageQuery = { __typename?: 'RootQuery' } & {
	headerMenus?: Types.Maybe<
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
	footerMenus?: Types.Maybe<
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
	page?: Types.Maybe<{ __typename?: 'Page' } & PageFragmentFragment>;
};

export const GetPageDocument = gql`
	query GetPage(
		$idPage: ID!
		$idTypePage: PageIdType!
		$idHead: ID!
		$idTypeHead: MenuNodeIdTypeEnum!
		$idFoot: ID!
		$idTypeFoot: MenuNodeIdTypeEnum!
	) {
		headerMenus: menu(id: $idHead, idType: $idTypeHead) {
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
		footerMenus: menu(id: $idFoot, idType: $idTypeFoot) {
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
		page: page(id: $idPage, idType: $idTypePage) {
			...PageFragment
		}
	}
	${MenuFragmentFragmentDoc}
	${PageFragmentFragmentDoc}
`;

/**
 * __useGetPageQuery__
 *
 * To run a query within a React component, call `useGetPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPageQuery({
 *   variables: {
 *      idPage: // value for 'idPage'
 *      idTypePage: // value for 'idTypePage'
 *      idHead: // value for 'idHead'
 *      idTypeHead: // value for 'idTypeHead'
 *      idFoot: // value for 'idFoot'
 *      idTypeFoot: // value for 'idTypeFoot'
 *   },
 * });
 */
export function useGetPageQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		GetPageQuery,
		GetPageQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<GetPageQuery, GetPageQueryVariables>(
		GetPageDocument,
		baseOptions
	);
}
export function useGetPageLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		GetPageQuery,
		GetPageQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<GetPageQuery, GetPageQueryVariables>(
		GetPageDocument,
		baseOptions
	);
}
export type GetPageQueryHookResult = ReturnType<typeof useGetPageQuery>;
export type GetPageLazyQueryHookResult = ReturnType<typeof useGetPageLazyQuery>;
export type GetPageQueryResult = Apollo.QueryResult<
	GetPageQuery,
	GetPageQueryVariables
>;
