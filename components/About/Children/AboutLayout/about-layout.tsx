import { FC, Fragment } from 'react';
import { AboutPage_pages_edges_node_featuredImage as FeaturedImage } from '@lib/graphql/AboutPage/__generated__/AboutPage';
import AboutContent from '../AboutContent';
import AboutCover from '../AboutCover';
import AboutTitleSlug from '../AboutTitleSlug';

interface AboutLayoutProps {
	featuredImage: FeaturedImage;
	slug?: string | null;
	title: string | null;
	content: string | null;
}

const AboutLayout: FC<AboutLayoutProps> = props => {
	const { slug, title, featuredImage, content } = props;

	return (
		<Fragment>
			<div className='min-w-full font-poppins'>
				<AboutCover featuredImage={featuredImage} />
				<div className='transform transition-transform -translate-y-12'>
					<AboutTitleSlug title={title} slug={slug} />
					<AboutContent content={content} />
				</div>
			</div>
		</Fragment>
	);
};

export default AboutLayout;
