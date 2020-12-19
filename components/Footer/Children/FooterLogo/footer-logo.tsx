import { Logo as DrisdellIcon } from '@components/index';
import Link from 'next/link';
import cn from 'classnames';
import css from './footer-logo.module.css';

const FooterLogo = () => {
	return (
		<Link href='/'>
			<a className={cn(css.footerLogoA)}>
				<span className={css.footerLogoSpan}>
					<DrisdellIcon
						width='10rem'
						height='10rem'
						classNameSVG='bg-primary-0 rounded-full'
					/>
				</span>
			</a>
		</Link>
	);
};

export default FooterLogo;
