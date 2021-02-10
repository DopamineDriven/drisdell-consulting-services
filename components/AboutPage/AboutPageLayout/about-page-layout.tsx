import cn from 'classnames';
import { AboutCardsData_pages_edges_node as AboutPageDataGenerated } from '@lib/graphql/AboutCardsData/__generated__/AboutCardsData';
import { FC, useRef, useEffect } from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown/with-html';
import css from './about-page-layout.module.css';
import { Media } from '@lib/artsy-fresnel';
import Particles from 'react-tsparticles';
import Container from '@components/UI/Container';

interface LandingPageDataProps extends AboutPageDataGenerated {
	root?: string;
}

const AboutPageData: FC<LandingPageDataProps> = ({
	root,
	content,
	featuredImage,
	title
}) => {
	const particlesConatinerRef = useRef<HTMLDivElement>(null);
	// Stop the history navigation gesture on touch devices
	useEffect(() => {
		const preventNavigation = (event: TouchEvent) => {
			// Center point of the touch area
			const touchXPosition = event.touches[0].pageX;
			// Size of the touch area
			const touchXRadius = event.touches[0].radiusX || 0;

			// set a threshold (10px) on both sizes of the screen,
			// if the touch area overlaps with the screen edges
			// it's likely to trigger navigation. Prevent the
			// touchstart event in that case.
			if (
				touchXPosition - touchXRadius < 10 ||
				touchXPosition + touchXRadius > window.innerWidth - 10
			)
				event.preventDefault();
		};

		particlesConatinerRef.current!.addEventListener(
			'touchstart',
			preventNavigation
		);

		return () => {
			if (particlesConatinerRef.current !== null)
				particlesConatinerRef.current.removeEventListener(
					'touchstart',
					preventNavigation
				);
		};
	}, []);

	const contentDynamic = content !== null ? content : 'No content to display';
	const titleDynamic = title !== null ? title : 'Mark W Jacob Dental';
	const featuredImageDynamic =
		featuredImage !== null &&
		featuredImage.node !== null &&
		featuredImage.node.sourceUrl !== null
			? featuredImage.node.sourceUrl
			: '/lighthouse.webp';
	console.log(featuredImageDynamic);
	const desktop = (
		<Media greaterThanOrEqual='sm'>
			{/* <svg
				width='1928'
				height='446'
				viewBox='0 0 1928 446'
				fill='none'
				className={cn(
					'lg:align-bottom lg:absolute lg:bottom-25 xl:bottom-15 lg:left-0 lg:right-0 lg:top-0  lg:z-50 lg:h-screen mx-auto'
				)}
				xmlns='http://www.w3.org/2000/svg'
				style={{ backgroundBlendMode: 'overlay' }}
			>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M0 357.735V387.635L542.885 286.819L0 357.735ZM193 275.5L185.885 276.822L196 275.5H193ZM0 301.1V311.337L185.885 276.819L0 301.1ZM550 285.5L542.885 286.821L553 285.5H550ZM1656.19 138.444L0 446H1928V198.485L984 289.5L1656.19 138.444ZM1390.97 98.3L1928 28.145V0L1390.97 98.3ZM1928 74.6V51.49L1619.96 108.69L1928 74.6Z'
					fill='white'
					className='lg:inset-0 lg:align-bottom'
				/>
			</svg> */}
			{/* <div
				className='absolute inset-0 bg-gradient-to-r from-white to-purple-300'
				style={{ mixBlendMode: 'multiply' }}
			></div> */}
		</Media>
	);

	const mobile = (
		<Media lessThan='sm'>
			<div
				className='absolute inset-0 bg-gradient-to-r from-transparent to-transparent'
				style={{ mixBlendMode: 'multiply' }}
			></div>
		</Media>
	);

	const desktopContent = (
		<Media greaterThanOrEqual='sm'>
			<ReactMarkdown
				children={contentDynamic}
				allowDangerousHtml={true}
				className={cn(
					css['tableMd'],
					'mx-auto text-center text-lg md:text-lg text-indigo-100 sm:max-w-2xl font-somaRoman z-50 animate-slowPing transition-transform'
				)}
			/>
			{/* <OgLogo className='mt-10 w-42 h-42 mx-auto text-center text-lg md:text-lg text-indigo-100 sm:max-w-2xl font-somaRoman z-50 animate-slowPing transition-transform ' /> */}
		</Media>
	);
	// mt-10 max-w-lg mx-auto prose-lg text-indigo-100 sm:max-w-3xl font-somaRoman
	const mobileContent = (
		<Media lessThan='sm'>
			{/* <OgLogo className='mt-6 w-40 h-40 mx-auto text-center text-lg md:text-lg text-indigo-100 sm:max-w-2xl font-somaRoman z-50 animate-slowPing transition-transform' /> */}
			<ReactMarkdown
				children={contentDynamic}
				allowDangerousHtml={true}
				className='mt-6 max-w-lg mx-auto prose-lg text-indigo-100 sm:max-w-3xl font-somaRoman'
			/>
		</Media>
	);
	return (
		<main className={cn(root, 'z-50 fit select-none mb-64 md:mb-8 lg:mb-0')}>
			<div className='relative'>
				<div className='absolute inset-x-0 bottom-0 h-full bg-primary-0'>
					<div className='mx-auto'>
						<div className='relative  sm:overflow-hidden'>
							<div className='absolute inset-0' ref={particlesConatinerRef}>
								{/* <Link href={slugDynamic} as={`/`} passHref scroll={false}>
									<a className='cursor-default h-screen w-full object-cover'> */}
								<Particles
									className='cursor-default h-150 sm:h-screen w-full object-cover'
									id='tsparticles'
									options={{
										background: {
											color: {
												value: '#ffffff'
											}
										},
										fpsLimit: 60,
										interactivity: {
											detectsOn: 'canvas',
											events: {
												onClick: {
													enable: true,
													mode: 'push'
												},
												onHover: {
													enable: true,
													mode: 'repulse'
												},
												resize: true
											},
											modes: {
												bubble: {
													distance: 400,
													duration: 2,
													opacity: 0.8,
													size: 40
												},
												push: {
													quantity: 4
												},
												repulse: {
													distance: 200,
													duration: 0.4
												}
											}
										},
										particles: {
											color: {
												value: '#102a43'
											},
											links: {
												color: '#102a43',
												distance: 150,
												enable: true,
												opacity: 0.5,
												width: 1
											},
											collisions: {
												enable: true
											},
											move: {
												direction: 'none',
												enable: true,
												outMode: 'bounce',
												random: false,
												speed: 6,
												straight: false
											},
											number: {
												density: {
													enable: true,
													value_area: 800
												},
												value: 80
											},
											opacity: {
												value: 0.5
											},
											shape: {
												type: 'circle'
											},
											size: {
												random: true,
												value: 5
											}
										},
										detectRetina: true
									}}
								/>
								{/* </a>
								</Link> */}
								{mobile}
								{desktop}
							</div>
							<Container className='relative px-4 py-16 sm:px-6 sm:pt-16 lg:px-8 lg:max-w-6xl 3xl:max-w-7xl'>
								<h1 className='text-center text-6xl tracking-tight sm:text-5xl lg:text-6xl w-auto'>
									<ReactMarkdown
										className='sr-only'
										children={titleDynamic}
										allowDangerousHtml={true}
									/>
									<span className='block tracking-wide text-primary-0 font-bold py-2 font-poppins w-auto text-8xl'>
										About Us
									</span>
									{/* <span className='tracking-wider block text-primary-9 font-extrabold py-2'>
										<em>Radiant</em>?
									</span> */}
								</h1>
								{mobileContent}
								{desktopContent}
								<div className='mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center z-50'>
									<div className='space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5'>
										<Link href={'/consultants'} as='/consultants' passHref>
											<a className='flex items-center justify-center px-4 py-3 border border-transparent text-lg font-semibold rounded-full shadow-sm text-primary-1 bg-opacity-25 bg-white ring-2 ring-primary-1 ring-inset hover:bg-primary-8 hover:text-primary-0 sm:px-8 z-50 transition-colors duration-150'>
												Consultants
											</a>
										</Link>
										<Link href={'/contact-us'} as='/contact-us' passHref>
											<a className='flex items-center justify-center px-4 py-3 border border-transparent text-lg font-semibold rounded-full shadow-sm text-primary-1 bg-opacity-25 bg-white ring-2 ring-primary-1 ring-inset hover:bg-primary-8 hover:text-primary-0 sm:px-8 z-50 transition-colors duration-150'>
												Contact Us
											</a>
										</Link>
									</div>
								</div>
							</Container>
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

export default AboutPageData;
