import { FC } from 'react';
import cn from 'classnames';
import css from './consultant-layout.module.css';
import { ConsultantsPage_pages_edges_node_featuredImage as FeaturedImage } from '@lib/graphql/ConsultantsPage/__generated__/ConsultantsPage';
import {
	ConsultantContent,
	ConsultantCover,
	ConsultantTitle
} from '@components/Consultants/Children';

interface AboutLayoutProps {
	featuredImage: FeaturedImage;
	slug?: string | null;
	title: string | null;
	content: string | null;
	root?: string;
}

const AboutLayout: FC<AboutLayoutProps> = props => {
	const { slug, title, featuredImage, content, root } = props;

	return (
		<>
			<div className={cn(css.root, root)}>
				<ConsultantCover featuredImage={featuredImage} />
				<div className={css.innerDiv}>
					<ConsultantTitle title={title} slug={slug} />
					<ConsultantContent content={content} />
				</div>
			</div>
		</>
	);
};

export default AboutLayout;
