import ReactGA, { EventArgs } from 'react-ga';
export const GA_TRACKING_ID = process.env.GA_TRACKING_ID ?? '';

export const gaInit = () => {
	ReactGA.initialize(`${process.env.GA_TRACKING_ID}`);
};

export const pageview = (url: string) => {
	ReactGA.ga('config', `${process.env.GA_TRACKING_ID}`, {
		page_path: url
	});
};

export const logPageView = () => {
	ReactGA.set({ page: window.location.pathname });
	ReactGA.pageview(window.location.pathname + window.location.search);
};

export const event = ({ action, category, label, value }: EventArgs) => {
	ReactGA.event({
		action,
		category,
		label,
		value
	});
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
// export const Pageview = (url: URL) => {
// 	window.gtag('config', GA_TRACKING_ID, {
// 		page_path: url
// 	});
// };

// type GTagEvent = {
// 	action: string;
// 	category: string;
// 	label: string;
// 	value: number;
// };

// // https://developers.google.com/analytics/devguides/collection/gtagjs/events
// export const GAEvent = ({ action, category, label, value }: GTagEvent) => {
// 	window.gtag('event', action, {
// 		event_category: category,
// 		event_label: label,
// 		value: value
// 	});
// };
