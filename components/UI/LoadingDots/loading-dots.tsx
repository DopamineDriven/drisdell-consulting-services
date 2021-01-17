import css from './loading-dots.module.css';
import { FC } from 'react';

const LoadingDots: FC = () => {
	return (
		<>
			<span className={css['root']}>
				<span />
				<span />
				<span />
			</span>
		</>
	);
};

export default LoadingDots;
