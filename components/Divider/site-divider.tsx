import { FC } from 'react';

interface SiteDividerProps {
	classNameBorder?: string;
}

interface SiteDivide extends FC<SiteDividerProps> {}

const SiteDivider: SiteDivide = props => {
	const { classNameBorder = ` border-primary` } = props;
	return (
		<hr
			className={
				'mx-auto mt-portfolioDivider pb-portfolioDivider' + classNameBorder
			}
		/>
	);
};

export default SiteDivider;
