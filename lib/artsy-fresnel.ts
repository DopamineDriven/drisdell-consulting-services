import { createMedia } from '@artsy/fresnel/dist/index';

const PortfolioMedia = createMedia({
	breakpoints: {
		xs: 375,
		sm: 640,
		md: 768,
		lg: 1024,
		xl: 1280,
		'2xl': 1440,
		'3xl': 1920
	}
});

export const mediaStyles = PortfolioMedia.createMediaStyle();
export const { Media, MediaContextProvider } = PortfolioMedia;
