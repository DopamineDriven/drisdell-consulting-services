// import cn from 'classnames'
import { FC, useState, useMemo, useRef, useEffect } from 'react';
import { ColorsSvg } from '@lib/index';

interface Props {
	className?: string;
	children?: any;
}

const Avatar: FC<Props> = ({}) => {
	const [bg] = useState(useMemo(() => ColorsSvg, []));
	let ref = useRef() as React.MutableRefObject<HTMLInputElement>;

	useEffect(() => {
		if (ref && ref.current) {
			ref.current.style.backgroundImage = `linear-gradient(140deg, ${bg[0]}, ${bg[1]} 100%)`;
		}
	}, [bg]);

	return (
		<div
			ref={ref}
			className='inline-block w-8 h-8 rounded-full border-2 border-primary hover:border-secondary focus:border-secondary transition linear-out duration-150 align-middle'
		>
			{/* Add an image - We're generating a gradient as placeholder  <img></img> */}
		</div>
	);
};

export default Avatar;
