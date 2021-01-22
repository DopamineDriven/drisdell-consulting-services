import * as Types from '../../../global/global-types.generated';

import { gql } from '@apollo/client';
export type MenuFragmentFragment = { __typename?: 'MenuItem' } & Pick<
	Types.MenuItem,
	'id' | 'label' | 'url' | 'path' | 'parentId'
>;

export const MenuFragmentFragmentDoc = gql`
	fragment MenuFragment on MenuItem {
		id
		label
		url
		path
		parentId
	}
`;
