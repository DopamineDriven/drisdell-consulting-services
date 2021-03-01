import css from './contact-us-page-data.module.css';
import cn from 'classnames';
import { ContactUsPage_pages_edges_node as ContactUsPageDataDynamic } from '@lib/graphql/ContactUsPage/__generated__/ContactUsPage';
import { FC, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import { Media } from '@lib/artsy-fresnel';
import Particles from 'react-tsparticles';
import { Container, Button } from '@components/UI';
import { useUI } from '@components/context';
import Link from 'next/link';

interface ContactUsPageProps extends ContactUsPageDataDynamic {
	root?: string;
}

const ContactUsPageData: FC<ContactUsPageProps> = ({
	root,
	featuredImage,
	title
}) => {
	const { openModal, setModalView } = useUI();
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

	// const contentDynamic = content !== null ? content : 'No content to display';
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
	return (
		<main className={cn(root, css.root, '')}>
			<div className='relative'>
				<div className='absolute inset-x-0 bottom-0 h-full bg-primary-0'>
					<div className='mx-auto'>
						<div className='relative sm:overflow-hidden sm:pb-24'>
							<div className='absolute inset-0' ref={particlesConatinerRef}>
								<Particles
									className='cursor-default h-screen sm:h-screen w-full object-cover'
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
									<span className='block tracking-wide text-primary-0 font-bold py-2 font-poppins w-auto text-3xl sm:text-4xl md:text-8xl'>
										Contact Us
									</span>
									{/* <span className='tracking-wider block text-primary-9 font-extrabold py-2'>
										<em>Radiant</em>?
									</span> */}
								</h1>
								<div className='mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center z-50'>
									<div className='space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-3 sm:gap-5'>
										<Link href={'/consultants'} as='/consultants' passHref>
											<a className='flex items-center justify-center px-4 py-3 border border-transparent text-lg font-semibold rounded-full shadow-sm text-primary-1 bg-opacity-25 bg-white ring-2 ring-primary-1 ring-inset hover:bg-primary-8 hover:text-primary-0 sm:px-8 z-50 transition-colors duration-150'>
												Consultants
											</a>
										</Link>

										<a
											href='tel:770-330-6676'
											target='__blank'
											className='flex items-center justify-center px-4 py-3 border border-transparent text-lg font-semibold rounded-full shadow-sm text-primary-1 bg-opacity-25 bg-white ring-2 ring-primary-1 ring-inset hover:bg-primary-8 hover:text-primary-0 sm:px-8 z-50 transition-colors duration-150'
										>
											(770)-330-6676
										</a>

										<Link
											href={'/consultants/skills-and-positions'}
											as='/consultants/skills-and-positions'
											passHref
										>
											<a className='flex items-center justify-center px-4 py-3 border border-transparent text-lg font-semibold rounded-full shadow-sm text-primary-1 bg-opacity-25 bg-white ring-2 ring-primary-1 ring-inset hover:bg-primary-8 hover:text-primary-0 sm:px-8 z-50 transition-colors duration-150'>
												Skills &amp; Positions
											</a>
										</Link>
									</div>
								</div>
								<div className='mt-4 sm:mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center z-50'>
									<div className='space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5'>
										<Button
											type='submit'
											className={cn(
												'flex normal-case w-full mx-auto sm:w-auto items-center justify-center px-4 py-3 border border-transparent text-lg font-semibold rounded-full shadow-sm text-primary-1 bg-opacity-25 bg-white ring-2 ring-primary-1 ring-inset hover:bg-primary-8 hover:text-primary-0 sm:px-8 z-50 transition-colors duration-150'
											)}
											onClick={() => {
												openModal('OPEN_MODAL');
												setModalView('EMAIL_VIEW');
											}}
										>
											Send an Email
										</Button>
										<Button
											type='submit'
											className={cn(
												'flex items-center mx-auto w-full sm:w-auto normal-case justify-center px-4 py-3 border border-transparent text-lg font-semibold rounded-full shadow-sm text-primary-1 bg-opacity-25 bg-white ring-2 ring-primary-1 ring-inset hover:bg-primary-8 hover:text-primary-0 sm:px-8 z-50 transition-colors duration-150'
											)}
											onClick={() => {
												openModal('OPEN_MODAL');
												setModalView('SUBMIT_RESUME_VIEW');
											}}
										>
											Submit a Resume
										</Button>
									</div>
								</div>
							</Container>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default ContactUsPageData;
