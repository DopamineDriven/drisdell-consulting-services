import Link from 'next/link';
import ReactMarkdown from 'react-markdown/with-html';
import { FC } from 'react';
import cn from 'classnames';
import css from './consultant-title.module.css';

export interface AboutTitleSlugProps {
	title: string | null;
	slug?: string | null;
	root?: string;
}

const AboutTitleSlug: FC<AboutTitleSlugProps> = props => {
	const { title, slug, root } = props;

	const TitleConditional = (
		<a className={css.a} aria-label={`${title}`} id={`home-${title}`}>
			{title ? (
				<ReactMarkdown
					escapeHtml={false}
					source={title}
					className={cn(css.p, css.success)}
				/>
			) : (
				<ReactMarkdown
					escapeHtml={false}
					source={'title null'}
					className={css.error}
				/>
			)}
		</a>
	);

	return (
		<div className={cn(css.root, root)}>
			<Link as={`/${slug}`} href={`/${slug}`} passHref scroll={true}>
				{TitleConditional}
			</Link>
		</div>
	);
};

export default AboutTitleSlug;
