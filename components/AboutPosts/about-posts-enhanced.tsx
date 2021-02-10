import AboutPostsData from './AboutData';
import dynamic from 'next/dynamic';
import {
	AboutBySlug,
	AboutBySlugVariables
} from '@lib/graphql/AboutBySlug/__generated__/AboutBySlug';
import ABOUT_BY_SLUG from '@lib/graphql/AboutBySlug';
import { useQuery } from '@apollo/client';
import { AboutIdType } from '@lib/graphql-global-types';
import { useRouter } from 'next/router';
// import { ParsedUrlQuery } from 'querystring';

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

const { SLUG } = AboutIdType;
// const AboutPosts = ({ targetSlug }: ParsedUrlQuery) => {
const AboutPosts = () => {
	const { query } = useRouter();
	const targetSlug = query.slug as string;
	const AboutBySlugQueryVars: AboutBySlugVariables = {
		idType: SLUG,
		id: targetSlug
	};
	const { data, loading, error } = useQuery<AboutBySlug, AboutBySlugVariables>(
		ABOUT_BY_SLUG,
		{
			variables: AboutBySlugQueryVars,
			notifyOnNetworkStatusChange: true
		}
	);

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
			data.aboutPost !== null &&
			data.aboutPost.modified !== null &&
			data.aboutPost.slug !== null ? (
				<AboutPostsData
					key={data.aboutPost.id}
					title={data.aboutPost.title}
					modified={data.aboutPost.modified}
					slug={data.aboutPost.slug}
					featuredImage={data.aboutPost.featuredImage}
					polly={data.aboutPost.polly}
					content={data.aboutPost.content}
					__typename={data.aboutPost.__typename}
					id={data.aboutPost.id}
				/>
			) : (
				<div>{error + ', error in about-posts-enhanced.tsx'}</div>
			)}
		</>
	);
};

export default AboutPosts;
