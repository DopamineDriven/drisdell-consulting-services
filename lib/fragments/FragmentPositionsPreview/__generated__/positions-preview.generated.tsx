import * as Types from '../../../global/global-types.generated';

import { gql } from '@apollo/client';
export type PositionsPreviewFieldsFragment = { __typename?: 'Position' } & Pick<
	Types.Position,
	'id' | 'slug'
> & {
		positionDetails?: Types.Maybe<
			{ __typename?: 'Position_Positiondetails' } & Pick<
				Types.Position_Positiondetails,
				'dateclosing' | 'jobtitle' | 'positiontype' | 'remotestatus'
			>
		>;
	};

export const PositionsPreviewFieldsFragmentDoc = gql`
	fragment PositionsPreviewFields on Position {
		id
		slug
		positionDetails {
			dateclosing
			jobtitle
			positiontype
			remotestatus
		}
	}
`;
