import cn from 'classnames';
import { FC } from 'react';
import css from './consultants-posts-wrapper.module.css';

interface ConsultantsPostsWrapperProps {
	root?: string;
}

const ConsultantsPostsWrapper: FC<ConsultantsPostsWrapperProps> = props => {
	const { root, children } = props;

	return (
		<div
			className={cn(
				root,
				'relative bg-primary-9 pt-8 sm:pt-4 lg:pt-0 pb-16 px-4 sm:px-6 lg:pb-24 lg:px-8 select-none -translate-y-8 sm:-translate-y-16 md:-translate-y-20 lg:-translate-y-28 transition-transform'
			)}
		>
			<div className='absolute inset-0'>
				<div className='bg-primary-9 h-1/3 sm:h-2/3 ' />
			</div>
			<div className='relative max-w-7xl mx-auto'>
				<div className='text-center'>
					<h2 className='text-3xl tracking-tight font-extrabold text-primary-0 sm:text-4xl'>
						DCS Consultants
					</h2>
				</div>
				<div
					className={cn(
						css.gridDiv,
						'mt-12 max-w-lg mx-auto text-center grid gap-5 md:max-w-3xl md:grid-cols-1 lg:grid-cols-2 lg:max-w-5xl group-hover:opacity-75'
					)}
				>
					{children}
				</div>
			</div>
		</div>
	);
};

export default ConsultantsPostsWrapper;
