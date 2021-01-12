import Image, { ImageProps, ImageLoaderProps } from 'next/image';

// const imageInferred = document.querySelector('img');

const ImageLoad = ({ src, width, quality }: ImageLoaderProps) => {
	return `https://${process.env.WORDPRESS_URL}/${src}?=w${width}?q=${
		quality || 75
	}`;
};

// const imageSimple = document.querySelector('img');
// const imageMutable = useRef<typeof imageSimple>(null);

export const ImageRenderer = (img: ImageLoaderProps & ImageProps) => {
	console.log(`${img.src} custom image renderer`);
	return (
		<Image
			// src={(img.src = `${process.env.WORDPRESS_SRCSET}/*`)}
			loader={ImageLoad}
			src={`${img.src}`}
			alt={img.alt}
			height={img.height}
			// contentEditable={(img.contentEditable = true)}
			width={img.width}
			loading={'eager'}
			priority={(img.priority = true)}
			layout={(img.layout = 'responsive')}
		/>
	);
};
