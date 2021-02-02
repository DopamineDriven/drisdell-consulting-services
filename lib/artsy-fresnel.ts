import { createMedia } from '@artsy/fresnel/dist/index';

const PortfolioMedia = createMedia({
	breakpoints: {
		xs: 0,
		sm: 640,
		md: 768,
		lg: 1024,
		xl: 1280
	}
});

export const mediaStyles = PortfolioMedia.createMediaStyle();
export const { Media, MediaContextProvider } = PortfolioMedia;
