import { FC, useEffect, useState, useCallback } from 'react';
import { validate } from 'email-validator';
import { useUI } from '@components/context';
import { Button, Input, Logo } from '@components/UI';

interface Props {}

const SignUpView: FC<Props> = () => {
	// Form State
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');
	const [dirty, setDirty] = useState(false);
	const [disabled, setDisabled] = useState(false);

	const { setModalView, closeModal } = useUI();

	const handleSignup = async (e: React.SyntheticEvent<EventTarget>) => {
		e.preventDefault();

		if (!dirty && !disabled) {
			setDirty(true);
			handleValidation();
		}

		try {
			setLoading(true);
			setMessage('');
			//---------------------
			// add code for making request to sign-up user here
			//--------------------
			console.log(firstName, lastName);
			setLoading(false);
			closeModal();
		} catch ({ errors }) {
			setMessage(errors[0].message);
			setLoading(false);
		}
	};

	const handleValidation = useCallback(() => {
		// Test for Alphanumeric password
		const validPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password);

		// Unable to send form unless fields are valid.
		if (dirty) {
			setDisabled(!validate(email) || password.length < 7 || !validPassword);
		}
	}, [email, password, dirty]);

	useEffect(() => {
		handleValidation();
	}, [handleValidation]);

	return (
		<form
			onSubmit={handleSignup}
			className='w-80 flex flex-col justify-between p-3'
		>
			<div className='flex justify-center pb-4 '>
				<Logo className='h-40 w-40' />
			</div>
			<div className='flex flex-col space-y-4'>
				{message && (
					<div className='text-red-700 border border-red-800 p-3'>{message}</div>
				)}
				<Input
					placeholder='First Name'
					required={true}
					onChange={setFirstName}
					className='bg-primary-9 text-primary-0 font-medium focus:outline-none rounded-md'
				/>
				<Input
					placeholder='Last Name'
					required={true}
					onChange={setLastName}
					className='bg-primary-9 text-primary-0 font-medium focus:outline-none rounded-md'
				/>
				<Input
					type='email'
					required={true}
					placeholder='Email'
					onChange={setEmail}
					className='bg-primary-9 text-primary-0 font-medium focus:outline-none rounded-md'
				/>
				<Input
					type='password'
					placeholder='Password'
					onChange={setPassword}
					required={true}
					min={7}
					className='bg-primary-9 text-primary-0 font-medium focus:outline-none rounded-md'
				/>
				<Input
					type='password'
					placeholder='Retype password'
					min={7}
					className='bg-primary-9 text-primary-0 font-medium focus:outline-none rounded-md'
				/>
				{/* <span className='text-primary-9'>
					<span className='inline-block align-middle '>
						<Info width='15' height='15' />
					</span>{' '}
					<span className='leading-6 text-sm'>
						<strong>Info</strong>
						<ul>
							<li>Minimum 7 characters in length</li>
							<li>Minimum 1 number included</li>
							<li>Minumum 1 special character</li>
						</ul>
					</span>
				</span> */}
				<div className='pt-2 w-auto px-8 flex flex-col'>
					<Button
						variant='slim'
						type='submit'
						loading={loading}
						disabled={disabled}
						className='w-auto max-w-sm bg-primary-7 text-primary-0 hover:bg-primary-9 rounded-md duration-150 transition-colors'
					>
						Sign Up
					</Button>
				</div>

				<span className='pt-1 text-center text-sm'>
					<span className='text-accents-7'>Already have an account?</span>
					{` `}
					<a
						className='text-accent-9 font-bold hover:underline cursor-pointer'
						onClick={() => setModalView('LOGIN_VIEW')}
					>
						Log In
					</a>
				</span>
			</div>
		</form>
	);
};

export default SignUpView;
