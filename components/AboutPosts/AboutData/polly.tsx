import cn from 'classnames';
import { AboutBySlug_aboutPost } from '@lib/graphql/AboutBySlug/__generated__/AboutBySlug';
import { FC } from 'react';

interface PollyProps extends AboutBySlug_aboutPost {
	root?: string;
	width?: string;
	height?: string;
}

const Polly: FC<PollyProps> = ({
	root,
	polly,
	width = '100%',
	height = '122'
}) => {
	const src = polly !== null && polly.audio !== null ? polly.audio : ``;
	return (
		<div className={cn('mx-auto', root)}>
			<iframe
				width={width}
				height={height}
				src={src}
				frameBorder='0'
				allow='autoplay; encrypted-media'
				allowFullScreen={true}
			/>
		</div>
	);
};

export default Polly;
