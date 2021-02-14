import cn from 'classnames';
import { LandingCoalesced_aboutPage_edges_node as LandingPageAboutDataGenerated } from '@lib/graphql/LandingCoalesced/__generated__/LandingCoalesced';
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown/with-html';
import { FC } from 'react';

interface LandingPageAboutDataProps extends LandingPageAboutDataGenerated {
	root?: string;
}

const LandingPageAboutData: FC<LandingPageAboutDataProps> = ({
	root,
	content,
	slug
}) => {
	const slugDynamic = slug !== null ? slug : '#';
	const contentDynamic = content !== null ? content : 'No content to display';

	return (
		<div
			className={cn(
				root,
				'relative sm:bg-gradient-to-r sm:from-primary-0 sm:to-primary-9 overflow-hidden rounded-lg mt-104 sm:mt-0 px-12 mb-24 2xl:mb-32'
			)}
			style={{ backgroundBlendMode: 'soft-light' }}
		>
			<div className='max-w-8xl mx-auto shadow-magical'>
				<div className='relative z-40 bg-primary-9 h-full min-h-full sm:pb-16 md:pb-20 lg:pb-32 lg:max-w-md md:max-w-lg xl:pb-40 xl:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl lg:w-full '>
					<svg
						className='hidden lg:block absolute right-0 inset-y-0 2xl:w-110 w-64  h-full text-primary-9 transition-transform transform lg:translate-x-1/3 2xl:translate-x-1/3'
						fill='currentColor'
						viewBox='0 0 100 100'
						preserveAspectRatio='none'
						aria-hidden='true'
					>
						<polygon points='50,0 100,0 50,100 0,100' />
					</svg>
					<main className='mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 z-50 relative'>
						<div className='sm:text-center lg:text-left'>
							<h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl'>
								<span className='block xl:inline'>About Us</span>
								<br />
								<span className='block text-primary-3 xl:inline z-50'>
									Drisdell Consulting Services
								</span>
							</h1>
							<ReactMarkdown
								children={contentDynamic}
								allowDangerousHtml={true}
								className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 z-50'
							/>
							<div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
								<div className='rounded-md shadow'>
									<Link href={'/about-us'} as='/about-us' passHref>
										<a className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-9 bg-primary-2 hover:bg-primary-1 md:py-4 md:text-lg md:px-10'>
											About Us
										</a>
									</Link>
								</div>
								<div className='mt-3 sm:mt-0 sm:ml-3'>
									<Link href={'/contact-us'} as='/contact-us' passHref>
										<a className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-primary-8 hover:bg-primary-7 text-primary-1 md:py-4 md:text-lg md:px-10'>
											Contact Us
										</a>
									</Link>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
			<div className='lg:absolute lg:inset-y-24 2xl:inset-y-28 md:right-6 xl:right-6 2xl:right-14 right-5 md:w-1/2 xl:w-2/5 3xl:w-1/2 pt-10'>
				<Link href={slugDynamic} passHref scroll={true}>
					<a className='h-64 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full align-middle'>
						<Image
							src={'/lighthouse.webp'}
							title='📷 by Mary Drisdell'
							alt='Drisdell Consulting Services'
							width={2519}
							height={1450}
							quality={100}
							layout='responsive'
							priority
							className='h-full align-middle block w-full rounded-xl'
						/>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default LandingPageAboutData;

/*
type DataType.BlendMode = "multiply" | "color" | "color-burn" | "color-dodge" | "darken" | "difference" | "exclusion" | "hard-light" | "hue" | "lighten" | "luminosity" | "normal" | "overlay" | "saturation" | "screen" | "soft-light"
*/
