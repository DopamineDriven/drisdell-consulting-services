import cn from 'classnames';
import { Button, Input, Logo } from '@components/UI';
import { useState, FC, useCallback, useEffect } from 'react';
import { useUI } from '@components/context';
import { validate } from 'email-validator';

interface Props {
	className?: string;
}

const Email: FC<Props> = props => {
	const [email, setEmail] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');
	const [dirty, setDirty] = useState(false);
	const [content, setContent] = useState('');
	const { setModalView, closeModal } = useUI();
	const [disabled, setDisabled] = useState(false);

	const handleEmail = async (e: React.SyntheticEvent<EventTarget>) => {
		e.preventDefault();

		if (!dirty && !disabled) {
			setDirty(true);
			handleValidation();
		}
		try {
			setLoading(true);
			setMessage('');
			console.log(firstName, lastName, content);
			setLoading(false);
			closeModal();
		} catch ({ errors }) {
			setMessage(errors[0].message);
			setLoading(false);
		}
	};
	const handleValidation = useCallback(() => {
		if (dirty) {
			setDisabled(!validate(email) || email.length < 10);
		}
	}, [email, dirty]);

	useEffect(() => {
		handleValidation();
	}, [handleValidation]);

	const { className } = props;

	return (
		<form
			onSubmit={handleEmail}
			className={cn('w-100 flex flex-col justify-between', className)}
		>
			<div className='flex justify-center pb-4 '>
				<Logo className='h-40 w-40' />
			</div>
			<div className='relative max-w-xl mx-auto'>
				<svg
					className='absolute left-full transform translate-x-1/2'
					width='404'
					height='404'
					fill='none'
					viewBox='0 0 404 404'
					aria-hidden='true'
				>
					<defs>
						<pattern
							id='85737c0e-0916-41d7-917f-596dc7edfa27'
							x='0'
							y='0'
							width='20'
							height='20'
							patternUnits='userSpaceOnUse'
						>
							<rect
								x='0'
								y='0'
								width='4'
								height='4'
								className='text-primary-0'
								fill='currentColor'
							/>
						</pattern>
					</defs>
					<rect
						width='404'
						height='404'
						fill='url(#85737c0e-0916-41d7-917f-596dc7edfa27)'
					/>
				</svg>
				<svg
					className='absolute right-full bottom-0 transform -translate-x-1/2'
					width='404'
					height='404'
					fill='none'
					viewBox='0 0 404 404'
					aria-hidden='true'
				>
					<defs>
						<pattern
							id='85737c0e-0916-41d7-917f-596dc7edfa27'
							x='0'
							y='0'
							width='20'
							height='20'
							patternUnits='userSpaceOnUse'
						>
							<rect
								x='0'
								y='0'
								width='4'
								height='4'
								className='text-primary-0'
								fill='currentColor'
							/>
						</pattern>
					</defs>
					<rect
						width='404'
						height='404'
						fill='url(#85737c0e-0916-41d7-917f-596dc7edfa27)'
					/>
				</svg>
				<div className='text-center'>
					<h2 className='text-3xl font-extrabold tracking-tight text-primary-9 sm:text-4xl py-5'>
						Contact Us Today
					</h2>
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
						type='content'
						placeholder='Content'
						onChange={setContent}
						required={true}
						min={10}
						className='block align-top h-40 bg-primary-9 text-primary-0 font-medium text-sm focus:outline-none rounded-md'
					>
						<div className='mt-1'>
							<textarea
								id='message'
								name='message'
								rows={4}
								className='py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
							></textarea>
						</div>
					</Input>
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
							Send Email
						</Button>
					</div>
					<span className='pt-1 text-center text-sm'>
						<span className='text-accents-7'>Have an account?</span>
						{` `}
						<a
							className='text-accent-9 font-bold hover:underline cursor-pointer'
							onClick={() => setModalView('LOGIN_VIEW')}
						>
							Log In
						</a>
					</span>
				</div>
			</div>
		</form>
	);
};

export default Email;
