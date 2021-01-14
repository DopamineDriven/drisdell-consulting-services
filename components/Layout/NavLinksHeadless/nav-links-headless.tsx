import { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cn from 'classnames';
import css from './nav-links-headless.module.css';
import { HeaderFooter_headerDynamic_menuItems_edges_node as NavRef } from '@lib/graphql/HeaderFooter/__generated__/HeaderFooter';
// import { Transition, Menu } from '@headlessui/react';
// import DownArrow from '../../Icons/down-arrow';

export interface NavLinkProps extends NavRef {
	root?: string;
}

const NavLinksHeadless: FC<NavLinkProps> = props => {
	const { root, path, label, children } = props;
	const { pathname } = useRouter();

	return (
		<>
			<Link href={path} passHref>
				<a
					className={
						pathname === path ? cn(css.linkActive, root) : cn(css.link, root)
					}
					aria-label={`link to ${label!}`}
				>
					{label ?? ''}
				</a>
			</Link>
			{children}
			{/* <Menu>
				{({ open }) => (
					<>
						{childItems !== null &&
						childItems.edges !== null &&
						childItems.edges.length > 0 ? (
							<>
								<Menu.Button>
									<DownArrow />
									</Menu.Button>
								<Transition
									show={open}
									enter='transition ease-out duration-200'
									enterFrom='opacity-0 translate-y-1'
									enterTo='opacity-100 translate-y-0'
									leave='transition ease-in duration-150'
									leaveFrom='opacity-100 translate-y-0'
									leaveTo='opacity-0 translate-y-1'
								>
									<Menu.Items static>
										<div className='absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0'>
											<div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
												<div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
													{childItems.edges.map(subPage => {
														return (
															<Menu.Item>
																<a
																	href='#'
																	className='-m-3 p-3 block rounded-md hover:bg-gray-50'
																>
																	<p className='text-base font-medium text-gray-900'>
																		{subPage?.node?.label}
																	</p>
																	<p className='mt-1 text-sm text-gray-500'>
																		Extra text to explain what the menu is option is.
																	</p>
																</a>
															</Menu.Item>
														);
													})}
												</div>
											</div>
										</div>
									</Menu.Items>
								</Transition>
							</>
						) : (
							''
						)}
					</>
				)}
			</Menu> */}
		</>
	);
};

export default NavLinksHeadless;
