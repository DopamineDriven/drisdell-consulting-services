import Link from 'next/link';
import ReactMarkdown from 'react-markdown/with-html';
import { FC } from 'react';
import cn from 'classnames';
import css from './about-title-slug.module.css';

export interface AboutTitleSlugProps {
	title: string | null;
	slug?: string | null;
}

export interface AboutTitleSlugFC extends FC<AboutTitleSlugProps> {}

const AboutTitleSlug: AboutTitleSlugFC = props => {
	const { title, slug } = props;

	const TitleConditional = (
		<a
			className='block text-left z-50 transition-all duration-500 transform animate-hero'
			aria-label={`portfolio item title - ${title}`}
			id={`home-${title}`}
		>
			{title ? (
				<ReactMarkdown
					escapeHtml={false}
					source={title}
					className={cn(
						css.p,
						'transition-all transform text-left text-2xl sm:text-3xl lg:text-6xl animate-hero text-white'
					)}
				/>
			) : (
				<ReactMarkdown
					escapeHtml={false}
					source={'title null'}
					className='text-center transition-all transform sm:text-left text-2xl sm:text-3xl lg:text-5xl animate-hero '
				/>
			)}
		</a>
	);

	return (
		<div className=' leading-loose my-3 w-auto '>
			<Link as={`/${slug}`} href={`/${slug}`} passHref scroll={true}>
				{TitleConditional}
			</Link>
		</div>
	);
};

export default AboutTitleSlug;
