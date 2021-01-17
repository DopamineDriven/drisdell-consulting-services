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

	await apolloClient.query<HeaderFooter, HeaderFooterVariables>({
		query: HEADER_FOOTER,
		variables: HeaderFooterMenuQueryVers
	});
	return addApolloState(apolloClient, {
		props: {},
		revalidate: 10
	});
};

const Contact: NextPage &
	InferGetStaticPropsType<typeof getStaticProps> = () => {
	const { setModalView, openModal } = useUI();
	return (
		<>
			<Layout title={'Contact Drisdell Consulting Services'}>
				<Container className='mx-10 grid grid-cols-2 select-none font-poppins'>
					<h1 className='text-primary-0 my-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6x 3xl:text-7xl'>
						Login or Create an account today
					</h1>
					<div>Contact Page</div> <span className='sr-only'>Let's do it</span>
					<Button
						type='submit'
						className='col-span-2 mx-auto bg-primary-0 text-primary-9'
						onClick={() => {
							openModal('OPEN_MODAL');
							setModalView('LOGIN_VIEW');
						}}
					>
						Request Appt
					</Button>{' '}
				</Container>
			</Layout>
		</>
	);
};

export default Contact;
