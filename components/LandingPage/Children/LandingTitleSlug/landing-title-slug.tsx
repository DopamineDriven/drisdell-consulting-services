import Link from 'next/link';
import ReactMarkdown from 'react-markdown/with-html';
import { FC } from 'react';
import cn from 'classnames';
import css from './landing-title-slug.module.css';

export interface LandingTitleSlugProps {
	title: string | null;
	slug: string | null;
}

export interface LandingTitleSlugFC extends FC<LandingTitleSlugProps> {}

const LandingTitleSlug: LandingTitleSlugFC = props => {
	const { title, slug } = props;

	const TitleConditional = (
		<a
			className={cn(
				'block text-left text-accent-1 transition-all transform animate-hero '
			)}
			aria-label={`portfolio item title - ${title}`}
			id={`home-${title}`}
		>
			{title ? (
				<ReactMarkdown
					escapeHtml={false}
					source={title}
					className={cn(
						css.title,
						'transition-all transform relative text-left text-2xl sm:text-3xl md:text-6xl lg:text-6xl  xl:text-7xl 2xl:text-8xl'
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
		<div className=' leading-loose w-auto font-poppins text-white transform transition-transform -translate-y-36 sm:-translate-y-48 md:-translate-y-64 lg:-translate-y-82 xl:-translate-y-100 2xl:-translate-y-150'>
			<Link as={`/${slug}`} href={`/${slug}`} passHref scroll={true}>
				{TitleConditional}
			</Link>
		</div>
	);
};

export default LandingTitleSlug;
