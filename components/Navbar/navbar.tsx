import { FC, useState } from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { Logo } from '@components/index';
import { MenuIcon, XIcon, PlusIcon, BellIcon } from '@components/Icons';
import { NavbarLinks, NavbarUserLinks } from './Children';
import css from './navbar.module.css';
import Avatar from '@components/Avatar';
import { Transition } from '@headlessui/react/dist';
// import { HeaderMenu } from '@lib/graphql/HeaderMenu/__generated__/HeaderMenu';
// import NavbarLinksHeadless from './Children/NavbarLinksHeadless/navbar-links-headless';

interface NavbarProps {
	root?: string;
}

const Navbar: FC<NavbarProps> = props => {
	const router = useRouter();
	const { root } = props;
	const [menuOpen, setMenuOpen] = useState(true);
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<nav className={cn(root, css.root)}>
				<div className='max-w-full mx-auto px-4 sm:px-6 lg:px-8 font-poppins text-accents-1'>
					<div className='flex justify-between h-32'>
						<div className='flex'>
							<div className='-ml-2 mr-2 flex items-center md:hidden'>
								<button
									className='inline-flex items-center justify-center p-2 rounded-md text-secondary-1 hover:text-opacity-80 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
									aria-expanded={false}
									onClick={() => setMenuOpen(!menuOpen)}
								>
									<span className='sr-only'>Open Main Menu</span>
									{menuOpen ? (
										<MenuIcon
											classNameSVG={cn('h-6 w-6', {
												hidden: !menuOpen,
												block: menuOpen
											})}
										/>
									) : (
										<XIcon
											classNameSVG={cn('h-6 w-6', {
												hidden: menuOpen,
												block: !menuOpen
											})}
										/>
									)}
								</button>
							</div>
							<div className='flex-shrink-0 flex items-center'>
								<Logo classNameParent={css.jujisvg} width='7rem' height='7rem' />
							</div>
							<div className='hidden md:ml-6 md:flex md:items-center md:space-x-4'>
								<NavbarLinks />
							</div>
						</div>
						<div className='flex items-center'>
							<div className='flex-shrink-0'>
								<button
									className={`relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-accents-6 bg-secondary-0 hover:bg-opacity-70 hover:bg-secondary-0 focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-secondary-1 select-none`}
									type='button'
									onClick={() => router.push('/contact')}
								>
									<PlusIcon classNameSVG={cn('ml-1 mr-2 h-5 w-5')} />
									<span>Contact</span>
								</button>
							</div>
							<div className='hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center'>
								<button className='bg-accents-6 p-1 rounded-full text-offset-secondary-0 ring-2 ring-secondary-0 hover:text-accents-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary-0 focus:ring-accent-6'>
									<span className='sr-only'>View Notifications</span>
									<BellIcon classNameSVG='h-6 w-6' />
								</button>

								<div className='ml-3 '>
									<div>
										<button
											className={cn(
												' bg-jujiMintCream rounded-full text-accents-6 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-jujiCastletonGreen focus:ring-white z-50 '
											)}
											onClick={() => setIsOpen(!isOpen)}
										>
											<span className='sr-only'>Open User Menu</span>
											<Avatar className='h-12 w-12 ring-2 ring-accents-6 align-middle' />
										</button>
									</div>
									<Transition
										show={isOpen}
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
												rootUserLink={cn('px-3 py-2 hover:text-secondary-2')}
												rootDiv={cn(
													'origin-top-right absolute right-0 mt-2 h-40 w-44 rounded-md shadow-lg py-1 ring-2 ring-offset-secondary-2  outline-none grid grid-cols-1 bg-accents-6 z-50'
												)}
											/>
										</Transition.Child>
									</Transition>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className={cn('md:hidden bg-secondary-0', {
						block: !menuOpen,
						hidden: menuOpen
					})}
				>
					<div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 align-middle'>
						<NavbarLinks
							root={cn(
								'block px-3 py-2 rounded-md text-base font-medium text-accents-6'
							)}
						/>
					</div>
					<div className='pt-4 pb-3 border-t border-accents-5 bg-secondary-0'>
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
								<BellIcon classNameSVG='h-6 w-6 stroke-secondary-0' />
							</button>
						</div>
						<NavbarUserLinks
							rootUserLink={cn('text-white')}
							rootDiv='mt-3 px-2 sm:px-3'
						/>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;

/*
              Profile dropdown panel, show/hide based on dropdown state.

              Entering: "transition ease-out duration-200"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
*/
