import cn from 'classnames';
// import hydrate from 'next-mdx-remote/hydrate';
import ReactMarkdown from 'react-markdown/with-html';
import Image from 'next/image';
import css from './about-post-data.module.css';
import { AboutBySlug_aboutPost } from '@lib/graphql/AboutBySlug/__generated__/AboutBySlug';
import { FC } from 'react';
import { Media } from '@lib/artsy-fresnel';
import { useAudio } from 'react-use';
/**
 * @USE_AUDIO_HOOK
 */
// https://github.com/streamich/react-use/blob/38ea7779dcc3c862eb79439561e4c11ef98dc9d9/docs/useAudio.md
interface AboutSubTemplateProps extends AboutBySlug_aboutPost {
	root?: string;
}
const AboutPostData: FC<AboutSubTemplateProps> = ({
	root,
	featuredImage,
	polly,
	title,
	children,
	content
}) => {
	const featuredImageConditional =
		featuredImage !== null &&
		featuredImage.node !== null &&
		featuredImage.node.sourceUrl !== null
			? featuredImage.node.sourceUrl
			: '/doggo.jpg';
	const contentConditional = content !== null ? content : 'content null';
	const pollyConditional =
		polly !== null && polly.audio !== null ? polly.audio : '';
	const Polly = () => {
		const [audio, state, controls, ref] = useAudio({
			src: `${pollyConditional}`,
			autoPlay: true
		});
		return (
			<div>
				{audio && ref?.current}
				<pre>{JSON.stringify(state, null, 2)}</pre>
				<button onClick={controls.pause}>Pause</button>
				<button onClick={controls.play}>Play</button>
				<br />
				<button onClick={controls.mute}>Mute</button>
				<button onClick={controls.unmute}>Unmute</button>
				<br />
				<button onClick={() => controls.volume(0.1)}>Volume 10%</button>
				<button onClick={() => controls.volume(0.25)}>Volume 25%</button>
				<button onClick={() => controls.volume(0.5)}>Volume 50%</button>
				<button onClick={() => controls.volume(0.75)}>Volume 75%</button>
				<button onClick={() => controls.volume(1)}>Volume 100%</button>
				<br />
				<button></button>
				<button onClick={() => controls.seek(state.time - 5)}>-5 sec</button>
				<button onClick={() => controls.seek(state.time + 5)}>+5 sec</button>
			</div>
		);
	};
	console.log(pollyConditional);
	const titleConditional = title !== null ? title : 'title null';
	return (
		<>
			<div className={cn(root, 'bg-primary-9 overflow-hidden select-none')}>
				<div className='relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
					<Media lessThan='lg'>
						{' '}
						<ReactMarkdown
							allowDangerousHtml={true}
							children={titleConditional}
							className={cn('text-4xl font-medium', css['tableMd'])}
						/>
					</Media>
					<div className='hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen'></div>
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
									<div className='aspect-w-12 aspect-h-7 pb-2'>
										<Image
											className='rounded-lg shadow-lg object-cover object-center'
											src={featuredImageConditional}
											alt='Whitney leaning against a railing on a downtown street'
											width={1184}
											height={1376}
										/>
									</div>
									<figcaption className='lg:mt-3 flex text-sm text-gray-500'>
										<svg
											className='flex-none w-5 h-5 text-gray-400'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 20 20'
											fill='currentColor'
											aria-hidden='true'
										>
											<path
												fillRule='evenodd'
												d='M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z'
												clipRule='evenodd'
											/>
										</svg>
										<span className='ml-2'>Photograph via Unsplash</span>
									</figcaption>
								</figure>
							</div>
						</div>
						<div className='lg:mt-0'>
							<div className='text-base max-w-prose mx-auto lg:max-w-none'></div>
							<Media greaterThanOrEqual='lg'>
								{' '}
								<ReactMarkdown
									allowDangerousHtml={true}
									children={titleConditional}
									className={cn('text-4xl font-medium', css['tableMd'])}
								/>
							</Media>
							<div className='mt-5 prose  prose-indigo text-gray-600 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1'>
								<audio>
									<Polly />
								</audio>

								<ReactMarkdown
									allowDangerousHtml={true}
									children={contentConditional}
									className={cn('', css['tableMd'])}
								/>
							</div>
							{children}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutPostData;
