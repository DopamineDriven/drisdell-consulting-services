import '@styles/index.css';
import 'keen-slider/keen-slider.min.css';
import '@styles/chrome-bug.css';

import { AppProps, NextWebVitalsMetric } from 'next/app';
import { useEffect, FC } from 'react';
import * as gtag from '@lib/google-analytics';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@lib/apollo';
import { ManagedUIContext } from '@components/context';
import Head from '@components/Head';
import { useRouter } from 'next/router';

const Noop: FC = ({ children }) => <>{children}</>;

function App({ Component, pageProps }: AppProps) {
	const Layout = (Component as any).Layout || Noop;
	const apolloClient = useApollo(pageProps);
	const router = useRouter();

	useEffect(() => {
		document.body.classList?.remove('loading');
		const handleRouteChange = (url: string) => {
			gtag.pageview(url);
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<Head />
			<ManagedUIContext>
				<ApolloProvider client={apolloClient}>
					<Layout pageProps={pageProps}>
						<Component {...pageProps} />
					</Layout>
				</ApolloProvider>
			</ManagedUIContext>
		</>
	);
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
	console.debug(metric);
}

export default App;
