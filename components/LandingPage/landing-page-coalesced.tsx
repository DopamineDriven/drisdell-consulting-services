import { useQuery } from '@apollo/client';
import {
	LandingPage,
	LandingPageVariables
} from '@lib/graphql/LandingPage/__generated__/LandingPage';
import { WpParentPagesEnum } from '@_types/index';
import { LANDING_PAGE } from '@lib/graphql';
import LandingLayout from './Children';
import ApolloErrorMessage from '@components/ErrorMessage';

export const LandingPageQueryVars: LandingPageVariables = {
	name: WpParentPagesEnum.HOME
};

const LandingPageCoalesced = () => {
	const { loading, error, data } = useQuery(LANDING_PAGE, {
		variables: LandingPageQueryVars,
		notifyOnNetworkStatusChange: true
	});

	const { pages }: LandingPage = data ?? '';
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
		<section className='container items-center content-center justify-center block max-w-full mx-auto pb-10'>
			<div className='content-center justify-center block mx-auto  transform'>
				<div className='grid content-center justify-center grid-cols-2 mx-auto lg:grid-cols-2 gap-x-10 gap-y-10'>
					{pages != null && pages.edges != null && pages.edges.length > 0 ? (
						pages.edges.map((page, index: number) => {
							return page != null &&
								page.node != null &&
								page.node.featuredImage != null ? (
								<div
									className='block mx-auto col-span-2 font-poppins lg:pb-paddingBlogOdd pb-aboutOffsetPR  max-w-cardGrid'
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
						<aside>an error occurred...{error}</aside>
					)}
				</div>
			</div>
		</section>
	);
};

export default LandingPageCoalesced;
