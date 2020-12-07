import Link from 'next/link';
import ReactMarkdown from 'react-markdown/with-html';
import { FC } from 'react';

export interface AboutTitleSlugProps {
	title: string | null;
	slug?: string | null;
}

export interface AboutTitleSlugFC extends FC<AboutTitleSlugProps> {}

const AboutTitleSlug: AboutTitleSlugFC = props => {
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
					className='text-center transition-all transform sm:text-left hover:text-tertiary text-2xl sm:text-3xl lg:text-5xl animate-hero '
				/>
			) : (
				<ReactMarkdown
					escapeHtml={false}
					source={'title null'}
					className='text-center text-accents-1 transition-all transform sm:text-left hover:text-accents-2 text-2xl sm:text-3xl lg:text-5xl animate-hero '
				/>
			)}
		</a>
	);

	return (
		<div className=' leading-loose my-3 w-auto font-bold font-poppins'>
			<Link as={`/${slug}`} href={`/${slug}`} passHref scroll={true}>
				{TitleConditional}
			</Link>
		</div>
	);
};

export default AboutTitleSlug;
