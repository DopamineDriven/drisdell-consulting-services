import '@styles/index.css';
import { AppProps, NextWebVitalsMetric } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { gaInit, logPageView } from '@utils/google-analytics';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@lib/apollo';
import { ManagedUIContext } from '@components/context';

function App({ Component, pageProps }: AppProps) {
	const apolloClient = useApollo(pageProps);
	const router = useRouter();

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
