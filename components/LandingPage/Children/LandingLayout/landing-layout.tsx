import { FC, Fragment } from 'react';
import { LandingPage_pages_edges_node_featuredImage as FeaturedImage } from '@lib/graphql/LandingPage/__generated__/LandingPage';
import LandingContent from '../LandingContent';
import LandingTitleSlug from '../LandingTitleSlug';
import LandingImage from '../LandingImage';

interface LandingLayoutProps {
	featuredImage: FeaturedImage;
	slug: string | null;
	title: string | null;
	content: string | null;
}

const ReviewLayout: FC<LandingLayoutProps> = props => {
	const { slug, title, featuredImage, content } = props;
	return (
		<Fragment>
			<div className='min-w-full font-poppins'>
				<LandingImage featuredImage={featuredImage} />
				<LandingTitleSlug title={title} slug={slug} />
				<LandingContent content={content} />
			</div>
		</Fragment>
	);
};

export default ReviewLayout;
