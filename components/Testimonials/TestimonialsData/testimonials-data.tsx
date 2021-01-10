import { FC } from 'react';
import cn from 'classnames';
import { AllTestimonials_testimonials_edges_node as TestimonialsChildren } from '@lib/graphql/AllTestimonials/__generated__/AllTestimonials';
// import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown/with-html';
import css from './testimonials-data.module.css';

interface TestimonialsDataProps extends TestimonialsChildren {
	root?: string;
}

const TestimonialsData: FC<TestimonialsDataProps> = props => {
	const { root, content, featuredImage } = props;
	// const slugConditional = slug !== null ? slug : '#';
	const contentConditional = content !== null ? content : 'content null';
	// const titleConditional = title !== null ? title : 'title null';
	const featuredImageConditional =
		featuredImage &&
		featuredImage.node !== null &&
		featuredImage.node.sourceUrl !== null
			? featuredImage.node.sourceUrl
			: '/error-bot.png';
	return (
		<div className={cn(root, ' align-middle my-auto font-poppins flex-row')}>
			{/* <Link href={`testimonials/${slugConditional}`} passHref>
				<a aria-label='anchor' className='' id='prosites'>
					<h2
						className='mx-auto align-middle text-4xl text-center text-primary-0 hover:text-primary-2'
						dangerouslySetInnerHTML={{ __html: titleConditional }}
					/>
				</a>
			</Link> */}
			<div className='relative'>
				<div className='mx-auto align-middle h-full min-h-full my-auto'>
					<blockquote className={cn(css.prose, 'prose mx-auto')}>
						<div className='max-w-xl sm:max-w-3xl mx-auto text-justify leading-9 font-medium text-primary-0'>
							<ReactMarkdown
								children={contentConditional}
								allowDangerousHtml={true}
								className={cn(css.content)}
							/>
						</div>
						<footer className='mt-8'>
							<div className='md:flex md:items-center md:justify-center'>
								<div className='md:flex-shrink h-20 w-20 mx-auto'>
									<Image
										src={featuredImageConditional}
										loading='eager'
										layout='responsive'
										quality={75}
										width={100}
										height={100}
										className='mx-auto block h-10 w-10 rounded-full z-50'
									/>
								</div>
								{/* <div className='mt-2 text-center md:mt-0 md:ml-4 md:flex md:items-center'>
									<div className=''>
										<ReactMarkdown
											children={titleConditional}
											allowDangerousHtml={true}
											className={css.title}
										/>
									</div>
									<svg
										className='hidden md:block mx-1 h-5 w-5 text-primary-0'
										fill='currentColor'
										viewBox='0 0 20 20'
									>
										<path d='M11 0h3L9 20H6l5-20z' />
									</svg>
									<div className=''>
										<ReactMarkdown
											children={excerptConditional}
											allowDangerousHtml={true}
											className={css.title}
										/>
									</div>
								</div> */}
							</div>
						</footer>
					</blockquote>
				</div>
			</div>
		</div>
	);
};

export default TestimonialsData;
