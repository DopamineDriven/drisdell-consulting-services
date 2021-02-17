import { Input, Logo, ModalBackdrop } from '@components/UI';
import { useState, FC } from 'react';
import { useUI } from '@components/context';
import { Media } from '@lib/artsy-fresnel';

const ResumeSubmission: FC = () => {
	const { setModalView } = useUI();
	const [message, setMessage] = useState('');

	const uploadFile = async (e: any) => {
		const file = e.target.value[0];
		const filename = encodeURIComponent(file.name);
		const res = await fetch(`/api/upload-url?file=${filename}`);
		const { url, fields } = await res.json();
		const formData = new FormData();
		Object.entries({ ...fields, file }).forEach(([key, value]) => {
			formData.append(key, String(value));
		});

		const upload = await fetch(url, {
			method: 'POST',
			body: formData
		});

		if (upload.ok) {
			console.log('upload succeeded');
		} else {
			setMessage('upload a PDF or MSWord doc less than 1MB in size');
		}
	};

	return (
		<>
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
				<label htmlFor='resume'>{'Resume'}</label>
				<Input
					id='resume-upload'
					name='resume'
					placeholder='upload resume'
					onChange={uploadFile}
					required={true}
					type='file'
					accept='application/vnd.openxmlformats-officedocument.wordprocessingml.document'
					className='col-span-1 mb-2 bg-primary-9 text-primary-0 font-medium focus:outline-none rounded-md'
				/>
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
		</>
	);
};

export default ResumeSubmission;

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
