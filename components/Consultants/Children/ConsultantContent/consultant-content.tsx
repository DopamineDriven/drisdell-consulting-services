import ReactMarkdown from 'react-markdown/with-html';
import { FC } from 'react';
import {
	Prism as SyntaxHighlighter,
	SyntaxHighlighterProps
} from 'react-syntax-highlighter';
import css from './about-content.module.css';
import cn from 'classnames';

interface ConsultantContentProps {
	content: string | null;
	classNameContent?: string;
	root?: string;
}

const CodeBlock = ({ language, value }: SyntaxHighlighterProps) => {
	return (
		<SyntaxHighlighter
			language={language}
			useInlineStyles={true}
			className={css.syntax}
		>
			{value}
		</SyntaxHighlighter>
	);
};

const ConsultantContent: FC<ConsultantContentProps> = props => {
	const { content, classNameContent, root } = props;

	const ContentConditional = () => {
		return content ? (
			<div className={css.div}>
				<ReactMarkdown
					className={cn(css.content, classNameContent)}
					escapeHtml={false}
					source={content}
					renderers={{ code: CodeBlock }}
				/>
			</div>
		) : (
			<ReactMarkdown
				className={classNameContent}
				escapeHtml={false}
				source={`content failed to load`}
				renderers={{ code: CodeBlock }}
			/>
		);
	};

	return (
		<>
			<div className={cn(css.root, root)}>
				<ContentConditional />
			</div>
		</>
	);
};

export default ConsultantContent;
