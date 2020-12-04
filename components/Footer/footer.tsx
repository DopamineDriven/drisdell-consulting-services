import { FC } from 'react';
import cn from 'classnames';
import { Container } from '@components/UI';
import { FooterLogo, FooterNavLinks, FooterSocial } from './Children';
import { WcdIcon } from '@components/Icons';

interface FooterProps {
	classNameRoot?: string;
}

const Footer: FC<FooterProps> = props => {
	const { classNameRoot = '' } = props;

	return (
		<footer
			className={` ${cn(
				classNameRoot,
				'bg-secondary-0 text-accents-7 select-none'
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
					<div className='col-span-1 lg:col-span-3'>
						<FooterNavLinks />
					</div>
					<div className='col-span-1 lg:col-span-7 flex items-start lg:justify-end text-primary'>
						<FooterSocial />
					</div>
				</div>
				<div className='py-12 flex flex-col md:flex-row justify-between items-center space-y-4'>
					<div>
						<span>
							&copy; 2020 Drisdell Consulting Services, Inc. All rights reserved.
						</span>
					</div>
					<div className='flex items-center'>
						<span className='text-primary'>Crafted by &nbsp;</span>
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
