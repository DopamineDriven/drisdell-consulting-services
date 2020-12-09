import React, { FC } from 'react';
import cn from 'classnames';
import css from './about-wrapper.module.css';

interface AboutWrapperProps {
	root?: string;
	children?: React.ReactNode;
}

const AboutWrapper: FC<AboutWrapperProps> = props => {
	const { root, children } = props;
	return (
		<section className={cn(css.root, root)}>
			<div className={css.divOuter}>
				<div className={css.divInner}>{children}</div>
			</div>
		</section>
	);
};

export default AboutWrapper;
