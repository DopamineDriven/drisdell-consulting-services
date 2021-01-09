import {
	useRef,
	FC,
	RefObject,
	InputHTMLAttributes,
	TextareaHTMLAttributes,
	Fragment,
	useState,
	SyntheticEvent
} from 'react';
import { useTextField } from '@react-aria/textfield';
import { AriaTextFieldProps } from '@react-types/textfield';
import css from './textField.module.css';
import EmailValidator from 'email-validator';
// import { TextField } from '@adobe/react-spectrum';

interface textFieldProps extends AriaTextFieldProps {
	className?: string;
	elementType?: 'input' | 'textarea';
	label?: string;
	placeholder?: string;
	isRequired?: boolean;
	requiredLabel?: 'label' | 'icon';
	rows?: number;
	cols?: number;
}

export const checkValidity = () => {};

const Textfield: FC<textFieldProps> = props => {
	const [errorMessage, setErrorMessage] = useState('');

	let { label } = props;

	let ref = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

	let { labelProps, inputProps } = useTextField(props, ref);

	const handleValidation = (
		e: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		console.log('in validate: ', e.currentTarget.value, e.currentTarget.name);
		const elementValue = e.currentTarget.value;
		const elementName = e.currentTarget.name;

		let newErrorMessage: string;

		if (elementValue === '' && inputProps['aria-required'] === true) {
			newErrorMessage = `${label} is required.`;
		} else if (
			inputProps.maxLength &&
			elementValue.length >= inputProps.maxLength
		) {
			newErrorMessage = `${label} can not be longer than ${inputProps.maxLength}`;
		} else if (
			inputProps.minLength &&
			elementValue.length < inputProps.minLength
		) {
			newErrorMessage = `${label} has to be at least ${inputProps.minLength} characters long`;
		} else if (elementName === 'email') {
			newErrorMessage = EmailValidator.validate(elementValue)
				? ''
				: 'Must enter a valid emal address';
			console.log('in email: ', newErrorMessage);
		} else {
			newErrorMessage = '';
		}

		setErrorMessage(newErrorMessage);
	};

	// type check functions
	function isTextarea(
		parameterProps:
			| InputHTMLAttributes<HTMLInputElement>
			| TextareaHTMLAttributes<HTMLTextAreaElement>,
		props: textFieldProps
	): parameterProps is TextareaHTMLAttributes<HTMLTextAreaElement> {
		return parameterProps && props.elementType === 'textarea';
	}

	function refIsTextArea(
		parameterRef: RefObject<HTMLInputElement | HTMLTextAreaElement>
	): parameterRef is RefObject<HTMLTextAreaElement> {
		return (
			(parameterRef as RefObject<HTMLTextAreaElement>).current?.cols !== null
		);
	}

	const returnedElement1 =
		isTextarea(inputProps, props) && refIsTextArea(ref) ? (
			<div className={`${css.textAreaDiv}`}>
				<label {...labelProps}>{label}:</label>
				<textarea
					{...inputProps}
					onChange={handleValidation}
					ref={ref}
					rows={props.rows}
					cols={props.cols}
				/>
				<span id={inputProps['aria-errormessage']}>{errorMessage}</span>
			</div>
		) : (
			<div className={`${css.inputDiv}`}>
				<label {...labelProps}>{label}:</label>
				<input
					className={`${errorMessage ? 'border-2 border-red-500' : ''}`}
					{...(inputProps as InputHTMLAttributes<HTMLInputElement>)}
					onChange={handleValidation}
					ref={ref as RefObject<HTMLInputElement>}
				/>
				<span className={css.errorMessage} id={inputProps['aria-errormessage']}>
					{errorMessage}
				</span>
			</div>
		);

	return <Fragment>{returnedElement1}</Fragment>;
};

export default Textfield;
