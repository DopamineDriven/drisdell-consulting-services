import cn from 'classnames';
import css from './text-area.module.css';
import React, { TextareaHTMLAttributes, ChangeEvent, FC } from 'react';

export interface TextareaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	className?: string;
	onChange?: (...args: any[]) => any;
}
const Textarea: FC<TextareaProps> = ({
	className,
	children,
	onChange,
	...rest
}) => {
	const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		if (onChange) {
			onChange(e.target.value);
		}
		return null;
	};

	return (
		<label>
			<textarea
				rows={5}
				className={cn(className, css.root)}
				onChange={handleOnChange}
				autoCorrect='off'
				autoCapitalize='off'
				spellCheck='false'
				{...rest}
			/>
		</label>
	);
};

export default Textarea;

export function TextAreaSimplified({ ...props }) {
	return <textarea className={css.root} {...props} />;
}
