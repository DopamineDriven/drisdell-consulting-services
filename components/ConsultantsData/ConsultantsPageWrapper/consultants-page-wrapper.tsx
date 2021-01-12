import { FC } from 'react';
import cn from 'classnames';
import css from './consultants-page-wrapper.module.css';

interface ConsultantsPageWrapperProps {
	root?: string;
	children?: React.ReactNode;
}

const ConsultantsPageWrapper: FC<ConsultantsPageWrapperProps> = props => {
	const { root, children } = props;
	return (
		<section className={cn(css.root, root)}>
			<div className={css.divOuter}>
				<div className={css.divInner}>{children}</div>
			</div>
		</section>
	);
};

export default ConsultantsPageWrapper;
