import Logo from '../../Logo';
import Link from 'next/link';
import cn from 'classnames';
import css from './footer-logo.module.css';

const FooterLogo = () => {
	return (
		<Link href='/'>
			<a className={cn(css.footerLogoA)}>
				<span className={css.footerLogoSpan}>
					<Logo width='10' height='10' classNameSVG='bg-primary-0 rounded-full' />
				</span>
			</a>
		</Link>
	);
};

export default FooterLogo;
