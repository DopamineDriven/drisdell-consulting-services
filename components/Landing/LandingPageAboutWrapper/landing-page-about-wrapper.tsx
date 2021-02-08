import { FC } from 'react';
import Container from '../../UI/Container/container';
import cn from 'classnames';

interface LandingPageAboutWrapperProps {
	root?: string;
}

const LandingPageAboutWrapper: FC<LandingPageAboutWrapperProps> = ({
	children,
	root
}) => {
	return (
		<Container className={cn('mt-32 sm:mt-24 select-none', root)}>
			{children}
		</Container>
	);
};

export default LandingPageAboutWrapper;
