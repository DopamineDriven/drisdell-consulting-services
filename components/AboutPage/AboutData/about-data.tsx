import cn from 'classnames';
import css from './about-data.module.css';
import { AboutCardsData_abouts_edges_node as AboutDataGenerated } from '@lib/graphql/AboutCardsData/__generated__/AboutCardsData';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown/with-html';

interface AboutDataProps extends AboutDataGenerated {
	root?: string;
}

const AboutData: FC<AboutDataProps> = props => {
	const { root, featuredImage, title, slug } = props;
	const slugConditional = slug !== null ? slug : '#';
	const titleConditional = title !== null ? title : 'Title Null';
	const featuredImageConditional =
		featuredImage &&
		featuredImage.node !== null &&
		featuredImage.node.sourceUrl !== null
			? featuredImage.node.sourceUrl
			: '/error-bot.png';
	return (
		<div
			className={cn(
				root,
				'flex flex-col text-center rounded-lg shadow-lg overflow-hidden group-hover:bg-opacity-50'
			)}
		>
			<Link
				href={`about-us/${slugConditional}`}
				as={`about-us/${slugConditional}`}
				passHref
			>
				<a aria-label='anchor' className='' id={`#${slugConditional}`}>
					<Image
						src={featuredImageConditional}
						loading='eager'
						layout='responsive'
						objectFit='cover'
						quality={80}
						width={100}
						height={100}
						className={css.img}
						priority
					/>
				</a>
			</Link>
			<Link
				as={`about-us/${slugConditional}`}
				href={`about-us/${slugConditional}`}
				passHref
			>
				<a
					className={cn(
						'flex-1 flex flex-col justify-between transition-transform transform -translate-y-52 z-50 -mb-8',
						css.title
					)}
				>
					<ReactMarkdown
						children={titleConditional}
						allowDangerousHtml={true}
						className={cn(
							css.md,
							'text-2xl font-poppins font-semibold text-primary-9 hover:text-primary-8 z-50'
						)}
					/>
				</a>
			</Link>
		</div>
	);
};

export default AboutData;
