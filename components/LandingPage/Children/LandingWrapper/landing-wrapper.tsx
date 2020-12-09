import React, { FC } from 'react';
import cn from 'classnames';
import css from './landing-wrapper.module.css';

interface LandingWrapperProps {
	root?: string;
	children?: React.ReactNode;
}

const LandingWrapper: FC<LandingWrapperProps> = props => {
	const { root, children } = props;

	return (
		<section className={cn(css.root, root)}>
			<div className={css.outerDiv}>
				<div className={css.innerDiv}>{children}</div>
			</div>
		</section>
	);
};

export default LandingWrapper;
