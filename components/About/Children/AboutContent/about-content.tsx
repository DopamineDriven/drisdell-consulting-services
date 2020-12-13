import ReactMarkdown from 'react-markdown/with-html';
import { FC } from 'react';
import {
	Prism as SyntaxHighlighter,
	SyntaxHighlighterProps
} from 'react-syntax-highlighter';
import css from './about-content.module.css';
import cn from 'classnames';

const CodeBlock: FC<SyntaxHighlighterProps> = props => {
	const { language = 'typescript', children } = props;
	return (
		<SyntaxHighlighter
			language={language}
			useInlineStyles={true}
			className={css.syntax}
		>
			{children}
			{/* {children.replace(/^\s+|\s+$/g, '')} */}
		</SyntaxHighlighter>
	);
};

interface PostBodyProps {
	content: string | null;
	classNameContent?: string;
	classNameRoot?: string;
}

const AboutContent: FC<PostBodyProps> = props => {
	const { content, classNameContent, classNameRoot } = props;

	const ContentConditional = content ? (
		<div className={css.divSuccess}>
			<ReactMarkdown
				className={cn(css.content, classNameContent, ' ')}
				escapeHtml={false}
				source={content}
				renderers={{ code: CodeBlock }}
			/>
		</div>
	) : (
		<ReactMarkdown
			className={css.error}
			escapeHtml={false}
			source={`about content failed to render or is null`}
			renderers={{ code: CodeBlock }}
		/>
	);

	return (
		<>
			<div className={cn(css.divRoot, classNameRoot, ' ')}>
				{ContentConditional}
			</div>
		</>
	);
};

export default AboutContent;
