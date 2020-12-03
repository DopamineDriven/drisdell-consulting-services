import { NavImage, NavLinks } from './Children';
import { ColorsSvg } from '@lib/index';
import { FC, Fragment, useState, useMemo, useRef, useEffect } from 'react';
import css from './nav.module.css';

interface NavProps {
	classNameParentDiv?: string;
}

const Nav: FC<NavProps> = props => {
	const { classNameParentDiv = '' } = props;

	const [bg] = useState(useMemo(() => ColorsSvg, []));
	let ref = useRef() as React.MutableRefObject<HTMLInputElement>;

	useEffect(() => {
		if (ref && ref.current) {
			// ref.current.style.backgroundImage = `linear-gradient(140deg, #00523C 50%, #168644 100%)`;
			ref.current.style.backgroundImage = `linear-gradient(140deg, ${bg[0]}, ${bg[1]} 100%)`;
			// ${bg[0]}, ${bg[1]}
		}
	}, [bg]);

	return (
		<Fragment>
			<div className={css.divParent + `${classNameParentDiv}`}>
				<div className={css.divChild}>
					<div className={css.divGrandChild}>
						<NavImage />
						<nav className={css.nav}>
							<NavLinks />
						</nav>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Nav;
