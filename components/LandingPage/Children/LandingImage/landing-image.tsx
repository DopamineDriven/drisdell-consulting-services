import { FC } from 'react';
import Image from 'next/image';
import { LandingPage_pages_edges_node_featuredImage as FeaturedImage } from '../../../../lib/graphql/Landing/__generated__/LandingPage';

export interface LandingPageProps {
	featuredImage: FeaturedImage;
}

const LandingImage: FC<LandingPageProps> = props => {
	const { featuredImage } = props;
	return featuredImage != null &&
		featuredImage.node != null &&
		featuredImage.node.sourceUrl != null ? (
		<div className='min-w-full w-screen -mx-portfolioPadding'>
			<Image
				src={`${featuredImage.node.sourceUrl}`}
				alt={'Picturesque Portland Lighthouse Landing Page'}
				aria-label='Picturesque Portland Lighthouse Landing Page'
				className={'block mx-auto align-middle content-center'}
				layout='responsive'
				width={250}
				height={125}
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

export default LandingImage;
