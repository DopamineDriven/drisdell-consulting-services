import cn from 'classnames';
import { FC } from 'react';

interface AboutWrapperProps {
	root?: string;
}

const AboutWrapper: FC<AboutWrapperProps> = props => {
	const { root, children } = props;

	return (
		<div
			className={cn(
				root,
				'relative bg-primary-7 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 '
			)}
		>
			<div className='absolute inset-0'>
				<div className='bg-primary-9 h-1/3 sm:h-2/3' />
			</div>
			<div className='relative max-w-7xl mx-auto'>
				<div className='text-center'>
					<h2 className='text-3xl tracking-tight font-extrabold text-primary-0 sm:text-4xl'>
						About Drisdell Consulting Services
					</h2>
				</div>
				<div
					className={cn(
						'mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'
					)}
				>
					{children}
				</div>
			</div>
		</div>
	);
};

export default AboutWrapper;
