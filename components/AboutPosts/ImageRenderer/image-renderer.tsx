import Image, { ImageLoaderProps } from 'next/image';
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

interface CustomImageRenderer {
	mdChildren: string;
	height: number;
}

const ImageCustom: FC<CustomImageRenderer & ReactMarkdownProps> = props => {
	const { mdChildren } = props;

	const CustomImage: FC<ImageLoaderProps> = props => {
		return (
			<Image
				src={props.src}
				width={props.width}
				height={props.width / 1.5}
				quality={props.quality}
				alt={props.src}
			/>
		);
	};

	const render = {
		image: CustomImage
	};

	return <ReactMarkdown children={mdChildren} renderers={render} />;
};

export default ImageCustom;
