import { FC } from 'react';
import { AboutCardsData_pages_edges_node as CoverTitle } from '@lib/graphql/AboutCardsData/__generated__/AboutCardsData';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';
import css from './about-page-layout.module.css';
import ReactMarkdown from 'react-markdown/with-html';

interface AboutLayoutProps extends CoverTitle {
	root?: string;
}

const AboutPageLayout: FC<AboutLayoutProps> = props => {
	const { root, featuredImage, title, slug } = props;
	const slugDynamic = slug !== null ? slug : '#';
	const titleDynamic =
		title !== null ? title : 'About Drisdell Consulting Services';
	const featuredImageDynamic =
		featuredImage !== null &&
		featuredImage.node !== null &&
		featuredImage.node.sourceUrl !== null
			? featuredImage.node.sourceUrl
			: '/lighthouse.webp';
	return (
		<>
			<div className='min-w-full font-poppins'>
				<div className={cn(css.root, root)}>
					<Link href={slugDynamic} as='#' passHref>
						<a className='cursor-default'>
							<Image
								src={`${featuredImageDynamic}`}
								title='about-us'
								alt={'About Us'}
								aria-label='About Us'
								className={css.success}
								layout='responsive'
								width={1500}
								height={500}
								objectFit='cover'
								loading='eager'
								quality={75}
								priority
							/>
						</a>
					</Link>
				</div>
				<h2
					className={cn(
						'text-4xl tracking-tight font-extrabold text-primary-9 sm:text-5xl md:text-6xl lg:text-7xl transition-transform -translate-y-24 transform'
					)}
				>
					<Link href={`${slugDynamic}`} as={`${slugDynamic}`} passHref>
						<a className={cn(css.a)}>
							<ReactMarkdown
								children={titleDynamic}
								allowDangerousHtml={true}
								className={cn(css.successTitle, css.title)}
							/>
						</a>
					</Link>
				</h2>
			</div>
		</>
	);
};

export default AboutPageLayout;
