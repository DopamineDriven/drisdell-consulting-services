import { Container } from '../../UI';
import { FC } from 'react';
import cn from 'classnames';

interface LandingPageWrapperProps {
	root?: string;
}

const LandingPageWrapper: FC<LandingPageWrapperProps> = ({
	children,
	root
}) => {
	return (
		<Container className={cn(root)} clean>
			{children}
		</Container>
	);
};

export default LandingPageWrapper;
