import dynamic from 'next/dynamic';
import {
	AboutBySlug,
	AboutBySlugVariables
} from '@lib/graphql/AboutBySlug/__generated__/AboutBySlug';
import ABOUT_BY_SLUG from '@lib/graphql/AboutBySlug';
import { useQuery } from '@apollo/client';
import cn from 'classnames';
import { AboutIdType } from '@_types/graphql-global-types';
import { useRouter } from 'next/router';
import css from './about-posts.module.css';
import ReactMarkdown from 'react-markdown/with-html';
import Image, { ImageLoaderProps, ImageProps } from 'next/image';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const LoadingDots = dynamic(() => import('@components/UI/LoadingDots'));

const Loading = () => (
	<div className='w-80 h-80 flex items-center text-center justify-center p-3'>
		<LoadingDots />
	</div>
);

const dynamicProps = {
	loading: () => <Loading />
};

// const DynamicImage = dynamic(() => import('next/image'), dynamicProps);

const DynamicModified = dynamic(
	() => import('@components/UI/Modified'),
	dynamicProps
);

const ApolloErrorMessage = dynamic(
	() => import('@components/UI/ErrorMessage'),
	dynamicProps
);

const renderers = {
	image: (img: ImageLoaderProps & ImageProps) => {
		return (
			<Image
				src={img.src}
				alt={img.alt}
				height={img.height}
				width={img.width}
				quality={img.quality}
				loading={img.loading}
				objectFit={img.objectFit}
				priority={img.priority}
				layout={img.layout}
				objectPosition={img.objectPosition}
			/>
		);
	}
};

const { SLUG } = AboutIdType;

const AboutPosts = () => {
	const { query } = useRouter();
	const targetSlug = query.slug as string;
	const AboutBySlugQueryVars: AboutBySlugVariables = {
		idType: SLUG,
		id: targetSlug
	};
	const { data, loading, error } = useQuery<AboutBySlug, AboutBySlugVariables>(
		ABOUT_BY_SLUG,
		{
			variables: AboutBySlugQueryVars,
			notifyOnNetworkStatusChange: true
		}
	);
	const title =
		data && data.aboutPost !== null && data.aboutPost.title !== null
			? data.aboutPost.title
			: 'Title null';

	const content =
		data && data.aboutPost !== null && data.aboutPost.content !== null
			? data.aboutPost.content
			: 'Content null';

	const modified =
		data && data.aboutPost !== null && data.aboutPost.id !== null
			? data.aboutPost.modified
			: '';
	const featuredImage =
		data &&
		data.aboutPost !== null &&
		data.aboutPost.featuredImage !== null &&
		data.aboutPost.featuredImage.node !== null &&
		data.aboutPost.featuredImage.node.sourceUrl !== null
			? data.aboutPost.featuredImage.node.sourceUrl
			: '/error-bot.png';

	return error ? (
		<>
			<ApolloErrorMessage
				message={`${error.message}`}
				graphQLErrors={error.graphQLErrors}
				networkError={error.networkError}
				extraInfo={error.extraInfo}
				stack={error.stack}
				name={error.name}
			/>
		</>
	) : loading && !error ? (
		<Loading />
	) : (
		<>
			<article className='font-poppins mx-auto select-none'>
				<div className={cn(css.parentDiv)}>
					<ReactMarkdown
						allowDangerousHtml={false}
						className={cn(
							'text-primary-0 py-8 text-2xl sm:text-3xl md:text-5xl font-extrabold mx-auto text-center tracking-tight',
							css['parentDiv']
						)}
						children={title}
					/>
					<Image
						src={featuredImage}
						title={title}
						loading='eager'
						quality={80}
						width={800}
						height={400}
						layout='responsive'
						className='object-covershadow-lg max-w-7xl pb-2'
						priority
					/>
				</div>
				<div className='w-full min-w-full max-w-2xl px-5 md:px-2 md:max-w-4xl text-left sm:text-justify'>
					<DynamicModified
						modifiedString={modified}
						root='font-bold prose-xl max-w-2xl sm:max-w-3xl md:max-w-5xl lg:max-w-7xl sm:prose-2xl tracking-tight text-primary-0 text-left sm:text-justify content-center mx-auto flex'
					/>
					<ReactMarkdown
						allowDangerousHtml={true}
						className={cn(
							css['tableMd'],
							' pt-8 pb-16 prose-xl max-w-2xl sm:max-w-3xl md:max-w-5xl lg:max-w-6xl text-primary-0 text-left sm:text-justify content-center mx-auto flex-row'
						)}
						renderers={renderers}
						children={content}
					/>
				</div>
			</article>
		</>
	);
};

export default AboutPosts;
