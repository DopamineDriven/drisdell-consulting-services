import {
	ConsultantBySlug,
	ConsultantBySlugVariables
} from '@lib/graphql/ConsultantBySlug/__generated__/ConsultantBySlug';
import dynamic from 'next/dynamic';
import CONSULTANT_BY_SLUG from '@lib/graphql/ConsultantBySlug/consultant-by-slug';
import { useQuery } from '@apollo/client';
import { ConsultantIdType } from '@lib/graphql-global-types';
import { useRouter } from 'next/router';
import cn from 'classnames';
// import hydrate from 'next-mdx-remote/hydrate';
import css from './consultant-posts.module.css';
import ReactMarkdown from 'react-markdown/with-html';
import Image from 'next/image';
import Link from 'next/link';

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

const ConsultantPosts = () => {
	const { query } = useRouter();
	const consultantSlugTarget = query.slug as string;
	const ConsultantBySlugQueryVars: ConsultantBySlugVariables = {
		idType: ConsultantIdType.SLUG,
		id: consultantSlugTarget
	};
	const { data, loading, error } = useQuery<
		ConsultantBySlug,
		ConsultantBySlugVariables
	>(CONSULTANT_BY_SLUG, {
		variables: ConsultantBySlugQueryVars,
		notifyOnNetworkStatusChange: true
	});
	// const title =
	// 	data && data.consultantPost !== null && data.consultantPost.title !== null
	// 		? data.consultantPost.title
	// 		: 'Title null';

	// const content =
	// 	data && data.consultantPost !== null && data.consultantPost.content !== null
	// 		? data.consultantPost.content
	// 		: 'Content null';

	// const modified =
	// 	data && data.consultantPost !== null && data.consultantPost.id !== null
	// 		? data.consultantPost.modified
	// 		: '';

	// const featuredImage =
	// 	data &&
	// 	data.consultantPost !== null &&
	// 	data.consultantPost.featuredImage !== null &&
	// 	data.consultantPost.featuredImage.node !== null &&
	// 	data.consultantPost.featuredImage.node.sourceUrl !== null
	// 		? data.consultantPost.featuredImage.node.sourceUrl
	// 		: '/error-bot.png';

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
			{/* hydrate(data)*/}
			{data &&
			data &&
			data.consultantPost !== null &&
			data.consultantPost.content !== null &&
			data.consultantPost.featuredImage !== null &&
			data.consultantPost.featuredImage.node !== null &&
			data.consultantPost.featuredImage.node.sourceUrl !== null &&
			data.consultantPost.modified !== null &&
			data.consultantPost.slug !== null &&
			data.consultantPost.title !== null ? (
				<article className='font-poppins mx-auto select-none'>
					<div className={cn(css.parentDiv)}>
						<ReactMarkdown
							allowDangerousHtml={true}
							className={cn(
								'text-primary-0 py-8 text-2xl sm:text-3xl md:text-5xl font-extrabold mx-auto text-center tracking-tight',
								css['parentDiv']
							)}
							children={data.consultantPost.title}
						/>
						<Link
							href={data.consultantPost.slug}
							as={`#${data.consultantPost.slug}`}
							passHref
						>
							<a className=' cursor-default'>
								<Image
									src={data.consultantPost.featuredImage.node.sourceUrl}
									title={data.consultantPost.title}
									quality={80}
									width={800}
									height={400}
									layout='responsive'
									className='object-covershadow-lg max-w-7xl pb-2'
									priority
								/>
							</a>
						</Link>
					</div>
					<div className='w-full min-w-full max-w-2xl px-5 md:px-2 md:max-w-4xl text-left sm:text-justify'>
						<DynamicModified
							modifiedString={data.consultantPost.modified}
							root='font-bold prose-xl max-w-2xl sm:max-w-3xl md:max-w-5xl lg:max-w-7xl sm:prose-2xl tracking-tight text-primary-0 text-left sm:text-justify content-center mx-auto flex'
						/>
						<ReactMarkdown
							allowDangerousHtml={true}
							className={cn(
								css['tableMd'],
								' pt-8 pb-16 prose-xl max-w-2xl sm:max-w-3xl md:max-w-5xl lg:max-w-6xl text-primary-0 text-left sm:text-justify content-center mx-auto flex-row'
							)}
							children={data.consultantPost.content}
						/>
					</div>
				</article>
			) : (
				<div>{error} error returend in consultant posts</div>
			)}
		</>
	);
};

export default ConsultantPosts;
