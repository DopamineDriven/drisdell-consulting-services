import React, { FC } from 'react';
import cn from 'classnames';
import css from './consultant-wrapper.module.css';

interface ConsultantWrapperProps {
	root?: string;
	children?: React.ReactNode;
}

const ConsultantWrapper: FC<ConsultantWrapperProps> = props => {
	const { root, children } = props;
	return (
		<section className={cn(css.root, root)}>
			<div className={css.divOuter}>
				<div className={css.divInner}>{children}</div>
			</div>
		</section>
	);
};

export default ConsultantWrapper;
