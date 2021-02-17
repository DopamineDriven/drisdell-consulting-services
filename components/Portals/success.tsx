import { FC } from 'react';
import { useUI } from '@components/context';
import cn from 'classnames';
import { ModalBackdrop, Logo } from '@components/UI';
import { Media } from '@lib/artsy-fresnel';

const SuccessEmail: FC = () => {
	const { closeModal } = useUI();

	return (
		<>
			<div className='flex justify-center pb-4 '>
				<Logo className='h-20 w-20 md:h-40 md:w-40 rounded-full' />
			</div>
			<div className='relative max-w-xl mx-auto'>
				<Media greaterThanOrEqual='sm'>
					<ModalBackdrop />
				</Media>
			</div>
			<div
				className={cn(
					'inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6'
				)}
				role='dialog'
				aria-modal='true'
				aria-labelledby='modal-headline'
			>
				<div>
					<div className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100'>
						<svg
							className='h-6 w-6 text-green-600'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							aria-hidden='true'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M5 13l4 4L19 7'
							/>
						</svg>
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
						<div className='mt-3 text-center sm:mt-5'>
							<h3
								className='text-lg leading-6 font-medium text-gray-900'
								id='modal-headline'
							>
								Succcessfully Sent
							</h3>
						</div>
					</div>
					<div className='mt-5'>
						<button
							className={cn(
								'inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm'
							)}
							onClick={() => closeModal('CLOSE_MODAL')}
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default SuccessEmail;
