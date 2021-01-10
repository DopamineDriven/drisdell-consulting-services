import Logo from '../../Logo';
import Link from 'next/link';
import cn from 'classnames';
import css from './footer-logo.module.css';

const FooterLogo = () => {
	return (
		<Link href='/'>
			<a className={cn(css.footerLogoA)}>
				<span className={css.footerLogoSpan}>
					<Logo className='bg-primary-0 rounded-full h-40 w-40' />
				</span>
			</a>
		</Link>
	);
};

export default FooterLogo;
