import { FC, useRef, useEffect, useCallback } from 'react';
import css from './modal.module.css';
// import { FocusScope } from '@react-aria/focus';
// import { Transition } from '@headlessui/react';
import Portal from '@reach/portal';
import { Cross } from '@components/Icons';
import {
	disableBodyScroll,
	enableBodyScroll,
	clearAllBodyScrollLocks
} from 'body-scroll-lock';
interface Props {
	className?: string;
	children?: any;
	open?: boolean;
	onClose: () => void;
}

const Modal: FC<Props> = ({ children, open, onClose }) => {
	const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

	const handleKey = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				return onClose();
			}
		},
		[onClose]
	);

	useEffect(() => {
		if (ref.current) {
			if (open) {
				disableBodyScroll(ref.current);
				window.addEventListener('keydown', handleKey);
			} else {
				enableBodyScroll(ref.current);
			}
		}
		return () => {
			window.removeEventListener('keydown', handleKey);
			clearAllBodyScrollLocks();
		};
	}, [open, handleKey]);

	return (
		<Portal>
			{open ? (
				<div className={css.root}>
					<div className={css.modal} role='dialog' ref={ref}>
						<div className='h-7 flex items-center justify-end w-full'>
							<button
								onClick={() => onClose()}
								aria-label='Close panel'
								className='hover:text-gray-500 transition ease-in-out duration-150 focus:outline-none'
							>
								<Cross className='h-6 w-6' />
							</button>
						</div>
						{children}
					</div>
				</div>
			) : null}
		</Portal>
	);
};

export default Modal;
