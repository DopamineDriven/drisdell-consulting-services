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
		<section className={cn(css.alpha, root)}>
			<div className={css.beta}>
				<div className={css.gamma}>{children}</div>
			</div>
		</section>
	);
};

export default ContactUsPageWrapper;
