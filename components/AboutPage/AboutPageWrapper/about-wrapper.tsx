import React, { FC } from 'react';
import cn from 'classnames';
import css from './about-page-wrapper.module.css';

interface AboutWrapperProps {
	root?: string;
	children?: React.ReactNode;
}

const AboutPageWrapper: FC<AboutWrapperProps> = props => {
	const { root, children } = props;
	return (
		<section className={cn(css.root, root)}>
			<div className={css.divOuter}>
				<div className={css.divInner}>{children}</div>
			</div>
		</section>
	);
};

export default AboutPageWrapper;
