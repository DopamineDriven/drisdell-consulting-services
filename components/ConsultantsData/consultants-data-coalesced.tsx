import CONSULTANTS_DATA from '@lib/graphql/ConsultantsData/consultants-data';
import {
	ConsultantsData,
	ConsultantsDataVariables
} from '@lib/graphql/ConsultantsData/__generated__/ConsultantsData';
import {
	OrderEnum,
	PostObjectsConnectionOrderbyEnum
} from '@_types/graphql-global-types';
import { useQuery } from '@apollo/client';
import dynamic from 'next/dynamic';
import Container from '@components/UI/Container';
import ConsultantsPageData from './ConsultantsPageData/consultants-page-data';
import ConsultantsPageWrapper from './ConsultantsPageWrapper/consultants-page-wrapper';
import ConsultantsPostsData from './ConsultantsPostsData/consultants-posts-data';
import ConsultantsPostsWrapper from './ConsultantsPostsWrapper/consultants-posts-wrapper';

export const ConsultantsDataQueryVars: ConsultantsDataVariables = {
	name: 'consultants',
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

const ConsultantsDataCoalesced = () => {
	const { loading, data, error } = useQuery<
		ConsultantsData,
		ConsultantsDataVariables
	>(CONSULTANTS_DATA, {
		variables: ConsultantsDataQueryVars,
		notifyOnNetworkStatusChange: true
	});

	return error ? (
		<>
			<ApolloErrorMessage
				message={error.message}
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
		<ConsultantsPageWrapper>
			{data &&
			data.pages !== null &&
			data.pages.edges !== null &&
			data.pages.edges.length > 0 ? (
				data.pages.edges.map(edge => {
					return edge !== null && edge.node !== null ? (
						<ConsultantsPageData
							featuredImage={edge.node.featuredImage}
							content={edge.node.content}
							title={edge.node.title}
							slug={edge.node.slug}
							id={edge.node.id}
							key={edge.node.id}
							__typename={edge.node.__typename}
						/>
					) : (
						<div>{error} inner - consultants page mapping</div>
					);
				})
			) : (
				<div>{error} outer - consultants page mapping</div>
			)}
			<Container className={''} clean>
				<ConsultantsPostsWrapper>
					{data &&
					data.consultants !== null &&
					data.consultants.edges !== null &&
					data.consultants.edges.length > 0 ? (
						data.consultants.edges.map(post => {
							return post !== null &&
								post.node !== null &&
								post.node.content !== null ? (
								<ConsultantsPostsData
									key={post.node.id}
									featuredImage={post.node.featuredImage}
									slug={post.node.slug}
									content={post.node.content}
									id={post.node.id}
									title={post.node.title}
									__typename={post.node.__typename}
								/>
							) : (
								<div>{error} inner - consultants posts mapping</div>
							);
						})
					) : (
						<div>{error} outer = consultants posts mapping</div>
					)}
				</ConsultantsPostsWrapper>
			</Container>
		</ConsultantsPageWrapper>
	);
};

export default ConsultantsDataCoalesced;
