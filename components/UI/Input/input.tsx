import cn from 'classnames';
import css from './input.module.css';
import React, { InputHTMLAttributes } from 'react';
// import { MutableRefObject } from 'react';

// type T = {
// 	current: T;
// };
export interface Props extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	onChange?: (...args: any[]) => any;
	// ref: MutableRefObject<T>;
}

const Input: React.FC<Props> = props => {
	const { className, children, onChange, ...rest } = props;

	const rootClassName = cn(css.root, {}, className);

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			onChange(e.target.value);
		}
		return null;
	};

	return (
		<label>
			<input
				className={rootClassName}
				onChange={handleOnChange}
				autoComplete='off'
				autoCorrect='off'
				autoCapitalize='off'
				spellCheck='false'
				{...rest}
			/>
		</label>
	);
};

export default Input;
