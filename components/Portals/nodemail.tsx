import { Input, Button, Textarea, Logo, ModalBackdrop } from '@components/UI';
import { useState, SyntheticEvent, FC } from 'react';
import { useUI } from '@components/context';
import css from './contact-us.module.css';
import cn from 'classnames';
// import AWS from 'aws-sdk';
// import { ConfigurationOptions } from 'aws-sdk/lib/config-base';

// const SES_CONFIG: ConfigurationOptions = {
// 	accessKeyId: `${process.env.SES_ACCESS_KEY}`,
// 	secretAccessKey: `${process.env.SES_SECRET_ACCESS_KEY}`
// };

const SendEmail: FC = () => {
	const { setModalView } = useUI();
	const [inputE1, setInputE1] = useState('');
	const [inputE2, setInputE2] = useState('');
	const [inputE3, setInputE3] = useState('');
	const [inputE4, setInputE4] = useState('');

	// const [success, onSuccess] = useState(false);
	const [message, setMessage] = useState('');
	const [disabled] = useState(false);
	const [loading, setLoading] = useState(false);
	const userSend = async (e: SyntheticEvent<EventTarget>) => {
		e.preventDefault();

		setLoading(true);
		setMessage('');
		let res = await fetch('/api/nodemailer', {
			body: JSON.stringify({
				text: inputE3,
				subject: inputE4,
				name: inputE2,
				email: inputE1
			}),
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			},
			method: 'POST'
			// credentials: 'include'
		});

		const { error } = await res.json();

		if (error) {
			setMessage(error);
			return;
		} else {
			setLoading(false);
			setInputE1('');
			setInputE2('');
			setInputE3('');
			setInputE4('');
			setMessage(
				'Success 🎉 email sent! We will get back to you within several business days'
			);
			await setModalView('SUCCESS_VIEW');
		}
		return;
	};

	return (
		<form
			// @ts-ignore
			onSubmit={userSend}
			className={cn('w-100 flex flex-col justify-between')}
		>
			<div className='flex justify-center pb-4 '>
				<Logo className='h-20 w-20 md:h-40 md:w-40 rounded-full' />
			</div>
			<div className='relative max-w-xl mx-auto'>
				<ModalBackdrop />
				{/* <div className='text-center'>
					<h2 className='text-3xl font-extrabold tracking-tight text-primary-9 sm:text-4xl pb-5'>
						Contact Us Today
					</h2>
				</div> */}
				{message && (
					<div className='text-white border border-white p-2 mb-2 rounded-2xl'>
						{message}
					</div>
				)}
				<label htmlFor='email'>{'Email Address'}</label>
				<Input
					id='from-input'
					name='from'
					placeholder='user@example.net'
					onChange={setInputE1}
					required={true}
					type='email'
					className='mb-2 bg-primary-9 text-primary-0 font-medium focus:outline-none rounded-md'
				/>
				<label htmlFor='name'>{'Full Name'}</label>
				<Input
					id='name-input'
					name='name'
					placeholder='first &amp; last names'
					onChange={setInputE2}
					required={true}
					type='text'
					className='mb-2 bg-primary-9 text-primary-0 font-medium focus:outline-none rounded-md'
				/>
				<label htmlFor='subject'>{'Subject'}</label>
				<Input
					id='subject-input'
					name='subject'
					placeholder='Email subject...'
					onChange={setInputE4}
					required={true}
					type='text'
					className='mb-2 bg-primary-9 text-primary-0 font-medium focus:outline-none rounded-md'
				/>
				<label htmlFor='text'>{'Body'}</label>
				<Textarea
					id='text-textarea'
					name='text'
					placeholder='Email body...'
					onChange={setInputE3}
					required={true}
					minLength={5}
					cols={1}
					className='mb-2 bg-primary-9 text-primary-0 font-medium focus:outline-none rounded-md'
				/>
				<div className='w-auto px-8 flex flex-col'>
					<Button
						type='submit'
						loading={loading}
						disabled={disabled}
						className={cn(
							css.root,
							'my-4 w-auto max-w-sm bg-primary-7 text-primary-0 hover:bg-primary-9 rounded-md duration-150 transition-colors'
						)}
					>
						{'SUBMIT EMAIL'}
					</Button>
				</div>
				<span className='pt-1 text-center text-sm'>
					<span className='text-primary-9'>Interested in a Career?</span>
					&nbsp;
					<a
						className='text-primary-9 font-bold hover:underline cursor-pointer'
						onClick={() => setModalView('SUBMIT_RESUME_VIEW')}
					>
						Submit a Resume
					</a>
				</span>
			</div>
		</form>
	);
};

export default SendEmail;
