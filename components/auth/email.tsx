import cn from 'classnames';
import { Logo, LoadingSpinner } from '@components/UI';
import { useState } from 'react';
import { useUI } from '@components/context';
// import fetch from 'isomorphic-unfetch';
// import { parseISO, format } from 'date-fns';
import { useMutation } from '@apollo/client';
import { InputField } from '@lib/global/global-types.generated';
// const approvedeEmail = process.env.MAILGUN_APPROVED_RECIPIENT ?? '';
// const defaultSenderDomain = process.env.MAILGUN_DOMAIN ?? '';
import {
	ContactUsMutation,
	ContactUsMutationVariables
} from '@lib/graphql/ContactUs/__generated__/ContactUsMutation';
import { CONTACT_US } from '@lib/graphql';
import { InputSimplified } from '@components/UI/Input/input';
import { TextAreaSimplified } from '@components/UI/TextArea/text-area';
import css from './contact-us.module.css';
import dynamic from 'next/dynamic';
import { FormIdTypeEnum } from '@lib/graphql-global-types';

import CONTACT_US_QUERY from '@lib/graphql/ContactUsQuery';
import {
	ContactUsQuery,
	ContactUsQueryVariables
} from '@lib/graphql/ContactUsQuery/__generated__/ContactUsQuery';

// import { useRouter } from 'next/router';
// import ContactUs from '@lib/mutations/ContactUs/contact-us';

// const baseDomain = process.env.MAILGUN_DOMAIN ?? '';
const Loading = () => (
	<div className='w-80 h-80 flex items-center text-center justify-center p-3'>
		<LoadingSpinner />
	</div>
);

const dynamicProps = {
	loading: () => <Loading />
};

const ApolloErrorMessage = dynamic(
	() => import('@components/UI/ErrorMessage'),
	dynamicProps
);

const Email = () => {
	const [email, setEmail] = useState('');
	const [fullName, setFullName] = useState('');
	const [message] = useState('');
	const [content, setContent] = useState('');
	const { setModalView } = useUI();
	const query = CONTACT_US_QUERY;
	const queryVars: ContactUsQueryVariables = {
		id: '1',
		idTypeForm: FormIdTypeEnum.DATABASE_ID
	};
	const [handleContactUsSubmission, { data, loading, error }] = useMutation<
		ContactUsMutation,
		ContactUsMutationVariables
	>(CONTACT_US, {
		onCompleted: () => {
			setFullName('');
			setEmail('');
			setContent('');
		},
		update(cache, { data }) {
			const existingData: ContactUsQuery | any = cache.readQuery({
				query,
				variables: queryVars
			});
			cache.writeQuery({
				query,
				variables: {
					email: email,
					content: content,
					fullName: fullName
				},
				data: {
					sendEmail: [data, ...existingData]
				}
			});
		},
		onError({ message }) {
			const clean = message.replace('GraphQL error:', '');
			throw new Error(clean);
		}
	});

	const errorData =
		data !== null &&
		data?.submitForm !== null &&
		data?.submitForm?.errors &&
		error !== null &&
		error !== undefined ? (
			<>
				<ApolloErrorMessage
					message={error.message}
					graphQLErrors={error.graphQLErrors}
					networkError={error.networkError}
					extraInfo={error.extraInfo}
					stack={error.stack}
					name={error.name}
				/>
			</>
		) : (
			''
		);
	const successData =
		data !== null &&
		data !== undefined &&
		data.submitForm !== null &&
		data.submitForm.success !== null ? (
			data.submitForm.success
		) : loading && !error ? (
			<LoadingSpinner />
		) : (
			<>{errorData}</>
		);

	console.log(successData);

	const InputData: InputField[] = [
		{
			id: 1,
			value: fullName
		},
		{
			id: 2,
			value: email
		},
		{
			id: 3,
			value: content
		}
	];

	function onSubmitEvent(e: any) {
		e.preventDefault();
		return handleContactUsSubmission({
			variables: {
				formId: 1,
				data: InputData
			}
		}).then(res =>
			fetch('https://drisdell-headless.com/ninja-forms/1jpir', {
				body: JSON.stringify(data),
				method: 'POST',
				headers: {
					Authorization: `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
				}
			})
				? console.log(res.data?.submitForm?.success)
				: console.log(res.data?.submitForm?.errors)
		);
	}

	function onFullNameChange(e: React.ChangeEvent<HTMLInputElement>) {
		return setFullName(e.target.value);
	}

	function onEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
		return setEmail(e.target.value);
	}

	function onContentChange(e: React.ChangeEvent<HTMLInputElement>) {
		return setContent(e.target.value);
	}

	const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
		if (e.key === '13' && e.metaKey) {
			return onSubmitEvent(e);
		}
	};
	// const router = useRouter();
	return (
		<form
			onSubmit={onSubmitEvent}
			className={cn('w-100 flex flex-col justify-between')}
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
					<InputSimplified
						placeholder='First &amp; Last names'
						required={true}
						value={fullName}
						onChange={onFullNameChange}
						onKeyDown={onKeyDown}
						className='bg-primary-9 text-primary-0 font-medium focus:outline-none rounded-md'
					/>
					<InputSimplified
						id='email-input'
						type='email'
						required={true}
						placeholder='Email'
						value={email}
						onChange={onEmailChange}
						onKeyDown={onKeyDown}
						className='bg-primary-9 text-primary-0 font-medium focus:outline-none rounded-md'
					/>
					<TextAreaSimplified
						placeholder='Content'
						onChange={onContentChange}
						onKeyDown={onKeyDown}
						required={true}
						minLength={10}
						cols={1}
						value={content}
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
						<button
							onClick={onSubmitEvent}
							type='submit'
							className={cn(
								css.root,
								'w-auto max-w-sm bg-primary-7 text-primary-0 hover:bg-primary-9 rounded-md duration-150 transition-colors'
							)}
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
			{loading && <LoadingSpinner />}
			{error && <p className='text-red-500'>{error}</p>}
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
import { ContactUsQuery, ContactUsQuery_form } from '../../lib/graphql/ContactUsQuery/__generated__/ContactUsQuery';
import ContactUs from './contact-us';
import { ContactUsMutation, ContactUsMutationVariables } from '../../lib/mutations/ContactUs/__generated__/ContactUsMutation';
import CONTACT_US from '../../lib/mutations/ContactUs/contact-us';
import Contact from '../../pages/contact-us';
import { EmailField, SubmitField, SubmitFormInput } from '../../lib/global/global-types.generated';
import { InputField } from '../../lib/graphql-global-types';
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

/*
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
				</span>
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
