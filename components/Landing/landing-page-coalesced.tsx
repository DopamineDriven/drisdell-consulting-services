import LANDING_COALESCED from '@lib/graphql/LandingCoalesced/landing-coalesced';
import {
	LandingCoalesced,
	LandingCoalescedVariables
} from '@lib/graphql/LandingCoalesced/__generated__/LandingCoalesced';
import cn from 'classnames';
import dynamic from 'next/dynamic';
import LandingPageData from './LandingData';
import LandingTestimonials from './LandingTestimonialsData';
import LandingTestimonialsWrapper from './LandingTestimonialsWrapper';
import LandingPageWrapper from './LandingWrapper';
import {
	OrderEnum,
	PostObjectsConnectionOrderbyEnum
} from '@lib/graphql-global-types';
import { useQuery } from '@apollo/client';
import css from './landing-page-coalesced.module.css';

export const LandingCoalescedQueryVars: LandingCoalescedVariables = {
	name: 'Drisdell Consulting Services',
	order: OrderEnum.ASC,
	field: PostObjectsConnectionOrderbyEnum.TITLE,
	first: 20,
	aboutName: 'About Us'
};

const LoadingSpinner = dynamic(() => import('@components/UI/LoadingDots'));

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

const LandingPageCoalesced = () => {
	const { loading, error, data } = useQuery<
		LandingCoalesced,
		LandingCoalescedVariables
	>(LANDING_COALESCED, {
		variables: LandingCoalescedQueryVars,
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
		<LandingPageWrapper>
			{data &&
			data.landingPage !== null &&
			data.landingPage.edges !== null &&
			data.landingPage.edges.length > 0 ? (
				data.landingPage.edges.map(edge => {
					return edge !== null && edge.node !== null ? (
						<LandingPageData
							content={edge.node.content}
							title={edge.node.title}
							featuredImage={edge.node.featuredImage}
							slug={edge.node.slug}
							key={edge.node.id}
							id={edge.node.id}
							__typename={edge.node.__typename}
						/>
					) : (
						<div>
							{error} post, post.node, post.node.featuredImage, and/or
							post.node.featuredImage.node returned null
						</div>
					);
				})
			) : (
				<aside>{`${error} landing page hero returned undefined`}</aside>
			)}

			{data &&
			data.clientTestimonials !== null &&
			data.clientTestimonials.edges !== null &&
			data.clientTestimonials.edges.length > 0 ? (
				<LandingTestimonialsWrapper>
					{data.clientTestimonials.edges.map(edge => {
						return edge !== null && edge.node !== null && edge.cursor !== null ? (
							<div className={cn(css['childContainer'], 'pt-20')} key={edge.cursor}>
								<LandingTestimonials
									key={edge.node.id}
									id={edge.node.id}
									__typename={edge.node.__typename}
									title={edge.node.title}
									slug={edge.node.slug}
									featuredImage={edge.node.featuredImage}
									content={edge.node.content}
									modified={edge.node.modified}
								/>
							</div>
						) : (
							<div>{error} landing page testimonials error</div>
						);
					})}
				</LandingTestimonialsWrapper>
			) : (
				<aside>{`${error} landing page testimonials returned undefined`}</aside>
			)}
		</LandingPageWrapper>
	);
};

export default LandingPageCoalesced;
