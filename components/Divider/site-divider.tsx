import { FC } from 'react';
import cn from 'classnames';
import css from './site-divider.module.css';

interface SiteDividerProps {
	classNameBorder?: string;
}

const SiteDivider: FC<SiteDividerProps> = props => {
	const { classNameBorder = ` border-primary` } = props;
	return <hr className={cn(css.hr, classNameBorder)} />;
};

export default SiteDivider;
