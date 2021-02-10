import Image, { ImageProps, ImageLoaderProps } from 'next/image';
const ImageLoad = ({ src, width, quality }: ImageLoaderProps) => {
	return (
		`https://drisdell-headless.com/${src}?=w${width}?q=${quality || 75}` ||
		`https://d2f904nk7e5fig.cloudfront.net/${src}?=w${width}?q=${quality || 75}`
	);
};

/** use TS inference to get
 ** @HTMLImageElement | @null
 ** const imageSimple = document.querySelector('img');
 ** @useRef
 ** const imageMutable = useRef<typeof imageSimple>(null);
 **/
export const ImageRenderer = (img: ImageLoaderProps & ImageProps) => {
	return (
		<Image
			loader={ImageLoad}
			src={`${img.src}`}
			alt={img.alt}
			height={img.height}
			// contentEditable={(img.contentEditable = true)}
			width={img.width}
			priority={(img.priority = true)}
			layout={(img.layout = 'responsive')}
		/>
	);
};
