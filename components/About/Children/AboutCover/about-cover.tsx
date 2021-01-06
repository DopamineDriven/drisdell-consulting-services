import { FC } from 'react';
import Image from 'next/image';
import { AboutPage_pages_edges_node_featuredImage as FeaturedImage } from '@lib/graphql/AboutPage/__generated__/AboutPage';
import css from './about-cover.module.css';
import cn from 'classnames';
export interface AboutPageProps {
	featuredImage: FeaturedImage;
	root?: string;
}

const AboutCover: FC<AboutPageProps> = props => {
	const { featuredImage, root } = props;
	return featuredImage != null &&
		featuredImage.node != null &&
		featuredImage.node.sourceUrl != null ? (
		<div className={cn(css.root, root)}>
			<Image
				src={`${featuredImage.node.sourceUrl}`}
				title='About Us'
				alt={'About Us'}
				aria-label='About Us'
				className={css.success}
				layout='responsive'
				width={2000}
				height={500}
				objectFit='cover'
				loading='eager'
				quality={100}
			/>
		</div>
	) : (
		<div>
			<Image
				src={'/error-bot.png'}
				alt={'error bot'}
				aria-label='error bot'
				className={css.error}
				layout='fixed'
				width={250}
				height={250}
				loading='lazy'
				quality={100}
			/>
		</div>
	);
};

export default AboutCover;
