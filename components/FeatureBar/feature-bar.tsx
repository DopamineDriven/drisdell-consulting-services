import cn from 'classnames';
import css from './feature-bar.module.css';

interface FeatureBarProps {
	className?: string;
	title: string;
	description?: string;
	hide?: boolean;
	action?: React.ReactNode;
}

const FeatureBar: React.FC<FeatureBarProps> = ({
	title,
	description,
	className,
	action,
	hide
}) => {
	const rootClassName = cn(
		css.root,
		{
			transform: true,
			'opacity-90 bg-primary-9 text-primary-0 z-50 select-none ': !hide,
			'translate-y-full opacity-0 bg-primary-0': hide
		},
		className
	);
	return (
		<div className={rootClassName}>
			<span className='block md:inline'>{title}</span>
			<span className='block mb-6 md:inline md:mb-0 md:ml-2'>{description}</span>
			{action && action}
		</div>
	);
};

export default FeatureBar;
