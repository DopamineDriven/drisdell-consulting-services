import { useContext, useRef } from 'react';
import { useCheckboxGroupItem } from '@react-aria/checkbox';
import { CheckboxProps } from '@react-types/checkbox';
import { CheckboxGroupContext } from '../checkboxgroup';

interface Checkbox extends CheckboxProps {
	children: React.ReactNode;
}

const Checkbox = (props: Checkbox) => {
	let { children } = props;
	let state = useContext(CheckboxGroupContext);

	let ref = useRef<HTMLInputElement>(null);
	let { inputProps } = useCheckboxGroupItem(props, state, ref);

	const checkboxValue = props.value ? props.value : '';

	let isDisabled = state.isDisabled || props.isDisabled;
	// let isSelected = state.isSelected(checkboxValue);

	return (
		<label className={`text-white ${isDisabled ? 'bg-gray-500' : ''} p-2 `}>
			<input
				{...inputProps}
				ref={ref}
				className={'p-2 mr-2'}
				value={checkboxValue}
			/>
			{children}
		</label>
	);
};

export default Checkbox;
