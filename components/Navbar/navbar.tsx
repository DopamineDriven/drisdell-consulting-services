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
						'max-w-full mx-auto px-4 sm:px-6 lg:px-8 font-poppins text-primary-1 transform-gpu duration-200 ease-in-out transition-all'
					)}
				>
					<div
						className={cn('flex justify-between ', css.stickyNav, {
							'h-48': !hasScrolled,
							'h-24': hasScrolled
						})}
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
							{/* <div className='lg:flex-shrink lg:float-none float-right flex col-span-3 items-center align-middle text-right -ml-2 lg:ml-0'>
								<p className='relative w-full min-w-full block float-right'>
									<OgLogo className={cn(css.svg, ' ')} />
								</p>
							</div> */}
							<div className='hidden lg:ml-6 lg:flex lg:items-center lg:space-x-4'>
								{navLinksDesktop}
							</div>
						</div>
						<div className='flex items-center'>
							<div className='flex-shrink-0'>
								{/* <button
									className={`hidden lg:relative lg:inline-flex lg:items-center lg:px-4 lg:py-2 lg:border lg:border-primary-9 lg:shadow-sm lg:font-medium lg:rounded-md lg:text-primary-8 lg:hover:bg-opacity-70 lg:hover:primary-8 lg:focus:outline-none lg:focus:ring-offset-2 lg:focus:ring-2 lg:focus:ring-primary-1 lg:select-none`}
									type='button'
									onClick={() => router.push('/contact-us')}
								>
									<PlusIcon className={cn('ml-1 mr-2 h-5 w-5 text-lg')} />
									<span className='text-xl'>Contact</span>
								</button>
							</div>
								<button className='bg-primary-0 p-1 my-auto rounded-full text-offset-secondary-0 ring-2 ring-primary-6 hover:text-primary-6 focus:outline-none focus:ring-2 focus:ring-priamry-8 focus:ring-accent-6'>
									<span className='sr-only'>View Notifications</span>
									<BellIcon className='h-8 w-8' />
								</button> */}
								<div className='lg:mx-4 lg:flex-shrink-0 lg:flex lg:items-center'>
									<div className='ml-3 '>
										<div>
											{/* <button
												className={cn(
													' bg-primary-0 rounded-full text-primary-9 text-base focus:outline-none focus:ring-2 focus:ring-primary-0 z-50 '
												)}
												onClick={() => setIsOpen(!isOpen)}
											>
												<span className='sr-only'>Open User Menu</span>
												<Avatar className='h-18 w-18 ring-0.5 ring-opacity-50 ring-red-900 align-middle' />
											</button> */}
											<span className='sr-only'>Logo</span>
											<Link href='/' passHref scroll={true}>
												<a className='#logo'>
													<OgLogo
														className={cn(css.svg, 'cursor-default focus:outline-none', {
															'w-40 h-40': !hasScrolled,
															'w-20 h-20': hasScrolled
														})}
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
					{/* <div className='pt-4 pb-3 border-t border-accents-5 primary-8'>
						<div className='flex items-center px-5 sm:px-6'>
							<div className='flex-shrink-0'>
								<Avatar className='h-10 w-10 ring-2 ring-accents-5' />
							</div>
							<div className='ml-3'>
								<div className='text-base font-medium text-accents-6'>User</div>
								<div className='text-sm font-medium text-accents-6 align-middle'>
									user@example.com
								</div>
							</div>
							<button className='bg-accents-6 p-1 ml-auto flex-shrink-0 ring-2 ring-secondary-0 rounded-full hover:text-accents-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary-0 focus:ring-accent-6'>
								<span className='sr-only'>View Notifications</span>
								<BellIcon className='h-6 w-6 stroke-secondary-0' />
							</button>
						</div>
						<NavbarUserLinks
							rootUserLink={cn('text-white')}
							rootDiv='mt-3 px-2 sm:px-3'
						/>
					</div> */}
				</div>
			</nav>
		</>
	);
};

export default Navbar;
