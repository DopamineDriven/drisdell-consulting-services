import { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import { HEADER_FOOTER } from '@lib/graphql';
import {
	HeaderFooter,
	HeaderFooterVariables
} from '@lib/graphql/HeaderFooter/__generated__/HeaderFooter';
import { initializeApollo, addApolloState } from '@lib/apollo';
import Layout, { HeaderFooterMenuQueryVers } from '@components/Layout/layout';
import { useUI } from '@components/context';
import { Button, Container } from '@components/UI';

export const getStaticProps: GetStaticProps = async () => {
	const apolloClient = initializeApollo();

	const { data } = await apolloClient.query<HeaderFooter, HeaderFooterVariables>(
		{
			query: HEADER_FOOTER,
			variables: HeaderFooterMenuQueryVers
		}
	);
	return addApolloState(apolloClient, {
		props: {
			headerDynamic: data.headerDynamic ?? {},
			footerDynamic: data.footerDynamic ?? {}
		},
		revalidate: 10
	});
};

const Contact: NextPage &
	InferGetStaticPropsType<typeof getStaticProps> = () => {
	const { setModalView, openModal } = useUI();
	return (
		<>
			<Layout title={'Contact Drisdell Consulting Services'}>
				<Container className=' flex-shirnk bg-primary-9 p-6 select-none rounded-md relative z-50 pt-56'>
					<div className='grid-cols-3 max-w-xl mx-auto'>
						{/* <svg
							className='translate-x-1/8'
							width='404'
							height='404'
							fill='none'
							viewBox='0 0 404 404'
							aria-hidden='true'
						>
							<defs>
								<pattern
									id='85737c0e-0916-41d7-917f-596dc7edfa27'
									x='0'
									y='0'
									width='20'
									height='20'
									patternUnits='userSpaceOnUse'
								>
									<rect
										x='0'
										y='0'
										width='4'
										height='4'
										className='text-primary-0'
										fill='currentColor'
									/>
								</pattern>
							</defs>
							<rect
								width='404'
								height='404'
								fill='url(#85737c0e-0916-41d7-917f-596dc7edfa27)'
							/>
						</svg>
						<svg
							className='absolute right-full bottom-0 transform -translate-x-1/4'
							width='404'
							height='404'
							fill='none'
							viewBox='0 0 404 404'
							aria-hidden='true'
						>
							<defs>
								<pattern
									id='85737c0e-0916-41d7-917f-596dc7edfa27'
									x='0'
									y='0'
									width='20'
									height='20'
									patternUnits='userSpaceOnUse'
								>
									<rect
										x='0'
										y='0'
										width='4'
										height='4'
										className='text-primary-0'
										fill='currentColor'
									/>
								</pattern>
							</defs>
							<rect
								width='404'
								height='404'
								fill='url(#85737c0e-0916-41d7-917f-596dc7edfa27)'
							/>
						</svg> */}
						<h1 className='flex transform text-primary-0 my-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl'>
							<span className='sr-only'>Send an email</span>
							Get In Touch
						</h1>
						{/* <div>Contact Page</div> */}
						<Button
							type='submit'
							className='flex translate-x-1/2 transform bg-primary-0 text-primary-9'
							onClick={() => {
								openModal('OPEN_MODAL');
								setModalView('EMAIL_VIEW');
							}}
						>
							Send an email
						</Button>{' '}
					</div>
				</Container>
			</Layout>
		</>
	);
};

export default Contact;
