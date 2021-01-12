import { FC } from 'react';
import { ConsultantsData_pages_edges_node as ConsultantsPageHeadlessProps } from '@lib/graphql/ConsultantsData/__generated__/ConsultantsData';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';
import css from './consultants-page-data.module.css';
import ReactMarkdown from 'react-markdown/with-html';

interface ConsultantsPageDataProps extends ConsultantsPageHeadlessProps {
	root?: string;
}

const ConsultantsPageData: FC<ConsultantsPageDataProps> = props => {
	const { root, featuredImage, title, slug, content } = props;
	const contentDynamic = content !== null ? content : 'content null';
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
				<div className={cn(css['root'], root)}>
					<Link href={slugDynamic} as='#' passHref>
						<a className='cursor-default'>
							<Image
								src={`${featuredImageDynamic}`}
								title='about-us'
								alt={'About Us'}
								aria-label='About Us'
								className={css['success']}
								layout='responsive'
								width={1500}
								height={650}
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
						'text-4xl tracking-tight font-extrabold text-primary-9 sm:text-5xl md:text-6xl lg:text-7xl transition-transform -translate-y-0 sm:-translate-y-16 md:-translate-y-24 transform'
					)}
				>
					<Link href={`${slugDynamic}`} as={`${slugDynamic}`} passHref>
						<a className={cn(css['a'])}>
							<ReactMarkdown
								children={titleDynamic}
								allowDangerousHtml={true}
								className={cn(css['successTitle'], css['title'])}
							/>
						</a>
					</Link>
				</h2>
				<h4>
					<ReactMarkdown
						children={contentDynamic}
						allowDangerousHtml={true}
						className={cn(css['content'])}
					/>
				</h4>
			</div>
		</>
	);
};

export default ConsultantsPageData;
