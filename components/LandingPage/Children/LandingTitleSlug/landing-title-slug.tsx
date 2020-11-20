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
			className='block font-semibold text-left transition-all duration-1000 transform animate-hero font-head hover:text-tertiary translate-y-portfolioDivider'
			aria-label={`portfolio item title - ${title}`}
			id={`home-${title}`}
		>
			{title ? (
				<ReactMarkdown
					escapeHtml={false}
					source={title}
					className='text-center text-fiveOBlack transition-all transform sm:text-left hover:text-tertiary text-customTitleMobile sm:text-customTitle lg:text-customS animate-hero '
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
		<div className=' my-6 w-auto font-bold leading-tight text-customCardTitle pl-portfolioDivider h-paddingPostTitleTop sm:h-paddingPostTitleBottom font-somaDisplay'>
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
