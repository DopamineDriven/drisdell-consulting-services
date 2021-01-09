import { FC } from 'react';
import Image from 'next/image';
import { LandingPage_pages_edges_node_featuredImage as FeaturedImage } from '@lib/graphql/LandingPage/__generated__/LandingPage';
import cn from 'classnames';
import css from './landing-image.module.css';
import Link from 'next/link';

export interface LandingPageProps {
	featuredImage: FeaturedImage;
}

const LandingImage: FC<LandingPageProps> = props => {
	const { featuredImage } = props;
	return featuredImage != null &&
		featuredImage.node != null &&
		featuredImage.node.sourceUrl != null ? (
		<div className='min-w-full w-screen'>
			<Link href='#' as='/' passHref>
				<a aria-label='anchor' className='cursor-auto' id='landing'>
					<Image
						src={`${featuredImage.node.sourceUrl}`}
						title='Picturesque Lighthouse Landing Page'
						alt='Picturesque Lighthouse Landing Page'
						aria-label='Picturesque Lighthouse Landing Page'
						className={cn(
							css.image,
							'block mx-auto align-middle content-center bg-primary-0 '
						)}
						layout='responsive'
						width={2000}
						height={650}
						objectFit='cover'
						loading='eager'
						quality={75}
						priority
					/>
				</a>
			</Link>
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
				loading='eager'
				quality={100}
			/>
		</div>
	);
};

export default LandingImage;
