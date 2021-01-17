import { FC, useEffect, useState, useCallback } from 'react';
import { Button, Input, Logo } from '@components/UI';
import { useUI } from '@components/context';

// import { validate } from 'email-validator';
//
// import LOGIN from '../../lib/mutations/Login/login';

interface Props {}

const UserLogin: FC<Props> = () => {
	// Form State
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');
	const [dirty, setDirty] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const { setModalView, closeModal } = useUI();

	// const [login, { loading: LoginLoading, error: LoginError }] = useMutation<
	// 	LoginUserVariables & LoginInput,
	// 	LoginUser
	// >(LOGIN, {
	// 	onCompleted(data: LoginUserVariables) {
	// 		localStorage.setItem('username', data.input.username);
	// 	}
	// });

	const handleLogin = async (e: React.SyntheticEvent<EventTarget>) => {
		e.preventDefault();

		if (!dirty && !disabled) {
			setDirty(true);
			handleValidation();
		}

		try {
			setLoading(true);
			setMessage('');
			// await LOGIN();
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
			setDisabled(
				!username || username.length < 3 || password.length < 7 || !validPassword
			);
		}
	}, [username, password, dirty]);

	useEffect(() => {
		handleValidation();
	}, [handleValidation]);
	/* LoginError ? (
		<aside>Error Loading Landing Page Content...{LoginError}</aside>
	) : LoginLoading && !LoginError ? (
		<div>Loading...</div>
	) : */ return (
		<form
			onSubmit={handleLogin}
			className='max-w-6xl flex flex-col justify-between p-3'
		>
			<div className='flex justify-center pb-4 '>
				<Logo className='h-40 w-40' />
			</div>
			<div className={`flex flex-col space-y-3`}>
				{message && (
					<div className='text-red border border-red p-3'>
						{message}. Did you {` `}
						<a
							className='text-accent-9 inline font-bold hover:underline cursor-pointer'
							onClick={() => setModalView('FORGOT_VIEW')}
						>
							forgot your password?
						</a>
					</div>
				)}
				<Input
					type='email'
					placeholder={`Username`}
					onChange={setUsername}
					className='bg-primary-9 text-primary-0 font-medium focus:outline-none rounded-md'
				/>
				<Input
					type='password'
					placeholder='Password'
					onChange={setPassword}
					min={7}
					className='bg-primary-9 text-primary-0 font-medium focus:outline-none rounded-md'
				/>
				<div className='pt-2 w-auto px-8 flex flex-col max-w-sm'>
					<Button
						variant='slim'
						type='submit'
						loading={loading}
						disabled={disabled}
						className='w-auto max-w-xs bg-primary-7 text-primary-0 hover:bg-primary-9 rounded-md duration-150 transition-colors px-6'
					>
						Log In
					</Button>
				</div>
				<div className='pt-1 text-center text-sm'>
					<span className='text-primary-9'>Don't have an account yet?</span>
					{` `}
					<a
						className='text-primary-9 font-bold hover:underline cursor-pointer'
						onClick={() => setModalView('SIGNUP_VIEW')}
					>
						Sign Up
					</a>
				</div>
			</div>
		</form>
	);
};

export default UserLogin;
