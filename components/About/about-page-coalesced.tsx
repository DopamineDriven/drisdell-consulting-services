import { useQuery } from '@apollo/client';
import { WpParentPagesEnum } from '@_types/index';
import AboutLayout from './Children';
import ApolloErrorMessage from '@components/ErrorMessage';
import {
	AboutPage,
	AboutPageVariables
} from '@lib/graphql/AboutPage/__generated__/AboutPage';
import { ABOUT_PAGE } from '@lib/graphql';
import {
	OrderEnum,
	PostObjectsConnectionOrderbyEnum
} from '@_types/graphql-global-types';

export const AboutPageQueryVars: AboutPageVariables = {
	name: WpParentPagesEnum.ABOUT_US,
	order: OrderEnum.ASC,
	field: PostObjectsConnectionOrderbyEnum.SLUG
};

const AboutPageCoalesced = () => {
	const { loading, error, data } = useQuery<AboutPage, AboutPageVariables>(
		ABOUT_PAGE,
		{
			variables: AboutPageQueryVars,
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
		<div>Loading...</div>
	) : (
		<section className='items-center content-center justify-center block min-w-full w-screen mx-auto'>
			<div className='content-center justify-center block mx-auto  transform'>
				<div className='content-center justify-center mx-auto gap-x-12 gap-y-12 w-full'>
					{data != null &&
					data.pages != null &&
					data.pages.edges != null &&
					data.pages.edges.length > 0 ? (
						data.pages.edges.map(page => {
							return page != null &&
								page.node != null &&
								page.node.featuredImage != null &&
								page.node.children != null ? (
								<div
									className='block mx-auto font-poppins w-full max-w-cardGrid'
									key={page.node.__typename}
								>
									<AboutLayout
										title={page.node.title}
										children={page.node.children}
										content={page.node.content}
										featuredImage={page.node.featuredImage}
									/>
									{page.node.children.nodes != null &&
									page.node.children.nodes.length > 0 ? (
										page.node.children.nodes.map(page =>
											page != null && page.slug != null ? (
												<div className='flex-row w-full min-w-full text-xs text-accents-2'>
													<p className=' max-w-xs'>{page.slug}</p>
												</div>
											) : (
												<div>no child page slugs</div>
											)
										)
									) : (
										<div>error on child pages mapping</div>
									)}
								</div>
							) : (
								<div>error on about page mapping</div>
							);
						})
					) : (
						<div>an error occurred...{error}</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default AboutPageCoalesced;
