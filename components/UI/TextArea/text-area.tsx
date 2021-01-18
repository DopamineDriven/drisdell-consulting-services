import cn from 'classnames';
import css from './text-area.module.css';
import React, {
	TextareaHTMLAttributes,
	useState,
	ChangeEvent,
	FC
} from 'react';

export interface TextareaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	className?: string;
	onChange: (...args: any[]) => any;
}
const Textarea: FC<TextareaProps> = ({
	className,
	children,
	onChange,
	...rest
}) => {
	const [textAreaValue, setTextAreaValue] = useState<string>('');
	const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
		setTextAreaValue(e.target.value);
	};

	return (
		<label>
			<textarea
				rows={5}
				value={textAreaValue}
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
