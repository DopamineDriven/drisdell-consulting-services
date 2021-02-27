import { FC, useRef, useEffect } from 'react';
import { ConsultantsData_pages_edges_node as ConsultantsPageHeadlessProps } from '@lib/graphql/ConsultantsData/__generated__/ConsultantsData';
import Link from 'next/link';
import cn from 'classnames';
import ReactMarkdown from 'react-markdown/with-html';
import { Media } from '@lib/artsy-fresnel';
import Particles from 'react-tsparticles';
import Container from '@components/UI/Container';
import css from './consultants-page-data.module.css';

interface ConsultantsPageDataProps extends ConsultantsPageHeadlessProps {
	root?: string;
}

const ConsultantsPageData: FC<ConsultantsPageDataProps> = ({
	root,
	featuredImage,
	title,
	content
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
			<></>
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
		</Media>
	);

	const mobileContent = (
		<Media lessThan='sm'>
			<ReactMarkdown
				children={contentDynamic}
				allowDangerousHtml={true}
				className='mt-6 max-w-lg mx-auto prose-lg text-indigo-100 sm:max-w-3xl font-somaRoman'
			/>
		</Media>
	);
	return (
		<main
			className={cn(
				root,
				'z-50 sm:h-75 h-screen select-none mb-64 md:mb-8 lg:mb-0'
			)}
		>
			<div className='relative'>
				<div className='absolute inset-x-0 bottom-0 h-full bg-primary-0'>
					<div className='mx-auto'>
						<div className='relative sm:overflow-hidden'>
							<div className='absolute inset-0' ref={particlesConatinerRef}>
								{/* <Link href={slugDynamic} as={`/`} passHref scroll={false}>
									<a className='cursor-default h-screen w-full object-cover'> */}
								<Particles
									className='cursor-default h-150 sm:h-full w-full object-cover'
									id='tsparticles'
									options={{
										background: {
											color: {
												value: '#102a43'
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
												value: '#ffffff'
											},
											links: {
												color: '#ffffff',
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
							<Container className='relative px-4 py-16 sm:px-6 sm:pt-16 lg:py-8 lg:px-8 lg:max-w-6xl 3xl:max-w-7xl'>
								<h1 className='text-center text-4xl tracking-tight sm:text-5xl lg:text-6xl w-auto'>
									<ReactMarkdown
										className='sr-only'
										children={titleDynamic}
										allowDangerousHtml={true}
									/>
									<span className='block tracking-wide text-primary-9 font-bold pt-2 pb-4 font-poppins w-auto text-2xl sm:text-4xl md:text-8xl'>
										Consultants
									</span>
									{/* <span className='tracking-wider block text-primary-9 font-extrabold py-2'>
										<em>Radiant</em>?
									</span> */}
								</h1>
								{mobileContent}
								{desktopContent}
								<div className='mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center z-50'>
									<div className='space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5'>
										<Link href={'/about-us'} as='/about-us' passHref>
											<a className='flex items-center justify-center px-4 py-3 border border-transparent text-lg font-semibold rounded-full shadow-sm text-primary-9 bg-transparent ring-2 ring-white ring-inset hover:bg-primary-9 hover:text-primary-0 hover:opacity-75 sm:px-8 z-50 transition-colors duration-150'>
												About Us
											</a>
										</Link>
										<Link href={'/contact-us'} as='/contact-us' passHref>
											<a className='flex items-center justify-center px-4 py-3 border border-transparent text-lg font-semibold rounded-full shadow-sm text-primary-9 bg-transparent ring-2 ring-white ring-inset hover:bg-primary-9 hover:text-primary-0 hover:opacity-75 sm:px-8 z-50 transition-colors duration-150'>
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
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default ConsultantsPageData;
