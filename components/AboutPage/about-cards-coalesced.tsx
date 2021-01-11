import ABOUT_CARDS_DATA from '@lib/graphql/AboutCardsData';
import {
	AboutCardsData,
	AboutCardsDataVariables
} from '@lib/graphql/AboutCardsData/__generated__/AboutCardsData';
import { Container } from '@components/UI';
import { useQuery } from '@apollo/client';
import cn from 'classnames';
import AboutData from './AboutData';
import AboutWrapper from './AboutWrapper';
import dynamic from 'next/dynamic';
import {
	OrderEnum,
	PostObjectsConnectionOrderbyEnum
} from '@_types/graphql-global-types';

export const AboutCardsCoalescedQueryVars: AboutCardsDataVariables = {
	first: 15,
	order: OrderEnum.ASC,
	field: PostObjectsConnectionOrderbyEnum.TITLE
};

const LoadingDots = dynamic(() => import('@components/UI/LoadingDots'));

const Loading = () => (
	<div className='w-80 h-80 flex items-center text-center justify-center p-3'>
		<LoadingDots />
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
		<Container className={cn('select-none')}>
			<section>
				<AboutWrapper>
					{data &&
					data.abouts !== null &&
					data.abouts.edges !== null &&
					data.abouts.edges.length > 0 ? (
						data.abouts.edges.map(edge => {
							return edge !== null &&
								edge.node !== null &&
								edge.node.content !== null ? (
								<AboutData
									featuredImage={edge.node.featuredImage}
									title={edge.node.title}
									slug={edge.node.slug}
									id={edge.node.id}
									key={edge.node.id}
									__typename={edge.node.__typename}
									content={edge.node.content}
								/>
							) : (
								<div>{error}</div>
							);
						})
					) : (
						<div>{`${error} about data returned undefined`}</div>
					)}
				</AboutWrapper>
			</section>
		</Container>
	);
};

export default AboutCardsCoalesced;
