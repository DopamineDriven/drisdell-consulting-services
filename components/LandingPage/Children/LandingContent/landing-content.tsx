import ReactMarkdown from 'react-markdown/with-html';
import { FC } from 'react';
import {
	Prism as SyntaxHighlighter,
	SyntaxHighlighterProps
} from 'react-syntax-highlighter';
import css from './landing-content.module.css';

interface PostBodyProps {
	content: string | null;
	classNameContent?: string;
}

const CodeBlock = ({ language, value }: SyntaxHighlighterProps) => {
	return (
		<SyntaxHighlighter
			language={language}
			useInlineStyles={true}
			className=' text-shadow-none'
		>
			{value}
			{/* {children.replace(/^\s+|\s+$/g, '')} */}
		</SyntaxHighlighter>
	);
};

interface PostBodyPropsFC extends FC<PostBodyProps> {}

const LandingContent: PostBodyPropsFC = props => {
	const { content, classNameContent } = props;

	const ContentConditional = () => {
		return content ? (
			<div className=''>
				<ReactMarkdown
					className={css.content + `${' min-h-reviewCardHeight'}`}
					escapeHtml={false}
					source={content}
					renderers={{ code: CodeBlock }}
				/>
			</div>
		) : (
			<ReactMarkdown
				className={`${classNameContent}`}
				escapeHtml={false}
				source={`content failed to load`}
				renderers={{ code: CodeBlock }}
			/>
		);
	};

	return (
		<>
			<div className='text-shadow-none shadow-none select-none mx-auto content-center text-left md:text-left md:text-customP items-center justify-center align-middle max-w-xsCardGridCima min-h-paddingAboutTitleRight h-paddingAboutTitleRight  '>
				<ContentConditional />
			</div>
		</>
	);
};

export default LandingContent;
