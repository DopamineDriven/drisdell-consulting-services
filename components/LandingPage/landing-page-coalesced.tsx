import { useQuery } from '@apollo/client';
import {
	LandingPage,
	LandingPageVariables
} from '@lib/Queries/LandingPage/__generated__/LandingPage';
import { WpParentPagesEnum } from '@_types/index';
import LANDING_PAGE from '@lib/Queries';
import LandingLayout from './Children';

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
		<aside>Error Loading Posts...{error}</aside>
	) : loading && !error ? (
		<div>Loading...</div>
	) : (
		<section className='content-center justify-center block mx-auto -translate-y-portfolioPadding transform'>
			<div className='grid content-center justify-center grid-cols-2 mx-auto lg:grid-cols-2 gap-x-portfolio gap-y-portfolio'>
				{pages != null && pages.edges != null && pages.edges.length > 0 ? (
					pages.edges.map((page, index: number) => {
						return page != null &&
							page.node != null &&
							page.node.featuredImage != null ? (
							/* && page.node.featuredImage != null */
							<div
								className='block mx-auto col-span-2 font-poppins lg:pb-paddingBlogOdd pb-aboutOffsetPR'
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
		</section>
	);
};

export default LandingPageCoalesced;
