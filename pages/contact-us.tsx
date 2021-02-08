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
				<Container
					className=' grid grid-rows-2 mx-auto bg-primary-9 p-6 select-none rounded-md relative py-24'
					clean
				>
					<h1 className='flex transform mx-auto text-primary-0 my-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl'>
						<span className='sr-only'>Send an email</span>
						Get In Touch
					</h1>
					<Button
						type='submit'
						className='transform mx-auto bg-primary-0 rounded-md text-primary-9 w-56 h-20 hover:bg-primary-1 duration-150 transition-colors'
						onClick={() => {
							openModal('OPEN_MODAL');
							setModalView('EMAIL_VIEW');
						}}
					>
						Send an email
					</Button>{' '}
				</Container>
			</Layout>
		</>
	);
};

export default Contact;
