import cn from 'classnames';
import ReactMarkdown from 'react-markdown/with-html';
import Link from 'next/link';
import { AboutCardsData_pages_edges_node as CoverTitle } from '@lib/graphql/AboutCardsData/__generated__/AboutCardsData';
import { FC } from 'react';
import css from './about-title-slug-dynamic.module.css';

interface AboutTitleSlugDynamicProps extends CoverTitle {
	root?: string;
}

const AboutTitleSLugDynamic: FC<AboutTitleSlugDynamicProps> = props => {
	const { title, slug, root } = props;
	const slugDynamic = slug !== null ? slug : '#';
	const titleDynamic =
		title !== null ? title : 'About Drisdell Consulting Services';
	return (
		<h2
			className={cn(
				root,
				'text-6xl tracking-tight font-extrabold text-primary-0 sm:text-4xl'
			)}
		>
			<Link href={`${slugDynamic}`} as={`${slugDynamic}`} passHref>
				<a className={cn(css.a)}>
					<ReactMarkdown
						children={titleDynamic}
						allowDangerousHtml={true}
						className={cn(css.success, css.p)}
					/>
				</a>
			</Link>
		</h2>
	);
};

export default AboutTitleSLugDynamic;
