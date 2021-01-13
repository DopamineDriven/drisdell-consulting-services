// import cn from 'classnames'
import { FC, useState, useMemo, useRef, useEffect } from 'react';
import ColorsSvg from '@lib/colors-svg';
import cn from 'classnames';

interface Props {
	className?: string;
	children?: any;
}

const Avatar: FC<Props> = props => {
	const [bg] = useState(useMemo(() => ColorsSvg, []));
	let ref = useRef() as React.MutableRefObject<HTMLInputElement>;
	useEffect(() => {
		if (ref && ref.current) {
			ref.current.style.backgroundImage = `linear-gradient(140deg, ${bg[0]}, ${bg[1]} 100%)`;
		}
	}, [bg]);

	const { className } = props;

	return (
		<div
			ref={ref}
			className={cn(
				className,
				'inline-block rounded-full transition-colors duration-150 align-middle'
			)}
		>
			{/* Add an image - We're generating a gradient as placeholder  <img></img> */}
		</div>
	);
};

export default Avatar;
