import {
	useCheckboxGroupState,
	CheckboxGroupState
} from '@react-stately/checkbox';
import { useCheckboxGroup } from '@react-aria/checkbox';
import { CheckboxGroupProps } from '@react-types/checkbox';
// import { CheckboxGroupProps } from "@react-types/checkbox";
import { createContext } from 'react';

interface CheckboxProps extends CheckboxGroupProps {
	children: React.ReactNode;
	label?: string;
}

const initialState = {
	value: [''],
	isDisabled: false,
	isReadOnly: false,
	// @ts-ignore
	isSelected: (value = '') => {
		return false;
	},
	// @ts-ignore
	setValue: (value = ['']) => {},
	// @ts-ignore
	addValue: (value = '') => {},
	// @ts-ignore
	removeValue: (value = '') => {},
	// @ts-ignore
	toggleValue: (value = '') => {}
};

export let CheckboxGroupContext = createContext<CheckboxGroupState>(
	initialState
);

const CheckboxGroup = (props: CheckboxProps) => {
	let { children, label } = props;
	let state: CheckboxGroupState = useCheckboxGroupState(props);
	let { groupProps, labelProps } = useCheckboxGroup(props, state);

	console.log('state: ', state.value.values());
	return (
		<div {...groupProps} className='text-center'>
			<span {...labelProps} className='text-white'>
				{label}
			</span>
			<CheckboxGroupContext.Provider value={state}>
				<div className={'flex flex-wrap justify-center'}>{children}</div>
				<span
					{...labelProps}
					className={`${state.value.length == 0 ? 'text-red-400' : 'invisible'}`}
				>
					Please check at least one option above.
				</span>
			</CheckboxGroupContext.Provider>
		</div>
	);
};

export default CheckboxGroup;
