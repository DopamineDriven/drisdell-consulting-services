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
			<div className='grid md:grid-cols-2 grid-cols-1'>
				<ReactMarkdown
					className={css.content + `${''}`}
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
			<div className='select-none mx-auto content-center text-justify justify-between items-center  '>
				<ContentConditional />
			</div>
		</>
	);
};

export default LandingContent;
