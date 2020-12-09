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
			className='block text-left text-accent-1 hover:text-accents-0 transition-all duration-500 transform animate-hero'
			aria-label={`portfolio item title - ${title}`}
			id={`home-${title}`}
		>
			{title ? (
				<ReactMarkdown
					escapeHtml={false}
					source={title}
					className={cn(
						css.p,
						'transition-all transform text-left text-2xl sm:text-3xl lg:text-6xl '
					)}
				/>
			) : (
				<ReactMarkdown
					escapeHtml={false}
					source={'title null'}
					className='text-center transition-all transform sm:text-left hover:text-accents-2 text-2xl sm:text-3xl lg:text-5xl animate-hero '
				/>
			)}
		</a>
	);

	return (
		<div className=' leading-loose my-3 w-auto font-bold font-poppins text-white transform'>
			<Link as={`/${slug}`} href={`/${slug}`} passHref scroll={true}>
				{TitleConditional}
			</Link>
		</div>
	);
};

export default LandingTitleSlug;
