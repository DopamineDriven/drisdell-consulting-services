import cn from 'classnames';
import { Container } from '@components/UI';
import TestimonialsData from './TestimonialsData';
import TestimonialsWrapper from './TestimonialsWrapper';
import dynamic from 'next/dynamic';
import { ALL_TESTIMONIALS } from '@lib/graphql';
import { useQuery } from '@apollo/client';
import {
	PostObjectsConnectionOrderbyEnum,
	OrderEnum
} from '@lib/graphql-global-types';
import {
	AllTestimonials,
	AllTestimonialsVariables
} from '@lib/graphql/AllTestimonials/__generated__/AllTestimonials';
import css from './testimonials-coalesced.module.css';
import KeenSlider from '../KeenSlider';

export const TestimonialsQueryVars: AllTestimonialsVariables = {
	first: 30,
	order: OrderEnum.ASC,
	field: PostObjectsConnectionOrderbyEnum.TITLE
};

const LoadingSpinner = dynamic(() => import('@components/UI/LoadingSpinner'));

const Loading = () => (
	<div className={css.loading}>
		<LoadingSpinner />
	</div>
);

const dynamicProps = {
	loading: () => <Loading />
};

const ApolloErrorMessage = dynamic(
	() => import('@components/UI/ErrorMessage'),
	dynamicProps
);

const TestimonialsCoalesced = () => {
	const { loading, error, data } = useQuery<
		AllTestimonials,
		AllTestimonialsVariables
	>(ALL_TESTIMONIALS, {
		variables: TestimonialsQueryVars,
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
		<Container className={cn(css.uiContainer)} clean>
			{data &&
			data.testimonials !== null &&
			data.testimonials.edges !== null &&
			data.testimonials.edges.length > 0 ? (
				<TestimonialsWrapper root={css.sliderContainer}>
					<KeenSlider>
						{data.testimonials.edges.map((edge, index) => {
							return edge !== null && edge.cursor !== null && edge.node !== null ? (
								<div className={css.childContainer} key={index++}>
									<TestimonialsData
										key={edge.node.id}
										id={edge.node.id}
										__typename={edge.node.__typename}
										title={edge.node.title}
										slug={edge.node.slug}
										featuredImage={edge.node.featuredImage}
										content={edge.node.content}
										modified={edge.node.modified}
									/>
								</div>
							) : (
								<div>{error}</div>
							);
						})}
					</KeenSlider>
				</TestimonialsWrapper>
			) : (
				<div>{error}</div>
			)}
		</Container>
	);
};

export default TestimonialsCoalesced;
