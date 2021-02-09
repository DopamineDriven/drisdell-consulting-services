import ContactUsPageData from './ContactUsPageData';
import ContactUsPageWrapper from './ContactUsPageWrapper';
import CONTACT_US_PAGE from '@lib/graphql/ContactUsPage';
import {
	ContactUsPage,
	ContactUsPageVariables
} from '@lib/graphql/ContactUsPage/__generated__/ContactUsPage';
import { useQuery } from '@apollo/client';
import dynamic from 'next/dynamic';

export const ContactUsPageQueryVars: ContactUsPageVariables = {
	name: 'contact-us'
};

const LoadingSpinner = dynamic(() => import('@components/UI/LoadingSpinner'));

const Loading = () => (
	<div className='w-80 h-80 flex items-center text-center justify-center p-3'>
		<LoadingSpinner />
	</div>
);

const dynamicProps = {
	loading: () => <Loading />
};

const ApolloErrorMessage = dynamic(
	() => import('@components/UI/ErrorMessage'),
	dynamicProps
);

const ContactUsPageCoalesced = () => {
	const { loading, error, data } = useQuery<
		ContactUsPage,
		ContactUsPageVariables
	>(CONTACT_US_PAGE, {
		variables: ContactUsPageQueryVars,
		notifyOnNetworkStatusChange: true
	});

	return error ? (
		<>
			<ApolloErrorMessage
				message={`${error.message}`}
				graphQLErrors={error.graphQLErrors}
				networkError={error.networkError}
				extraInfo={error.extraInfo}
				stack={error.stack}
				name={error.name}
			/>
		</>
	) : loading && !error ? (
		<Loading />
	) : (
		<ContactUsPageWrapper>
			{data &&
			data !== null &&
			data.pages !== null &&
			data.pages.edges !== null &&
			data.pages.edges.length > 0 ? (
				data.pages.edges.map(page => {
					return page !== null &&
						page.node !== null &&
						page.node.featuredImage !== null &&
						page.node.slug !== null &&
						page.node.content !== null ? (
						<ContactUsPageData
							featuredImage={page.node.featuredImage}
							title={page.node.title}
							slug={page.node.slug}
							content={page.node.content}
							__typename={page.node.__typename}
							id={page.node.id}
							key={page.node.id}
						/>
					) : (
						<div>
							{error} - error thrown on returned page, node, and/or datatypes for
							ContactUsPage
						</div>
					);
				})
			) : (
				<div>{error} - data, pages, or edges null (edges.length = 0)</div>
			)}
		</ContactUsPageWrapper>
	);
};

export default ContactUsPageCoalesced;
