import cn from 'classnames';
// import hydrate from 'next-mdx-remote/hydrate';
import ReactMarkdown from 'react-markdown/with-html';
import Image from 'next/image';

import { PositionBySlug_positionBySlug } from '@lib/graphql/PositionBySlug/__generated__/PositionBySlug';
import { FC } from 'react';

interface AboutSubTemplateProps extends PositionBySlug_positionBySlug {
	root?: string;
}

const PositionPosts: FC<AboutSubTemplateProps> = ({
	root,
	title,
	excerpt,
	featuredImage,
	children,
	slug,
	content
}) => {
	const featuredImageConditional =
		featuredImage !== null &&
		featuredImage.node !== null &&
		featuredImage.node.sourceUrl !== null
			? featuredImage.node.sourceUrl
			: '/doggo.jpg';
	const positionExcerpt = excerpt !== null ? excerpt : 'excerpt null';
	// const occupationConditional =
	// 	positionDetails !== null ? positionDetails : 'positionDetails Null';
	const titleConditional = title !== null ? title : 'title null';
	const contentConditional = content !== null ? content : 'content null';
	const slugConditional = slug !== null ? slug : 'slug null';
	console.log(slugConditional);
	return (
		<>
			<div className={cn(root, 'bg-primary-9 overflow-hidden')}>
				<div className='relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
					<div className='hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen'></div>
					<div className='mx-auto text-base max-w-prose lg:max-w-none'>
						<h2 className='text-base text-indigo-600 font-semibold tracking-wide uppercase'>
							<ReactMarkdown allowDangerousHtml={true} children={positionExcerpt} />
						</h2>
						<h3 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
							<ReactMarkdown allowDangerousHtml={true} children={titleConditional} />
						</h3>
					</div>
					<div className='mt-8 lg:grid lg:grid-cols-2 lg:gap-8'>
						<div className='relative lg:row-start-1 lg:col-start-2'>
							<svg
								className='hidden lg:block absolute top-0 right-0 -mt-20 -mr-20'
								width='404'
								height='384'
								fill='none'
								viewBox='0 0 404 384'
								aria-hidden='true'
							>
								<defs>
									<pattern
										id='de316486-4a29-4312-bdfc-fbce2132a2c1'
										x='0'
										y='0'
										width='20'
										height='20'
										patternUnits='userSpaceOnUse'
									>
										<rect
											x='0'
											y='0'
											width='4'
											height='4'
											className='text-gray-200'
											fill='currentColor'
										/>
									</pattern>
								</defs>
								<rect
									width='404'
									height='384'
									fill='url(#de316486-4a29-4312-bdfc-fbce2132a2c1)'
								/>
							</svg>
							<div className='relative text-base mx-auto max-w-prose lg:max-w-none'>
								<figure>
									<div className='aspect-w-12 aspect-h-7 lg:aspect-none'>
										<Image
											className='rounded-lg shadow-lg object-cover object-center'
											src={featuredImageConditional}
											alt='Whitney leaning against a railing on a downtown street'
											width={1184}
											height={1376}
										/>
									</div>
									<figcaption className='mt-3 flex text-sm text-gray-500'>
										<svg
											className='flex-none w-5 h-5 text-gray-400'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 20 20'
											fill='currentColor'
											aria-hidden='true'
										>
											<path
												fill-rule='evenodd'
												d='M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z'
												clip-rule='evenodd'
											/>
										</svg>
										<span className='ml-2'>Photograph by Mary Drisdell</span>
									</figcaption>
								</figure>
							</div>
						</div>
						<div className='mt-8 lg:mt-0'>
							<div className='text-base max-w-prose mx-auto lg:max-w-none'>
								<p className='text-lg text-gray-500'>
									Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna
									sed consectetur neque tristique pellentesque. Blandit amet, sed aenean
									erat arcu morbi.
								</p>
							</div>
							<div className='mt-5 prose prose-indigo text-gray-600 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1'>
								<ReactMarkdown
									allowDangerousHtml={true}
									children={contentConditional}
								/>
								<h3>Additional Info</h3>
								<p>
									Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur
									pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim
									id lobortis amet. Laoreet sem est phasellus eu proin massa, lectus.
									Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.
								</p>
								<p>
									Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna
									sed consectetur neque tristique pellentesque. Blandit amet, sed aenean
									erat arcu morbi.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{children}
		</>
	);
};

export default PositionPosts;