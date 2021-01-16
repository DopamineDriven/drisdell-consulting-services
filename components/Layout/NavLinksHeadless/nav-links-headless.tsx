import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cn from 'classnames';
import css from './nav-links-headless.module.css';
import { HeaderFooter_headerDynamic_menuItems_edges_node as NavRef } from '@lib/graphql/HeaderFooter/__generated__/HeaderFooter';
import { Transition } from '@headlessui/react';
import DownArrow from '../../Icons/down-arrow';

export interface NavLinkProps extends NavRef {
	root?: string;
}

const NavLinksHeadless: FC<NavLinkProps> = props => {
	const [isOpen, setIsOpen] = useState(false);
	const { root, path, label, childItems } = props;
	const { pathname } = useRouter();
	const childItemsCheck =
		childItems !== null &&
		childItems.edges !== null &&
		childItems.edges.length > 0
			? ``
			: ``;
	console.table(childItemsCheck);
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

			{/* {({ open }) => ( */}
			<>
				{childItems !== null &&
				childItems.edges !== null &&
				childItems.edges.length > 0 ? (
					<div className='relative z-10'>
						<button
							onClick={() => setIsOpen(!isOpen)}
							id='sub-menu'
							aria-haspopup={true}
							aria-expanded={true}
							type='button'
							className={cn(
								'bg-primary-0 rounded-full flex items-center lg:mx-auto lg:px-0 lg:py-0 my-auto text-primary-9 focus:outline-none transition-transform transform ease-in-out duration-500',
								{
									'-rotate-90 transform duration ': !isOpen,
									'rotate-0': isOpen
								}
							)}
						>
							<DownArrow className='select-none lg:w-5 lg:h-5 w-10 h-10' />
						</button>

						<Transition
							show={isOpen}
							enter='transition ease-out duration-200 '
							enterFrom='transform opacity-0 translate-y-1'
							enterTo='transform opacity-100 translate-y-0'
							leave='transition ease-in duration-150'
							leaveFrom='transform opacity-100 translate-y-0'
							leaveTo='transform opacity-0 translate-y-1'
						>
							<div className='lg:absolute relative z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'>
								<div
									className='rounded-lg lg:shadow-lg lg:ring-1 lg:ring-black ring-opacity-5 overflow-hidden'
									role='menu'
									aria-orientation='vertical'
									aria-labelledby='sub-menu'
								>
									<div className='relative grid lg:gap-3 px-5 lg:py-6 bg-primary-0 sm:gap-8 sm:p-8 text-primary-9'>
										{childItems!.edges!.map(subPage => {
											return subPage !== null &&
												subPage.node !== null &&
												subPage.node.label !== null &&
												subPage.node.parentId !== null &&
												subPage.node.url !== null &&
												subPage.node.path ? (
												<Link
													href={subPage.node.path}
													as={subPage.node.path}
													passHref
													key={subPage.node.id}
												>
													<a
														id={`#${subPage.node.parentId}`}
														className='lg:-m-3 -m-1 p-3 flex items-start rounded-md hover:bg-primary-2'
													>
														<p className='text-base font-medium'>{subPage.node.label}</p>
													</a>
												</Link>
											) : (
												<Link href='#' passHref>
													<a
														id={'#iderror'}
														className='-m-3 p-3 block rounded-md hover:primary-8'
													>
														<p className='text-base font-medium text-primary-1'>
															{'error in subpage mapping'}
														</p>
													</a>
												</Link>
											);
										})}
									</div>
								</div>
							</div>
						</Transition>
					</div>
				) : (
					''
				)}
			</>
			{/* )} */}
		</>
	);
};

export default NavLinksHeadless;
