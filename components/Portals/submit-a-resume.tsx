import { Input, Button, Textarea, Logo, ModalBackdrop } from '@components/UI';
import { useState, SyntheticEvent, FC } from 'react';
import { useUI } from '@components/context';
import fetch from 'isomorphic-unfetch';
import css from './contact-us.module.css';
import cn from 'classnames';

const SubmitResume: FC = () => {
	const { setModalView } = useUI();
	const [inputE1, setInputE1] = useState('');
	const [inputE2, setInputE2] = useState('');
	const [inputE3, setInputE3] = useState('');
	const [inputE5, setInputE5] = useState('');
	const [message, setMessage] = useState('');
	const [disabled] = useState(false);
	const [loading, setLoading] = useState(false);

	const userSend = async (e: SyntheticEvent<EventTarget>) => {
		e.preventDefault();

		setLoading(true);
		setMessage('');
		let res = await fetch('/api/submit-resume', {
			body: JSON.stringify({
				text: inputE3,
				name: inputE2,
				email: inputE1,
				resume: inputE5
			}),
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			credentials: 'include'
		});

		const { error } = await res.json();

		if (error) {
			setMessage(error);
			return;
		}
		setLoading(false);
		setInputE1('');
		setInputE2('');
		setInputE3('');
		setInputE5('');
		setMessage(
			'Success 🎉 email sent! We will get back to you within several business days'
		);
		await setModalView('SUCCESS_VIEW');
	};

	return (
		<form
			// @ts-ignore
			onSubmit={userSend}
			className={cn('w-100 flex flex-col justify-between')}
		>
			<div className='flex justify-center pb-4 '>
				<Logo className='h-40 w-40 rounded-full' />
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
				{/* <label htmlFor='subject'>{'Subject'}</label>
				<Input
					id='subject-input'
					name='subject'
					placeholder='Email subject...'
					onChange={setInputE4}
					required={true}
					type='text'
					className='mb-2 bg-primary-9 text-primary-0 font-medium focus:outline-none rounded-md'
				/> */}
				<label htmlFor='resume'>{'Resume'}</label>
				<Input
					id='resume-upload'
					name='resume'
					placeholder='upload resume'
					onChange={setInputE5}
					required={true}
					type='file'
					className='col-span-1 mb-2 bg-primary-9 text-primary-0 font-medium focus:outline-none rounded-md'
				/>

				<label htmlFor='text'>{'Body'}</label>
				<Textarea
					id='text-textarea'
					name='text'
					placeholder='Message...'
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
					<span className='text-primary-9'>Questions?</span>
					&nbsp;
					<a
						className='text-primary-9 font-bold hover:underline cursor-pointer'
						onClick={() => setModalView('EMAIL_VIEW')}
					>
						Send an email
					</a>
				</span>
			</div>
		</form>
	);
};

export default SubmitResume;
