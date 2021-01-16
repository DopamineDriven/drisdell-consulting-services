import { FC, useEffect, useState, useCallback } from 'react';
import { validate } from 'email-validator';
import { Info } from '../Icons';
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
				<Logo width='15rem' height='10rem' />
			</div>
			<div className='flex flex-col space-y-4'>
				{message && <div className='text-red border border-red p-3'>{message}</div>}
				<Input placeholder='First Name' required={true} onChange={setFirstName} />
				<Input placeholder='Last Name' required={true} onChange={setLastName} />
				<Input
					type='email'
					required={true}
					placeholder='Email'
					onChange={setEmail}
				/>
				<Input
					type='password'
					placeholder='Password'
					onChange={setPassword}
					required={true}
					min={7}
				/>
				<Input type='password' placeholder='Retype password' min={7} />
				<span className='text-accents-8'>
					<span className='inline-block align-middle '>
						<Info width='15' height='15' />
					</span>{' '}
					<span className='leading-6 text-sm'>
						<strong>Info</strong>
						<ul>
							<li>- 7 characters long</li>
							<li>- include at least one number</li>
							<li>- include at least one special character</li>
						</ul>
					</span>
				</span>
				<div className='pt-2 w-full flex flex-col'>
					<Button variant='slim' type='submit' loading={loading} disabled={disabled}>
						Sign Up
					</Button>
				</div>

				<span className='pt-1 text-center text-sm'>
					<span className='text-accents-7'>Do you have an account?</span>
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
