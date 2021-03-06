import { FC } from 'react';
import cn from 'classnames';

interface TestimonialsWrapperProps {
	root?: string;
}

const TestimonialsWrapper: FC<TestimonialsWrapperProps> = props => {
	const { children, root } = props;

	return (
		<section
			className={cn(root, 'py-12 bg-accents-8 overflow-hidden align-middle')}
		>
			<div className='relative max-w-2xl xs:max-w-3xl sm:max-w-4xl md:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 align-middle'>
				{children}
			</div>
		</section>
	);
};

export default TestimonialsWrapper;
