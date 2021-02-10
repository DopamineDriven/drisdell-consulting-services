import dynamic from 'next/dynamic';
import SKILLS_AND_POSITIONS from '@lib/graphql/SkillsAndPositions';
import { useQuery } from '@apollo/client';
import { ConsultantIdType } from '@lib/graphql-global-types';
import cn from 'classnames';
// import hydrate from 'next-mdx-remote/hydrate';
import css from './skills-and-positions.module.css';
import ReactMarkdown from 'react-markdown/with-html';
import Image from 'next/image';
import Link from 'next/link';
import PositionsWrapper from './PositionsWrapper';
import {
	SkillsAndPositions,
	SkillsAndPositionsVariables
} from '@lib/graphql/SkillsAndPositions/__generated__/SkillsAndPositions';
import PositionData from './PositionsData';

const LoadingSpinner = dynamic(() => import('@components/UI/LoadingSpinner'));

const Loading = () => (
	<div className='w-80 h-80 flex items-center text-center justify-center p-3'>
		<LoadingSpinner />
	</div>
);

const dynamicProps = {
	loading: () => <Loading />
};

const DynamicModified = dynamic(
	() => import('@components/UI/Modified'),
	dynamicProps
);

const ApolloErrorMessage = dynamic(
	() => import('@components/UI/ErrorMessage'),
	dynamicProps
);

export const SkillsAndPositionsPostVars: SkillsAndPositionsVariables = {
	idType: ConsultantIdType.SLUG,
	id: 'skills-and-positions'
};

const SkillsAndPositionsPost = () => {
	const { data, loading, error } = useQuery<
		SkillsAndPositions,
		SkillsAndPositionsVariables
	>(SKILLS_AND_POSITIONS, {
		variables: SkillsAndPositionsPostVars,
		notifyOnNetworkStatusChange: true
	});

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
			data.consultantSlug !== null &&
			data.consultantSlug.content !== null &&
			data.consultantSlug.featuredImage !== null &&
			data.consultantSlug.featuredImage.node !== null &&
			data.consultantSlug.featuredImage.node.sourceUrl !== null &&
			data.consultantSlug.modified !== null &&
			data.consultantSlug.slug !== null &&
			data.consultantSlug.title !== null ? (
				<article className='font-poppins mx-auto select-none'>
					<div className={cn(css.parentDiv)}>
						<ReactMarkdown
							allowDangerousHtml={true}
							className={cn(
								'text-primary-0 py-8 text-2xl sm:text-3xl md:text-5xl font-extrabold mx-auto text-center tracking-tight',
								css['parentDiv']
							)}
							children={data.consultantSlug.title}
						/>
						<Link
							href={data.consultantSlug.slug}
							as={`#${data.consultantSlug.slug}`}
							passHref
						>
							<a className=' cursor-default'>
								<Image
									src={data.consultantSlug.featuredImage.node.sourceUrl}
									title={data.consultantSlug.title}
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
							modifiedString={data.consultantSlug.modified}
							root='font-bold prose-xl max-w-2xl sm:max-w-3xl md:max-w-5xl lg:max-w-7xl sm:prose-2xl tracking-tight text-primary-0 text-left sm:text-justify content-center mx-auto flex'
						/>
						<ReactMarkdown
							allowDangerousHtml={true}
							className={cn(
								css['tableMd'],
								' pt-8 pb-8 prose-xl max-w-2xl sm:max-w-3xl md:max-w-5xl lg:max-w-6xl text-primary-0 text-left sm:text-justify content-center mx-auto flex-row'
							)}
							children={data.consultantSlug.content}
						/>
					</div>
				</article>
			) : (
				<div>{error} error returend in consultant posts</div>
			)}
			<PositionsWrapper>
				{data &&
				data.positionsPreview !== null &&
				data.positionsPreview.edges !== null &&
				data.positionsPreview.edges.length > 0 ? (
					data.positionsPreview.edges.map(edge => {
						return edge !== null &&
							edge.node !== null &&
							edge.node.positionDetails !== null &&
							edge.node.slug !== null ? (
							<PositionData
								key={edge.node.id}
								id={edge.node.id}
								slug={edge.node.slug}
								positionDetails={edge.node.positionDetails}
								__typename={edge.node.__typename}
							/>
						) : (
							<div>{error} error in inner-positions data</div>
						);
					})
				) : (
					<div>{error} in positions data</div>
				)}
			</PositionsWrapper>
		</>
	);
};

export default SkillsAndPositionsPost;
