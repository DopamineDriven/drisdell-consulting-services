import { Input, Button, Textarea, Logo, ModalBackdrop } from '@components/UI';
import { useState, SyntheticEvent, FC, useEffect, useCallback } from 'react';
import { useUI } from '@components/context';
import css from './contact-us.module.css';
import cn from 'classnames';
import { validEmail } from '@lib/validate-email';
import { Media } from '@lib/artsy-fresnel';

const SubmitResume: FC = () => {
	const { setModalView } = useUI();
	// const formData = new FormData();
	const [inputE1, setInputE1] = useState('');
	const [inputE2, setInputE2] = useState('');
	const [inputE3, setInputE3] = useState('');
	const [inputE4, setInputE4] = useState('');
	// const inputText = useRef<HTMLTextAreaElement>(null);
	const [dirty, setDirty] = useState(false);
	const [message, setMessage] = useState('');
	const [disabled, setDisabled] = useState(false);
	const [loading, setLoading] = useState(false);
	const userSend = async (e: SyntheticEvent<EventTarget>) => {
		e.preventDefault();
		if (!dirty && !disabled) {
			setDirty(true);
			handleValidation();
		}
		setLoading(true);
		setMessage('');
		let res = await fetch('/api/submit-a-resume', {
			body: JSON.stringify({
				text: inputE4,
				resume: inputE3,
				subject: inputE2,
				email: inputE1
			}),
			headers: {
				Accept:
					'application/json, text/plain, application/vnd.openxmlformats-officedocument.wordprocessingml.document, */*',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
			},
			method: 'POST'
		});

		const { error, data } = await res.json();

		if (error) {
			setMessage(error);
			return;
		}
		setLoading(false);
		setInputE1('');
		setInputE2('');
		setInputE3('');
		setInputE4('');
		setMessage(
			'Success 🎉 email sent! We will get back to you within several business days' +
				`${data}`
		);
		await setModalView('SUCCESS_VIEW');
	};

	const handleValidation = useCallback(() => {
		if (dirty) {
			setDisabled(!validEmail(inputE1) || !inputE2 || !inputE3 || !inputE4);
		}
	}, [inputE1, inputE2, inputE3, inputE4, dirty]);

	useEffect(() => {
		handleValidation();
	}, [handleValidation]);

	// const uploadFile = async (e: any) => {
	// 	const file = e.target.files[0] as File
	// 	const filename = encodeURIComponent(file.name);
	// 	const res = await fetch(`/api/upload-url?file=${filename}`);
	// 	const { url, fields } = await res.json();
	// 	const formData = new FormData();
	// 	Object.entries({ ...fields, file }).forEach(([key, value]) => {
	// 		formData.append(key, String(value));
	// 	});

	// 	const upload = await fetch(url, {
	// 		method: 'POST',
	// 		body: formData
	// 	});

	// 	if (upload.ok) {
	// 		console.log('upload succeeded');
	// 	} else {
	// 		setMessage('upload a PDF or MSWord doc less than 1MB in size');
	// 	}
	// };

	return (
		<form
			onSubmit={userSend}
			className={cn('w-screen sm:w-100 flex flex-col justify-between')}
		>
			<div className='flex justify-center pb-4 '>
				<Logo className='h-20 w-20 md:h-40 md:w-40 rounded-full' />
			</div>
			<div className='relative max-w-xl mx-auto'>
				<Media greaterThanOrEqual='sm'>
					<ModalBackdrop />
				</Media>
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
				<label htmlFor='subject'>{'Subject'}</label>
				<Input
					id='subject-input'
					name='subject'
					placeholder='subject'
					onChange={setInputE2}
					required={true}
					type='text'
					className='mb-2 bg-primary-9 text-primary-0 font-medium focus:outline-none rounded-md'
				/>
				<label htmlFor='resume'>{'LinkedIn or Resume URL'}</label>
				<Input
					id='resume'
					name='resume'
					placeholder='upload resume'
					onChange={setInputE3}
					required={true}
					type='url'
					className='col-span-1 mb-2 bg-primary-9 text-primary-0 font-medium focus:outline-none rounded-md'
				/>
				<label htmlFor='text'>{'Body'}</label>
				<Textarea
					id='text-textarea'
					name='text'
					placeholder='body'
					onChange={setInputE4}
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
						{'SUBMIT RESUME'}
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

/*
				<label htmlFor='resume'>{'Resume'}</label>
				<Input
					id='resume-upload'
					name='resume'
					placeholder='upload resume'
					onChange={setInputE4}
					required={true}
					type='file'
					className='col-span-1 mb-2 bg-primary-9 text-primary-0 font-medium focus:outline-none rounded-md'
				/>
*/

// /** Provides information about files and allows JavaScript in a web page to access their content. */
// interface File extends Blob {
// 	readonly lastModified: number;
// 	readonly name: string;
// }

// declare var File: {
// 	prototype: File;
// 	new(fileBits: BlobPart[], fileName: string, options?: FilePropertyBag): File;
// };

// /** An object of this type is returned by the files property of the HTML <input> element; this lets you access the list of files selected with the <input type="file"> element. It's also used for a list of files dropped into web content when using the drag and drop API; see the DataTransfer object for details on this usage. */
// interface FileList {
// 	readonly length: number;
// 	item(index: number): File | null;
// 	[index: number]: File;
// }

// declare var FileList: {
// 	prototype: FileList;
// 	new(): FileList;
// };

// interface FileReaderEventMap {
// 	"abort": ProgressEvent<FileReader>;
// 	"error": ProgressEvent<FileReader>;
// 	"load": ProgressEvent<FileReader>;
// 	"loadend": ProgressEvent<FileReader>;
// 	"loadstart": ProgressEvent<FileReader>;
// 	"progress": ProgressEvent<FileReader>;
// }

// /** Lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using File or Blob objects to specify the file or data to read. */
// interface FileReader extends EventTarget {
// 	readonly error: DOMException | null;
// 	onabort: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
// 	onerror: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
// 	onload: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
// 	onloadend: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
// 	onloadstart: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
// 	onprogress: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
// 	readonly readyState: number;
// 	readonly result: string | ArrayBuffer | null;
// 	abort(): void;
// 	readAsArrayBuffer(blob: Blob): void;
// 	readAsBinaryString(blob: Blob): void;
// 	readAsDataURL(blob: Blob): void;
// 	readAsText(blob: Blob, encoding?: string): void;
// 	readonly DONE: number;
// 	readonly EMPTY: number;
// 	readonly LOADING: number;
// 	addEventListener<K extends keyof FileReaderEventMap>(type: K, listener: (this: FileReader, ev: FileReaderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
// 	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
// 	removeEventListener<K extends keyof FileReaderEventMap>(type: K, listener: (this: FileReader, ev: FileReaderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
// 	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
// }

// declare var FileReader: {
// 	prototype: FileReader;
// 	new(): FileReader;
// 	readonly DONE: number;
// 	readonly EMPTY: number;
// 	readonly LOADING: number;
// };
