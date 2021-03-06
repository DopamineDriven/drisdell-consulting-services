import cn from 'classnames';
import { FC } from 'react';
import css from './about-wrapper.module.css';

interface AboutWrapperProps {
	root?: string;
}

const AboutWrapper: FC<AboutWrapperProps> = props => {
	const { root, children } = props;

	return (
		<div
			className={cn(
				root,
				'relative bg-primary-9 pt-8 sm:pt-4 lg:pt-0 pb-16 px-4 sm:px-6 lg:pb-24 lg:px-8 select-none -translate-y-8 sm:-translate-y-16 md:-translate-y-20 lg:-translate-y-28 transition-transform'
			)}
		>
			<div className='absolute inset-0'>
				<div className='bg-primary-9 h-1/3 sm:h-1/4 ' />
			</div>
			<div className='relative max-w-6xl mx-auto'>
				<div className='text-center'>
					<h2 className='text-3xl tracking-tight font-extrabold text-primary-0 sm:text-4xl'>
						Drisdell Consulting Services
					</h2>
				</div>
				<div className={cn(css.gridDiv, ' group-hover:opacity-75')}>{children}</div>
			</div>
		</div>
	);
};

export default AboutWrapper;
