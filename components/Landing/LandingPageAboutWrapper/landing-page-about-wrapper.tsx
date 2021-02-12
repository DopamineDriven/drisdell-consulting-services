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
	return <Container className={cn('select-none', root)}>{children}</Container>;
};

export default LandingPageAboutWrapper;
