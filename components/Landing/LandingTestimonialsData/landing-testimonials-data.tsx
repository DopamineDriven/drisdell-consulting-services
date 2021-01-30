import cn from 'classnames';
import { FC } from 'react';
import { LandingCoalesced_clientTestimonials_edges_node as TestimonialsChildren } from '@lib/graphql/LandingCoalesced/__generated__/LandingCoalesced';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown/with-html';

interface LandingPageTestimonialProps extends TestimonialsChildren {
	root?: string;
}

const LandingTestimonials: FC<LandingPageTestimonialProps> = props => {
	const { root, title, content, featuredImage } = props;
	const contentConditional = content !== null ? content : 'content null';
	const titleConditional = title !== null ? title : 'title null';
	const featuredImageConditional =
		featuredImage &&
		featuredImage.node !== null &&
		featuredImage.node.sourceUrl !== null
			? featuredImage.node.sourceUrl
			: '/error-bot.png';
	return (
		<div className={cn(root, 'bg-primary-0 pt-16 lg:py-24')}>
			<div className='pb-16 bg-primary-0 lg:pb-0 lg:z-10 lg:relative'>
				<div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8'>
					<div className={cn('relative lg:-my-8')}>
						<div
							aria-hidden={true}
							className='absolute inset-x-0 top-0 h-1/4 bg-primary-0 lg:hidden'
						/>
						<div className='mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full'>
							<div className='aspect-w-17 aspect-h-4 rounded-xl lg:shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg-h-full'>
								<Image
									src={featuredImageConditional}
									layout='responsive'
									quality={75}
									width={100}
									height={100}
									className='object-cover lg:h-full lg:w-full'
									priority
								/>
							</div>
						</div>
					</div>
					<div className='mt-12 lg:m-0 lg:col-span-2 lg:pl-8'>
						<div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none'>
							<div>
								<svg
									className='h-12 w-12 text-primary-9 opacity-25'
									fill='currentColor'
									viewBox='0 0 32 32'
									aria-hidden='true'
								>
									<path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
								</svg>
								<p className='mt-6 text-2xl font-medium text-primary-9 clamp-7'>
									<ReactMarkdown
										children={contentConditional}
										allowDangerousHtml={true}
									/>
								</p>
							</div>
							<footer className='mt-6 '>
								<p className='text-base font-medium text-primary-9 '>
									<ReactMarkdown allowDangerousHtml={true} children={titleConditional} />
								</p>
							</footer>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingTestimonials;
