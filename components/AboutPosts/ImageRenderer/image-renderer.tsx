import Image, { ImageLoaderProps, ImageProps } from 'next/image';
import ReactMarkdown from 'react-markdown/with-html';
import { FC } from 'react';
import { ReactMarkdownProps } from 'react-markdown';

/*
	const [bg] = useState(useMemo(() => ColorsSvg, []));
	let ref = useRef() as React.MutableRefObject<HTMLInputElement>;
	useEffect(() => {
		if (ref && ref.current) {
			ref.current.style.backgroundImage = `linear-gradient(140deg, ${bg[0]}, ${bg[1]} 100%)`;
		}
	}, [bg]);
*/

interface CustomImageRendererProps {
	mdChildren: string;
	root?: string;
}

const renderers = {
	image: (image: ImageLoaderProps & ImageProps) => {
		return (
			<Image
				src={image.src}
				alt={image.alt}
				height={image.height}
				width={image.width}
				quality={image.quality}
				loading={image.loading}
				objectFit={image.objectFit}
				priority={image.priority}
				layout={image.layout}
				objectPosition={image.objectPosition}
			/>
		);
	}
};

const ImageCustom: FC<
	CustomImageRendererProps & ReactMarkdownProps
> = props => {
	const { mdChildren } = props;

	return (
		<ReactMarkdown
			allowDangerousHtml={true}
			children={mdChildren}
			renderers={renderers}
		/>
	);
};

export default ImageCustom;
