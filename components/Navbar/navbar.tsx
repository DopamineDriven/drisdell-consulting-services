import { FC, useState, useEffect } from 'react';
import cn from 'classnames';
import NavbarUserLinks from './NavbarUserLinks';
import css from './navbar.module.css';
import { Transition } from '@headlessui/react/dist';
import { MenuIcon, XIcon } from '../Icons/index';
import OgLogo from '../UI/OgLogo/og-logo';
import Link from 'next/link';
import throttle from 'lodash.throttle';

interface NavbarProps {
	root?: string;
	navLinksDesktop: React.ReactNode;
	navLinksMobile?: React.ReactNode;
}
// https://stackoverflow.com/questions/57088861/react-setstate-hook-from-scroll-event-listener

const Navbar: FC<NavbarProps> = ({ root, navLinksDesktop, navLinksMobile }) => {
	const [menuOpen, setMenuOpen] = useState(true);
	const [isOpen] = useState(false);
	const [hasScrolled, setHasScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = throttle(() => {
			const offset = 0;
			const { scrollTop } = document.documentElement;
			const scrolled = scrollTop > offset;
			setHasScrolled(scrolled);
		}, 200);
		document.addEventListener('scroll', handleScroll);
		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	}, [hasScrolled]);
	return (
		<>
			<nav className={cn(root, css.root, css.stickyNav)}>
				<div
					className={cn(
						css.stickyNav,
						{ 'shadow-magical': hasScrolled },
						'max-w-full mx-auto px-4 sm:px-6 lg:px-8 font-poppins text-primary-1 transform-gpu duration-500 ease-in-out transition-all'
					)}
				>
					<div
						className={cn(
							'flex justify-between transform-gpu duration-500 ease-in-out transition-all',
							css.stickyNav,
							{
								'h-48': !hasScrolled,
								'h-24': hasScrolled
							}
						)}
					>
						<div className='flex'>
							<div className='-ml-2 mr-2 flex items-center lg:hidden w-full min-w-full'>
								<button
									className='inline-flex items-center justify-center p-2 rounded-md text-primary-8 hover:text-opacity-80 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
									aria-expanded={false}
									onClick={() => setMenuOpen(!menuOpen)}
								>
									<span className='sr-only'>Open Main Menu</span>
									{menuOpen ? (
										<MenuIcon
											className={cn('h-8 w-8 focus:outline-none', {
												hidden: !menuOpen,
												block: menuOpen
											})}
										/>
									) : (
										<XIcon
											className={cn('h-8 w-8 focus:outline-none', {
												hidden: menuOpen,
												block: !menuOpen
											})}
										/>
									)}
								</button>
							</div>
							<div className='hidden lg:ml-6 lg:flex lg:items-center lg:space-x-4'>
								{navLinksDesktop}
							</div>
						</div>
						<div className='flex items-center'>
							<div className='flex-shrink-0'>
								<div className='lg:mx-4 lg:flex-shrink-0 lg:flex lg:items-center'>
									<div className='ml-3 '>
										<div>
											<span className='sr-only'>Logo</span>
											<Link href='/' passHref scroll={true}>
												<a className='#logo'>
													<OgLogo
														className={cn(
															css.svg,
															'cursor-default focus:outline-none transition-all transform-gpu ease-in-out duration-500',
															{
																'w-40 h-40': !hasScrolled,
																'w-20 h-20': hasScrolled
															}
														)}
													/>
												</a>
											</Link>
										</div>
										<Transition
											show={isOpen && !hasScrolled}
											enter='transition ease-out duration-200'
											enterFrom='transform opacity-0 scale-95 right-0'
											enterTo='transform opacity-100 scale-100'
											leave='transition ease-in duration-200'
											leaveFrom='transform opacity-100 scale-100'
											leaveTo='transform opacity-0 scale-95'
										>
											<Transition.Child
												enter='transition ease-out duration-200'
												enterFrom='transform opacity-0 scale-95'
												enterTo='transform opacity-100 scale-100'
												leave='transition ease-in duration-200'
												leaveFrom='transform opacity-100 scale-100'
												leaveTo='transform opacity-0 scale-95'
											>
												<NavbarUserLinks
													role='menuitem'
													rootUserLink={cn('px-3 py-2 hover:bg-primary-1')}
													rootDiv={cn(
														'origin-top-right absolute right-0 mt-2 h-40 w-44 rounded-md shadow-lg ring-2 ring-red-900 outline-none grid grid-cols-1 bg-primary-0 z-50'
													)}
												/>
											</Transition.Child>
										</Transition>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className={cn('lg:hidden text-primary-0', {
						block: !menuOpen,
						hidden: menuOpen
					})}
				>
					<div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 align-middle'>
						{navLinksMobile}
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
