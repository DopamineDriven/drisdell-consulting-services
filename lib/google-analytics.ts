export const GA_TRACKING_ID = 'UA-177780141-4';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
	// if (typeof window !== 'undefined') {
	window.gtag('config', GA_TRACKING_ID, {
		page_path: url
	});
};

type GTagEvent = {
	action: string;
	category: string;
	label: string;
	value: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent) => {
	window.gtag('event', action, {
		event_category: category,
		event_label: label,
		value: value
	});
};

// import ReactGA, { EventArgs } from 'react-ga';
// import { ParsedUrlQuery } from 'querystring';
// export const gaInit = () => {
// 	ReactGA.initialize(GA_TRACKING_ID);
// };

// export const pageview = (url: string) => {
// 	ReactGA.ga('config', GA_TRACKING_ID, {
// 		page_path: url
// 	});
// };

// export const logPageView = () => {
// 	ReactGA.set({ page: window.location.pathname });
// 	ReactGA.pageview(window.location.pathname + window.location.search);
// };

// export const event = ({ action, category, label, value }: EventArgs) => {
// 	ReactGA.event({
// 		action,
// 		category,
// 		label,
// 		value
// 	});
// };
