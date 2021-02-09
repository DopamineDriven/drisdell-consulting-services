import ABOUT_CARDS_DATA from '@lib/graphql/AboutCardsData';
import {
	AboutCardsData,
	AboutCardsDataVariables
} from '@lib/graphql/AboutCardsData/__generated__/AboutCardsData';
import { useQuery } from '@apollo/client';

import AboutData from './AboutData';
import AboutWrapper from './AboutWrapper';
import dynamic from 'next/dynamic';
import Container from '@components/UI/Container';
import AboutPageLayout from './AboutPageLayout';
import AboutPageWrapper from './AboutPageWrapper';
import {
	OrderEnum,
	PostObjectsConnectionOrderbyEnum
} from '@lib/graphql-global-types';

export const AboutCardsCoalescedQueryVars: AboutCardsDataVariables = {
	name: 'about-us',
	first: 15,
	order: OrderEnum.ASC,
	field: PostObjectsConnectionOrderbyEnum.TITLE
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

const AboutCardsCoalesced = () => {
	const { loading, error, data } = useQuery<
		AboutCardsData,
		AboutCardsDataVariables
	>(ABOUT_CARDS_DATA, {
		variables: AboutCardsCoalescedQueryVars,
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
		<AboutPageWrapper>
			{data &&
			data.pages !== null &&
			data.pages.edges !== null &&
			data.pages.edges.length > 0 ? (
				data.pages.edges.map(page => {
					return page !== null &&
						page.node !== null &&
						page.node.content !== null ? (
						<AboutPageLayout
							featuredImage={page.node.featuredImage}
							title={page.node.title}
							slug={page.node.slug}
							content={page.node.content}
							__typename={page.node.__typename}
							id={page.node.id}
							key={page.node.id}
						/>
					) : (
						<div>{error} in parent about-us page mapping</div>
					);
				})
			) : (
				<div>{error} about-us page data is null or a server error occurred</div>
			)}
			<Container className='' clean>
				<AboutWrapper>
					{data &&
					data.abouts !== null &&
					data.abouts.edges !== null &&
					data.abouts.edges.length > 0 ? (
						data.abouts.edges.map(edge => {
							return edge !== null &&
								edge.node !== null &&
								edge.node.content !== null &&
								edge.node.modified !== null ? (
								<AboutData
									featuredImage={edge.node.featuredImage}
									title={edge.node.title}
									slug={edge.node.slug}
									id={edge.node.id}
									key={edge.node.id}
									__typename={edge.node.__typename}
									content={edge.node.content}
									modified={edge.node.modified}
								/>
							) : (
								<div>{error}</div>
							);
						})
					) : (
						<div>{`${error} about data returned undefined`}</div>
					)}
				</AboutWrapper>
			</Container>
		</AboutPageWrapper>
	);
};

export default AboutCardsCoalesced;
