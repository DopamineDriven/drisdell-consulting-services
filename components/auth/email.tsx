import cn from 'classnames';
import { Button, Input, Textarea, Logo } from '@components/UI';
import { useState, FC, useCallback, useEffect, useRef } from 'react';
import { useUI } from '@components/context';
import { validate } from 'email-validator';
import fetch from 'isomorphic-unfetch';
import { parseISO, format } from 'date-fns';
const approvedeEmail = process.env.MAILGUN_APPROVED_RECIPIENT ?? '';
const defaultSenderDomain = process.env.MAILGUN_DOMAIN ?? '';
// const baseDomain = process.env.MAILGUN_DOMAIN ?? '';

interface Props {
	className?: string;
}

const Email: FC<Props> = props => {
	const [email, setEmail] = useState('');
	const [fullName, setFullName] = useState('');
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');
	const [dirty, setDirty] = useState(false);
	const [content, setContent] = useState('');
	const { setModalView, closeModal } = useUI();
	const [disabled, setDisabled] = useState(false);
	const contentEntry = useRef<string | null>(null);
	const emailEntry = useRef<string | null>(null);
	const nameEntry = useRef<string | null>(null);

	const handleEmail = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formattedTimeStamp = parseISO(format(Date.now(), 'LLLL	d, yyyy'));

		const MailGun = await fetch('api/mailgun', {
			body: JSON.stringify({
				to: `${approvedeEmail}`,
				from: `${nameEntry.current?.valueOf()} at ${emailEntry.current?.valueOf()} <mailgun@${defaultSenderDomain}>`,
				subject: `Sent via Mailgun -- ${emailEntry.current?.valueOf()} reached out on ${formattedTimeStamp}!`,
				text: `-from: ${email} \n ${formattedTimeStamp} \n ${contentEntry.current?.valueOf()}`
			}),
			headers: {
				'Content-Type': 'application/json; charset=UTF-8'
			},
			method: 'POST'
		});
		const { error } = await MailGun.json();
		if (error) {
			setMessage(error);
			return;
		}
		if (
			emailEntry.current?.valueOf() !== null &&
			!error &&
			nameEntry.current?.valueOf() !== null &&
			!error &&
			contentEntry.current?.valueOf() !== null &&
			!error
		) {
			setMessage('Success! 🎉 Your email was delivered!' + `${message}`);
			return;
		}
		const data = {
			to: `${approvedeEmail}`,
			from: `email: ${email} <mailgun@${process.env.MAILGUN_DOMAIN ?? ''}>`,
			subject: `Sent via Mailgun -- ${email} reached out on ${formattedTimeStamp}!`,
			text: `-from: ${email} \n ${formattedTimeStamp} \n ${content}`
		};
		console.log(data);
		// const data = {
		// 	to: `${approvedeEmail}`,
		// 	from: `email: ${email} <mailgun@${process.env.MAILGUN_DOMAIN}>`,
		// 	subject: `Sent via Mailgun, ${email} reached out on ${formattedTimeStamp}!`,
		// 	text: ` - ${req.body.text}
		//   - ${email}
		//   ${formattedTimeStamp}`
		// };
		// console.log(data);
		// const MailGun = await fetch('/api/mailgun/index', {
		// 	body: JSON.stringify({
		// 		to: setEmail(email),
		// 		from: inputE1.current?.value,
		// 		fullName: fullNameE1.current?.value,
		// 		content: contentE1.current?.value
		// 	}),
		// 	headers: {
		// 		'Content-Type': 'application/json; charset=UTF-8'
		// 	},
		// 	method: 'POST'
		// });

		// const { error } = await MailGun.json();

		// if (error) {
		// 	setMessage(error);
		// 	return;
		// }
		// if (
		// 	inputE1.current?.value !== null &&
		// 	!error &&
		// 	fullNameE1.current?.value !== null &&
		// 	!error &&
		// 	contentE1.current?.value !== null &&
		// 	!error
		// ) {
		// 	setMessage('Success! 🎉 Your email was delivered!' + `${message}`);
		// 	return;
		// }

		if (!dirty && !disabled) {
			setDirty(true);
			handleValidation();
		}
		try {
			setLoading(true);
			setMessage('');
			console.log(fullName, content);
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

	console.table();

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
					<h2 className='text-3xl font-extrabold tracking-tight text-primary-9 sm:text-4xl pb-5'>
						Contact Us Today
					</h2>
				</div>
				<div className='flex flex-col space-y-4'>
					{message && (
						<div className='text-red-700 border border-red-800 p-3'>{message}</div>
					)}
					{/* <label htmlFor={"email-input"}></label> */}
					<Input
						placeholder='First &amp; Last names'
						required={true}
						onChange={setFullName}
						className='bg-primary-9 text-primary-0 font-medium focus:outline-none rounded-md'
					/>
					<Input
						id='email-input'
						type='email'
						required={true}
						placeholder='Email'
						onChange={setEmail}
						className='bg-primary-9 text-primary-0 font-medium focus:outline-none rounded-md'
					/>
					<Textarea
						placeholder='Content'
						onChange={setContent}
						required={true}
						minLength={10}
						cols={1}
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
							onClick={() => handleEmail}
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
						<span className='text-primary-9'>Have an account?</span>
						&nbsp;
						<a
							className='text-primary-9 font-bold hover:underline cursor-pointer'
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

/*
import cn from 'classnames';
import { Button, Input, Textarea, Logo } from '@components/UI';
import React, { useState, FC, useCallback, useEffect } from 'react';
import { useUI } from '@components/context';
import { validate } from 'email-validator';
import fetch from 'isomorphic-unfetch';
// import { parseISO, format } from 'date-fns';
// import { validEmail } from '@lib/validate-email';
import { InputSimplified } from '../UI/Input/input';
const approvedEmail = process.env.MAILGUN_APPROVED_RECIPIENT ?? '';
const defaultSenderDomain = process.env.MAILGUN_DOMAIN ?? '';
// const baseDomain = process.env.MAILGUN_DOMAIN ?? '';

interface Props {
	className?: string;
}

const Email: FC<Props> = props => {
	const [email, setEmail] = useState('');
	const [fullName, setFullName] = useState('');
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');
	// const [dirty, setDirty] = useState(false);
	const [content, setContent] = useState('');
	const { setModalView, closeModal } = useUI();
	// const [disabled, setDisabled] = useState(false);
	const [status, setStatus] = useState('pending');
	const [errorMessage, setErrorMessage] = useState('');

	const handleEmail = async () => {
		function onChange(e: any) {
			if (status !== 'pending') setStatus('pending');
			return setEmail(e.target.value.trim());
		}

		async function submit(e: any) {
			e.preventDefault();

			const res = await fetch('/api/mailgun', {
				body: JSON.stringify({ email, content, fullName }),
				headers: {
					'Content-Type': 'application/json; charset=UTF-8'
				},
				method: 'POST'
			});
			const { error } = await res.json();
			if (error) {
				setStatus('error');
				setErrorMessage(error);
				return;
			}
			setEmail('');
			setStatus('succeeded');
		}
		// const data = {
		// 	to: `${approvedEmail}`,
		// 	from: `email: ${email} <mailgun@${process.env.MAILGUN_DOMAIN ?? ''}>`,
		// 	subject: `Sent via Mailgun -- ${email} reached out on ${formattedTimeStamp}!`,
		// 	text: `-from: ${email} \n ${formattedTimeStamp} \n ${content}`
		// };
		// console.log(data);
		// const data = {
		// 	to: `${approvedeEmail}`,
		// 	from: `email: ${email} <mailgun@${process.env.MAILGUN_DOMAIN}>`,
		// 	subject: `Sent via Mailgun, ${email} reached out on ${formattedTimeStamp}!`,
		// 	text: ` - ${req.body.text}
		//   - ${email}
		//   ${formattedTimeStamp}`
		// };
		// console.log(data);
		// const MailGun = await fetch('/api/mailgun/index', {
		// 	body: JSON.stringify({
		// 		to: setEmail(email),
		// 		from: inputE1.current?.value,
		// 		fullName: fullNameE1.current?.value,
		// 		content: contentE1.current?.value
		// 	}),
		// 	headers: {
		// 		'Content-Type': 'application/json; charset=UTF-8'
		// 	},
		// 	method: 'POST'
		// });

		// const { error } = await MailGun.json();

		// if (error) {
		// 	setMessage(error);
		// 	return;
		// }
		// if (
		// 	inputE1.current?.value !== null &&
		// 	!error &&
		// 	fullNameE1.current?.value !== null &&
		// 	!error &&
		// 	contentE1.current?.value !== null &&
		// 	!error
		// ) {
		// 	setMessage('Success! 🎉 Your email was delivered!' + `${message}`);
		// 	return;
		// }

	// 	if (!dirty && !disabled) {
	// 		setDirty(true);
	// 		handleValidation();
	// 	}
	// 	try {
	// 		setLoading(true);
	// 		setMessage('');
	// 		console.log(fullName, content);
	// 		setLoading(false);
	// 		closeModal();
	// 	} catch ({ errors }) {
	// 		setMessage(errors[0].message);
	// 		setLoading(false);
	// 	}
	// };
	// const handleValidation = useCallback(() => {
	// 	if (dirty) {
	// 		setDisabled(!validate(email));
	// 	}
	// }, [email, dirty]);

	// useEffect(() => {
	// 	handleValidation();
	// }, [handleValidation]);

	// const { className } = props;

	// console.table();

	return (
		<form
			onSubmit={submit}
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
					<h2 className='text-3xl font-extrabold tracking-tight text-primary-9 sm:text-4xl pb-5'>
						Contact Us Today
					</h2>
				</div>
				<div className='flex flex-col space-y-4'>
					{message && (
						<div className='text-red-700 border border-red-800 p-3'>{message}</div>
					)}

					<InputSimplified
						placeholder='First &amp; Last names'
						required={true}
						disabled={status === 'loading'}
						onChange={onchange}
						className='bg-primary-9 text-primary-0 font-medium focus:outline-none rounded-md'
					/>
					<InputSimplified
						id='email-input'
						type='email'
						value={email}
						disabled={status === 'loading'}
						required={true}
						placeholder='Email'
						onChange={onchange}
						className='bg-primary-9 text-primary-0 font-medium focus:outline-none rounded-md'
					/>
					<Textarea
						placeholder='Content'
						disabled={status === 'loading'}
						onChange={setContent}
						required={true}
						minLength={10}
						cols={1}
						className='bg-primary-9 text-primary-0 font-medium focus:outline-none rounded-md'
					/>
					<div className='pt-2 w-auto px-8 flex flex-col'>
						<button
							onClick={submit}
							variant='slim'
							type='submit'
							loading={loading}
							disabled={
								status === 'submitting' ||
								(!email && !content && !fullName) ||
								(!email && !fullName) ||
								(!email && !content) ||
								(!content && !fullName)
							}
							className='w-auto max-w-sm bg-primary-7 text-primary-0 hover:bg-primary-9 rounded-md duration-150 transition-colors'
						>
							Send Email
						</button>
					</div>
					<span className='pt-1 text-center text-sm'>
						<span className='text-primary-9'>Have an account?</span>
						&nbsp;
						<a
							className='text-primary-9 font-bold hover:underline cursor-pointer'
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

*/
