import { Transition, Menu } from '@headlessui/react';
import { FC } from 'react';
import { HeaderFooter_headerDynamic_menuItems_edges_node_childItems_edges_node as FlyoutProps } from '@lib/graphql/HeaderFooter/__generated__/HeaderFooter';
import cn from 'classnames';
import DownArrow from '../../Icons/down-arrow';
import css from './nav-flyout-headless.module.css';
import Link from 'next/link';
import Container from '@components/UI/Container';

interface NavFlyoutProps extends FlyoutProps {
	root?: string;
}

const NavFlyoutHeadless: FC<NavFlyoutProps> = props => {
	const { root, label, path } = props;
	return (
		<>
			<Container className={cn(root, css.root)}>
				<Menu>
					{({ open }) => (
						<>
							{
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
														<Menu.Item>
															<Link href={path} as={path}>
																<a className='-m-3 p-3 block rounded-md hover:bg-gray-50'>
																	<p className='text-base font-medium text-gray-900'>{label}</p>
																	<p className='mt-1 text-sm text-gray-500'>
																		Extra text to explain what the menu is option is.
																	</p>
																</a>
															</Link>
														</Menu.Item>
													</div>
												</div>
											</div>
										</Menu.Items>
									</Transition>
								</>
							}
						</>
					)}
				</Menu>
			</Container>
		</>
	);
};

export default NavFlyoutHeadless;
