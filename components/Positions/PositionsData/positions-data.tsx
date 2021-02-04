import cn from 'classnames';
import { Positions_positions_edges_node } from '@lib/graphql/Positions/__generated__/Positions';
import { FC } from 'react';
import Link from 'next/link';
// import { PositionFields_positionDetails } from '../../lib/fragments/FragmentPositions/__generated__/PositionFields';
import css from './positions-data.module.css';

interface PositionsDataProps extends Positions_positions_edges_node {
	root?: string;
}

const PositionData: FC<PositionsDataProps> = ({
	root,
	positionDetails,
	slug
}) => {
	const slugDynamic = slug !== null ? slug : '';
	console.log(positionDetails);
	return (
		<div className={cn(css.root, root)}>
			<ul className='divide-y divide-gray-200'>
				<li>
					<Link
						passHref
						href={`/consultants/skills-and-positions/positions/${slugDynamic}`}
					>
						<a></a>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default PositionData;
