import {
	useRef,
	FC,
	RefObject,
	InputHTMLAttributes,
	TextareaHTMLAttributes,
	Fragment
} from 'react';
import { useTextField } from '@react-aria/textfield';
import css from './textField.module.css';

interface textFieldProps {
	className?: string;
	elementType?: 'input' | 'textarea';
	label?: string;
	placeholder?: string;
	isRequired?: boolean;
	requiredLabel?: 'label' | 'icon';
	rows?: number;
	cols?: number;
}

const TextField: FC<textFieldProps> = props => {
	let { className, label } = props;
	let ref = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

	let { labelProps, inputProps } = useTextField(props, ref);

	// type check functions
	function isTextarea(
		parameterProps:
			| InputHTMLAttributes<HTMLInputElement>
			| TextareaHTMLAttributes<HTMLTextAreaElement>,
		props: textFieldProps
	): parameterProps is TextareaHTMLAttributes<HTMLTextAreaElement> {
		console.log(
			'enetered text area type check: ',
			parameterProps as TextareaHTMLAttributes<HTMLTextAreaElement>,
			(parameterProps as TextareaHTMLAttributes<HTMLTextAreaElement>).cols
		);
		return props.elementType === 'textarea';
	}

	function refIsTextArea(
		parameterRef: RefObject<HTMLInputElement | HTMLTextAreaElement>
	): parameterRef is RefObject<HTMLTextAreaElement> {
		console.log('enetered ref type check: ', parameterRef);
		return (
			(parameterRef as RefObject<HTMLTextAreaElement>).current?.cols !== null
		);
	}

	console.log(isTextarea(inputProps, props), refIsTextArea(ref));
	console.log('input props: ', inputProps);

	const returnedElement =
		isTextarea(inputProps, props) && refIsTextArea(ref) ? (
			<div className={`${className} ${css.textAreaDiv}`}>
				<label {...labelProps}>{label} </label>
				<textarea
					{...inputProps}
					className={css.textArea}
					ref={ref}
					rows={props.rows}
					cols={props.cols}
				/>
			</div>
		) : (
			<div className={` ${className} ${css.inputDiv}`}>
				<label {...labelProps} className={css.inputLabel}>
					{label}
				</label>
				<input
					className={css.input}
					{...(inputProps as InputHTMLAttributes<HTMLInputElement>)}
					ref={ref as RefObject<HTMLInputElement>}
				/>
			</div>
		);

	return <Fragment>{returnedElement}</Fragment>;
};

export default TextField;
