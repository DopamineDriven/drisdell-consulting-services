import css from './contact-us-page-wrapper.module.css';
import cn from 'classnames';
import React, { FC } from 'react';

interface ContactUsWrapperProps {
	root?: string;
	children?: React.ReactNode;
}

const ContactUsPageWrapper: FC<ContactUsWrapperProps> = props => {
	const { root, children } = props;
	return (
		<section className={cn(css.root, root)}>
			<div className={css.divOuter}>
				<div className={css.divInner}>{children}</div>
			</div>
		</section>
	);
};

export default ContactUsPageWrapper;
