import { FC, Fragment } from 'react';
import { LandingPage_pages_edges_node_featuredImage as FeaturedImage } from '../../../../lib/graphql/Landing/__generated__/LandingPage';
import LandingContent from '../LandingContent/landing-content';
import LandingTitleSlug from '../LandingTitleSlug/landing-title-slug';
import LandingImage from '../LandingImage/landing-image';

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
			<div className='min-w-full -translate-y-portfolio -my-5 transform font-poppins text-black'>
				<LandingImage featuredImage={featuredImage} />
				<LandingTitleSlug title={title} slug={slug} />
				<LandingContent content={content} />
			</div>
		</Fragment>
	);
};

export default ReviewLayout;
