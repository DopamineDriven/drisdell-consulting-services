import cn from 'classnames';
import { FC } from 'react';
import { LandingCoalesced_landingPage_edges_node as LandingPageDataGenerated } from '@lib/graphql/LandingCoalesced/__generated__/LandingCoalesced';
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown/with-html';

interface LandingPageDataProps extends LandingPageDataGenerated {
	root?: string;
}

const LandingPageData: FC<LandingPageDataProps> = ({
	root,
	featuredImage,
	content,
	title,
	slug
}) => {
	const slugDynamic = slug !== null ? slug : '#';
	const contentDynamic = content !== null ? content : 'No content to display';
	const titleDynamic = title !== null ? title : 'Mark W Jacob Dental';
	const featuredImageDynamic =
		featuredImage !== null &&
		featuredImage.node !== null &&
		featuredImage.node.sourceUrl !== null
			? featuredImage.node.sourceUrl
			: '/lighthouse.webp';
	return (
		<main className={cn(root, 'z-50 fit')}>
			<div className='relative'>
				<div className='absolute inset-x-0 bottom-0 h-full bg-primary-0'>
					<div className='max-w-8xl mx-auto sm:px-6 lg:px-8 lg:py-8 sm:py-6'>
						<div className='relative shadow-xl sm:rounded-2xl sm:overflow-hidden'>
							<div className='absolute inset-0'>
								<Link href={slugDynamic} as={`/`} passHref scroll={false}>
									<a className='cursor-default h-full w-full object-cover'>
										<Image
											src={featuredImageDynamic}
											title='drisdell consulting services'
											alt='drisdell consulting services'
											width={2200}
											height={1400}
											quality={80}
											layout='responsive'
											priority
											className='h-full w-full object-cover'
										/>
										<div
											className='absolute inset-0 bg-gradient-to-r from-primary-2 to-rojo-0 opacity-50'
											style={{ mixBlendMode: 'multiply' }}
										></div>
									</a>
								</Link>
							</div>
							<div className='relative px-4 py-16 sm:px-6 sm:pt-24 lg:py-8 lg:px-8'>
								<h1 className='text-center text-4xl tracking-tight sm:text-5xl lg:text-6xl'>
									<ReactMarkdown
										className='sr-only'
										children={titleDynamic}
										allowDangerousHtml={true}
									/>
									<span className='block tracking-wide text-primary-9 font-bold py-2'>
										Drisdell Consulting Services
									</span>
									{/* <span className='tracking-wider block text-primary-9 font-extrabold py-2'>
										<em>Radiant</em>?
									</span> */}
								</h1>
								<ReactMarkdown
									children={contentDynamic}
									allowDangerousHtml={true}
									className='mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl'
								/>
								<div className='mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center'>
									<div className='space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5'>
										<Link href={'/about-us'} as='/about-us' passHref>
											<a className='flex items-center justify-center px-4 py-3 border border-transparent text-lg font-semibold rounded-md shadow-sm text-rojo-100 bg-primary-9 hover:bg-indigo-50 sm:px-8'>
												About Us
											</a>
										</Link>
										<Link href={'/contact-us'} as='/contact-us' passHref>
											<a className='flex items-center justify-center px-4 py-3 border border-transparent text-lg font-semibold rounded-md shadow-sm text-rojo-100 bg-white hover:bg-indigo-50 sm:px-8'>
												Contact Us
											</a>
										</Link>
									</div>
								</div>
							</div>
							<div className='bg-primary-9'>
								<div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
									<h4 className='text-center text-base uppercase z-50 text-primary-9 tracking-wide font-bold'>
										Custom Kronos Solutions, since 1995
									</h4>
									{/* <div className='mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5 lg:pb-20'>
										<div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
											<Image
												src='/ada-logo.png'
												width={100}
												height={100}
												className='h-12'
												alt='ada'
												quality={100}
												priority
											/>
										</div>
										<div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
											<Image
												src='/invisalign-square.png'
												width={100}
												height={100}
												className='h-12'
												alt='invisalign'
												quality={100}
												priority
											/>
										</div>
										<div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
											<Image
												src='/dental-vector-1.png'
												width={200}
												height={100}
												className='h-12'
												alt='deerfield dentist'
												quality={100}
												priority
											/>
										</div>
										<div className='col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1'>
											<Image
												src='/cdg-logo.png'
												width={100}
												height={100}
												className='h-12'
												alt='chicago dental group'
												quality={100}
												priority
											/>
										</div>
										<div className='col-span-1 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1'>
											<Image
												src='/isds-logo.png'
												width={100}
												height={100}
												className='h-12'
												alt='ada'
												quality={100}
												priority
											/>
										</div>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default LandingPageData;

/*
	<div className='bg-primary-9'>
					<div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
						<p className='text-center text-base uppercase text-primary- tracking-wide font-bold'>
							Brightening Chicagoland Smiles since 1994
						</p>
						<div className='mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5'>
							<div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
								<Link href='/' as='#' passHref>
									<a className='cursor-default'>
										<Image
											src='/ada-logo.png'
											width={100}
											height={100}
											className='h-12'
											alt='ada'
											quality={100}
											priority
										/>
									</a>
								</Link>
							</div>
							<div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
								<Link href='/' as='#' passHref>
									<a className='cursor-default'>
										<Image
											src='/invisalign-square.png'
											width={100}
											height={100}
											className='h-12'
											alt='invisalign'
											quality={100}
											priority
										/>
									</a>
								</Link>
							</div>
							<div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
								<Link href='/' as='#' passHref>
									<a className='cursor-default'>
										<Image
											src='/Deerfield_Dentist_logo.png'
											width={100}
											height={100}
											className='h-12'
											alt='deerfield dentist'
											quality={100}
											priority
										/>
									</a>
								</Link>
							</div>
							<div className='col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1'>
								<Link href='/' as='#' passHref>
									<a className='cursor-default'>
										<Image
											src='/cdg-logo.png'
											width={100}
											height={100}
											className='h-12'
											alt='chicago dental group'
											quality={100}
											priority
										/>
									</a>
								</Link>
							</div>
							<div className='col-span-1 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1'>
								<Link href='/' as='#' passHref>
									<a className='cursor-default'>
										<Image
											src='/ada-logo.png'
											width={100}
											height={100}
											className='h-12'
											alt='ada'
											quality={100}
											priority
										/>
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
*/
