import * as Types from '../../../global-types';

import { gql } from '@apollo/client';
export type MenuFragmentFragment = {
	__typename?: 'MenuItem';
	id: string;
	label: Types.Maybe<string>;
	url: Types.Maybe<string>;
	path: string;
	parentId: Types.Maybe<string>;
};

export const MenuFragmentFragmentDoc = gql`
	fragment MenuFragment on MenuItem {
		id
		label
		url
		path
		parentId
	}
`;
