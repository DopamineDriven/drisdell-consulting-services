import css from './loading-dots.module.css';

const LoadingDots: React.FC = () => {
	return (
		<>
			<span className={css.root}>
				<span />
				<span />
				<span />
			</span>
		</>
	);
};

export default LoadingDots;
