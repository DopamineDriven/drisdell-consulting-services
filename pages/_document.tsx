import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext
} from 'next/document';
import { GA_TRACKING_ID } from '@lib/google-analytics';
export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}
	render() {
		return (
			<Html>
				<Head>
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', '${GA_TRACKING_ID}', {
					page_path: window.location.pathname,
				});
			`
						}}
					/>
				</Head>
				<body className='loading'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
