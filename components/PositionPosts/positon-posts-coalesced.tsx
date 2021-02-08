import dynamic from 'next/dynamic';
// import cn from 'classnames';
// // import hydrate from 'next-mdx-remote/hydrate';
// import css from './about-sub-page.module.css';
// import ReactMarkdown from 'react-markdown/with-html';
// import Image from 'next/image';
// import Link from 'next/link';
import POSITION_BY_SLUG from '@lib/graphql/PositionBySlug';
import { PositionIdType } from '@lib/graphql-global-types';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import PositionParent from './PositionPostsData';
import PositionData from '../PositionsPreview/PositionsData/positions-data';
import {
	PositionBySlugVariables,
	PositionBySlug
} from '../../lib/graphql/PositionBySlug/__generated__/PositionBySlug';

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

const PositionPostsCoalesced = () => {
	const { query } = useRouter();
	const desiredSlug = query.slug as string;
	const PositionBySlugQueryVars: PositionBySlugVariables = {
		idType: PositionIdType.SLUG,
		id: desiredSlug
	};

	const { data, loading, error } = useQuery<
		PositionBySlug,
		PositionBySlugVariables
	>(POSITION_BY_SLUG, {
		variables: PositionBySlugQueryVars,
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
			data.positionBySlug !== null &&
			data.positionBySlug.content !== null &&
			data.positionBySlug.featuredImage !== null &&
			data.positionBySlug.featuredImage.node !== null &&
			data.positionBySlug.featuredImage.node.sourceUrl !== null &&
			data.positionBySlug.positionDetails !== null &&
			data.positionBySlug.positionDetails.dateclosing !== null &&
			data.positionBySlug.positionDetails.jobtitle !== null &&
			data.positionBySlug.positionDetails.positiontype !== null &&
			data.positionBySlug.positionDetails.remotestatus !== null &&
			data.positionBySlug.slug !== null &&
			data.positionBySlug.excerpt !== null &&
			data.positionBySlug.title !== null ? (
				<PositionParent
					key={data.positionBySlug.id}
					date={data.positionBySlug.date}
					title={data.positionBySlug.title}
					excerpt={data.positionBySlug.excerpt}
					content={data.positionBySlug.content}
					featuredImage={data.positionBySlug.featuredImage}
					slug={data.positionBySlug.slug}
					id={data.positionBySlug.id}
					positionDetails={data.positionBySlug.positionDetails}
					__typename={data.positionBySlug.__typename}
					modified={data.positionBySlug.modified}
				>
					<>
						<PositionData
							key={data.positionBySlug.id}
							positionDetails={data.positionBySlug.positionDetails}
							slug={data.positionBySlug.slug}
							id={data.positionBySlug.id}
							__typename={data.positionBySlug.__typename}
						/>
					</>
				</PositionParent>
			) : (
				<div>{error} error returend in service posts</div>
			)}
		</>
	);
};

export default PositionPostsCoalesced;
