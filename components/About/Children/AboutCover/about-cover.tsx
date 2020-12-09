import { FC } from 'react';
import Image from 'next/image';
import { AboutPage_pages_edges_node_featuredImage as FeaturedImage } from '@lib/graphql/AboutPage/__generated__/AboutPage';

export interface LandingPageProps {
	featuredImage: FeaturedImage;
}

const AboutCover: FC<LandingPageProps> = props => {
	const { featuredImage } = props;
	return featuredImage != null &&
		featuredImage.node != null &&
		featuredImage.node.sourceUrl != null ? (
		<div className='min-w-full w-screen -mx-portfolioPadding bg-fixed'>
			<Image
				src={`${featuredImage.node.sourceUrl}`}
				title='About Us'
				alt={'About Us'}
				aria-label='About Us'
				className={'block mx-auto align-middle content-center opacity-80'}
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
				className={'block mx-auto align-middle content-center'}
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
