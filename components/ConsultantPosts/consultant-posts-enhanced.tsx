import ConsultantsPostsData from './ConsultantPostsData';
import dynamic from 'next/dynamic';
import { CONSULTANT_BY_SLUG } from '@lib/graphql';
import { useQuery } from '@apollo/client';
import { ConsultantIdType } from '@lib/graphql-global-types';
import { useRouter } from 'next/router';
// import { ParsedUrlQuery } from 'querystring';
import {
	ConsultantBySlug,
	ConsultantBySlugVariables
} from '../../lib/graphql/ConsultantBySlug/__generated__/ConsultantBySlug';

const LoadingSpinner = dynamic(() => import('@components/UI/LoadingSpinner'));

const Loading = () => (
	<div className='w-80 h-80 flex items-center text-center justify-center p-3'>
		<LoadingSpinner />
	</div>
);

const dynamicProps = {
	loading: () => <Loading />
};

// const DynamicImage = dynamic(() => import('next/image'), dynamicProps);

const ApolloErrorMessage = dynamic(
	() => import('@components/UI/ErrorMessage'),
	dynamicProps
);

const { SLUG } = ConsultantIdType;
// const ConsultantPostsEnhanced = ({ targetSlug }: ParsedUrlQuery) => {
const ConsultantPostsEnhanced = () => {
	const { query } = useRouter();
	const targetSlug = query.slug as string;
	const ConsultantBySlugQueryVars: ConsultantBySlugVariables = {
		idType: SLUG,
		id: targetSlug
	};
	const { data, loading, error } = useQuery<
		ConsultantBySlug,
		ConsultantBySlugVariables
	>(CONSULTANT_BY_SLUG, {
		variables: ConsultantBySlugQueryVars,
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
		<>
			{data &&
			data.consultantPost !== null &&
			data.consultantPost.modified !== null &&
			data.consultantPost.slug !== null ? (
				<ConsultantsPostsData
					key={data.consultantPost.id}
					title={data.consultantPost.title}
					modified={data.consultantPost.modified}
					slug={data.consultantPost.slug}
					featuredImage={data.consultantPost.featuredImage}
					content={data.consultantPost.content}
					__typename={data.consultantPost.__typename}
					id={data.consultantPost.id}
				/>
			) : (
				<div>{error + ', error in about-posts-enhanced.tsx'}</div>
			)}
		</>
	);
};

export default ConsultantPostsEnhanced;
