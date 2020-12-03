import Link from 'next/link';
import ReactMarkdown from 'react-markdown/with-html';
import { FC } from 'react';

export interface LandingTitleSlugProps {
	title: string | null;
	slug: string | null;
}

export interface LandingTitleSlugFC extends FC<LandingTitleSlugProps> {}

const LandingTitleSlug: LandingTitleSlugFC = props => {
	const { title, slug } = props;

	const TitleConditional = (
		<a
			className='block text-left text-accents-1 hover:text-accents-0 transition-all duration-500 transform animate-hero'
			aria-label={`portfolio item title - ${title}`}
			id={`home-${title}`}
		>
			{title ? (
				<ReactMarkdown
					escapeHtml={false}
					source={title}
					className='text-center transition-all transform sm:text-left hover:text-tertiary text-customTitleMobile sm:text-customTitle lg:text-customS animate-hero '
				/>
			) : (
				<ReactMarkdown
					escapeHtml={false}
					source={'title null'}
					className='text-center text-fiveOBlack transition-all transform sm:text-left hover:text-tertiary text-customTitleMobile sm:text-customTitle lg:text-customS animate-hero '
				/>
			)}
		</a>
	);

	return (
		<div className=' leading-loose my-3 w-auto font-bold h-paddingPostTitleTop sm:h-paddingPostTitleBottom font-somaDisplay'>
			<Link
				as={`/service/${slug}`}
				href={`/service/${slug}`}
				passHref
				scroll={true}
			>
				{TitleConditional}
			</Link>
		</div>
	);
};

export default LandingTitleSlug;
