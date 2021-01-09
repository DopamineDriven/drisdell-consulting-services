import { FC } from 'react';
import cn from 'classnames';
import Container from '../UI/Container';
import FooterLogo from './FooterLogo';
import FooterSocial from './FooterSocial';
import { WcdIcon } from '../Icons';

interface FooterProps {
	classNameRoot?: string;
	footerLinks?: React.ReactNode;
}

const Footer: FC<FooterProps> = props => {
	const { classNameRoot, footerLinks } = props;

	return (
		<footer
			className={` ${cn(
				classNameRoot,
				'bg-primary-0 text-accents-7 select-none'
			)}`}
			aria-labelledby='footerHeading'
		>
			<Container>
				<div
					id='footerHeading'
					className='grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-accents-4 py-12 text-primary bg-primary transition-colors duration-150'
				>
					<div className='col-span-1 lg:col-span-2'>
						<FooterLogo />
					</div>
					<div className='col-span-1 lg:col-span-3'>{footerLinks}</div>
					<div className='col-span-1 lg:col-span-7 flex items-start lg:justify-end text-primary'>
						<FooterSocial />
					</div>
				</div>
				<div className='py-12 flex flex-col md:flex-row justify-between items-center space-y-4'>
					<div>
						<span>
							&copy; 2021 Drisdell Consulting Services, Inc. All rights reserved.
						</span>
					</div>
					<div className='flex items-center'>
						<a
							href='https://linkedin.com/asross/'
							target='__blank'
							aria-label='Andrew Ross'
							className=''
						>
							<div>
								<WcdIcon />
							</div>
						</a>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
