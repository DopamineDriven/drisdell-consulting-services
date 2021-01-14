import '@styles/index.css';
import 'keen-slider/keen-slider.min.css';
// import '@styles/chrome-bug.css';

import { AppProps, NextWebVitalsMetric } from 'next/app';
import { useEffect } from 'react';
import { gaInit, logPageView } from '@lib/google-analytics';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@lib/apollo';
import { ManagedUIContext } from '@components/context';

function App({ Component, pageProps, router }: AppProps) {
	const apolloClient = useApollo(pageProps);

	// useEffect(() => {
	// 	document.body.classList?.remove('loading');
	// }, []);

	useEffect(() => {
		gaInit();
		const handleRouteChange = () => {
			logPageView();
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);
	console.log();
	return (
		<ManagedUIContext>
			<ApolloProvider client={apolloClient}>
				<Component {...pageProps} />
			</ApolloProvider>
		</ManagedUIContext>
	);
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
	console.debug(metric);
}

export default App;
