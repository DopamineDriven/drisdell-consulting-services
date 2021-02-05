import cn from 'classnames';
import css from './positions-wrapper.module.css';
import { FC } from 'react';
import Link from 'next/link';
import Container from '@components/UI/Container';

interface PositionsWrapperProps {
	root?: string;
}

const PositionsWrapper: FC<PositionsWrapperProps> = ({ children, root }) => {
	return (
		<Container className={cn(root, 'font-poppins py-10 mx-auto')}>
			<div className={cn(css.root)}>
				<div className='-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap'>
					<div className='ml-4 mt-4'>
						<h3 className='text-lg leading-6 font-medium text-primary-0'>
							Open Positions
						</h3>
					</div>
					<div className='ml-4 mt-4 flex-shrink-0'>
						<Link href='/consultants/submit-a-resume' passHref>
							<a>
								<button
									className='relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-primary-9 bg-primary-0 hover:bg-primary-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
									type='button'
								>
									Submit a Resume
								</button>
							</a>
						</Link>
					</div>
				</div>
			</div>
			{children}
		</Container>
	);
};

export default PositionsWrapper;
