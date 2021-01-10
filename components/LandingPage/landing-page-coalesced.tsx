import { useQuery } from '@apollo/client';
import {
	LandingPage,
	LandingPageVariables
} from '@lib/graphql/LandingPage/__generated__/LandingPage';
import { LANDING_PAGE } from '@lib/graphql';
import LandingLayout, { LandingWrapper } from './Children';
import ApolloErrorMessage from '@components/UI/ErrorMessage';

export const LandingPageQueryVars: LandingPageVariables = {
	name: 'drisdell-consulting-services'
};

const LandingPageCoalesced = () => {
	const { loading, error, data } = useQuery<LandingPage, LandingPageVariables>(
		LANDING_PAGE,
		{
			variables: LandingPageQueryVars,
			notifyOnNetworkStatusChange: true
		}
	);
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
		<div>Loading...</div>
	) : (
		<LandingWrapper>
			{data != null &&
			data.pages != null &&
			data.pages.edges != null &&
			data.pages.edges.length > 0 ? (
				data.pages.edges.map((page, index: number) => {
					return page != null &&
						page.node != null &&
						page.node.featuredImage != null ? (
						<div
							className='block mx-auto col-span-2 font-poppins pb-14'
							key={index++}
						>
							<LandingLayout
								title={page.node.title}
								slug={page.node.slug}
								content={page.node.content}
								featuredImage={page.node.featuredImage}
							/>
						</div>
					) : (
						<div>page, page.node, or page.node.featuredImage !!null</div>
					);
				})
			) : (
				<aside>an error occurred...{typeof error}</aside>
			)}
		</LandingWrapper>
	);
};

export default LandingPageCoalesced;
