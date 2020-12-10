import { FC } from 'react';
import { LandingPage_pages_edges_node_featuredImage as FeaturedImage } from '@lib/graphql/LandingPage/__generated__/LandingPage';
import LandingContent from '../LandingContent';
import LandingTitleSlug from '../LandingTitleSlug';
import LandingImage from '../LandingImage';
import cn from 'classnames';
import css from './landing-layout.module.css';

interface LandingLayoutProps {
	featuredImage: FeaturedImage;
	slug: string | null;
	title: string | null;
	content: string | null;
	root?: string;
}

const ReviewLayout: FC<LandingLayoutProps> = props => {
	const { slug, title, featuredImage, content, root } = props;
	return (
		<>
			<div className={cn(css.root, root)}>
				<LandingImage featuredImage={featuredImage} />
				<div className={css.innerDiv}>
					<LandingTitleSlug title={title} slug={slug} />
					<LandingContent content={content} />
				</div>
			</div>
		</>
	);
};

export default ReviewLayout;
