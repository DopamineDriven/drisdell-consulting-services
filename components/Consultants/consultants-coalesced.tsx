import {
	ConsultantsPage,
	ConsultantsPageVariables
} from '@lib/graphql/ConsultantsPage/__generated__/ConsultantsPage';
import ConsultantWrapper, { ConsultantLayout } from './Children';
import { WpParentPagesEnum } from '@_types/index';
import {
	OrderEnum,
	PostObjectsConnectionOrderbyEnum
} from '@_types/graphql-global-types';
import ApolloErrorMessage from '@components/ErrorMessage';
import { useQuery } from '@apollo/client';
import { CONSULTANTS_PAGE } from '@lib/graphql';

export const ConsultantsPageQueryVars: ConsultantsPageVariables = {
	name: WpParentPagesEnum.CONSULTANTS,
	order: OrderEnum.ASC,
	field: PostObjectsConnectionOrderbyEnum.SLUG
};

const ConsultantsPageCoalesced = () => {
	const { loading, error, data } = useQuery<
		ConsultantsPage,
		ConsultantsPageVariables
	>(CONSULTANTS_PAGE, {
		variables: ConsultantsPageQueryVars,
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
		<div>loading...</div>
	) : (
		<>
			<ConsultantWrapper>
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
								<ConsultantLayout
									title={page.node.title}
									children={page.node.children}
									content={page.node.content}
									featuredImage={page.node.featuredImage}
								/>
								{page.node.children.nodes != null &&
								page.node.children.nodes.length > 0 ? (
									page.node.children.nodes.map(page =>
										page != null && page.slug != null ? (
											<div
												className='flex-row w-full min-w-full text-sm text-accents-2'
												key={page.slug}
											>
												<p className=' max-w-sm'>{page.slug}</p>
											</div>
										) : (
											<div>no child page slugs returned...{error}</div>
										)
									)
								) : (
									<div>error on child page mapping...{error}</div>
								)}
							</div>
						) : (
							<div>an error occurred on Consultant Pages mapping...{error}</div>
						);
					})
				) : (
					<div>an error with consultants data occurred...{error}</div>
				)}
			</ConsultantWrapper>
		</>
	);
};

export default ConsultantsPageCoalesced;
