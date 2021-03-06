import React, { FC } from 'react';
import { Transition } from '@headlessui/react/dist';
import cn from 'classnames';
import css from './navbar-user-dropdown.module.css';
import NavbarUserLinks from '../NavbarUserLinks/navbar-user-links';
import Avatar from '@components/Avatar';
import { useRouter } from 'next/router';
import { Button } from '@components/UI';
import PlusIcon from '../../Icons/plus-icon';
import BellIcon from '../../Icons/bell-icon';

interface NavbarUserDropdownProps {
	root?: string;
	show: boolean;
	onClick?: (value: React.SetStateAction<boolean>) => void;
}

// forward ref? useRef?

const NavbarUserDropdown: FC<NavbarUserDropdownProps> = props => {
	const { show, onClick, root } = props;
	const router = useRouter();
	return (
		<div className='flex items-center'>
			<div className='flex-shrink-0'>
				<button
					className={`relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-accents-6 bg-primary-0 hover:bg-secondary-1 focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-secondary-1 select-none`}
					type='button'
					onClick={() => router.push('/signup')}
				>
					<PlusIcon className={cn('ml-1 mr-2 h-6 w-6')} />
					<span>Sign Up</span>
				</button>
			</div>
			<div className={cn(css.rootDiv, root)}>
				<button className='bg-secondary-0 p-1 rounded-full text-accents-5 hover:text-accents-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary-0 focus:ring-accent-6'>
					<span className='sr-only'>View Notifications</span>
					<BellIcon className='h-6 w-6' />
				</button>

				<div className='ml-3 '>
					<div>
						<Button
							className={cn(
								' bg-accents-7 rounded-full text-accents-6 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-jujiCastletonGreen focus:ring-white z-50 '
							)}
							onClick={() => onClick}
						>
							<span className='sr-only'>Open User Menu</span>
							<Avatar className='h-8 w-8 align-middle' />
						</Button>
					</div>
					<Transition
						show={show}
						enter='transition ease-out duration-200'
						enterFrom='transform opacity-0 scale-95'
						enterTo='transform opacity-100 scale-100'
						leave='transition ease-in duration-200'
						leaveFrom='transform opacity-100 scale-100'
						leaveTo='transform opacity-0 scale-95'
						role='menu'
						aria-orientation='vertical'
						aria-labelledby='user-menu'
					>
						<div
							role='menu'
							aria-orientation='vertical'
							aria-labelledby='user-menu'
							className={cn(
								'text-primary-9 origin-top-right absolute right-0 mt-2 h-40 w-44 rounded-md shadow-lg py-1 ring-2 ring-red-900  outline-none grid grid-cols-1 bg-primary-0 z-50'
							)}
						>
							<NavbarUserLinks
								role='menuitem'
								rootUserLink={cn(
									'px-3 py-2 my-auto align-middle content-center bg-primary-0'
								)}
							/>
						</div>
					</Transition>
				</div>
			</div>
		</div>
	);
};

export default NavbarUserDropdown;
