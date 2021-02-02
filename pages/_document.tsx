import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext
} from 'next/document';
import { GA_TRACKING_ID } from '@lib/google-analytics';
import { mediaStyles } from '@lib/artsy-fresnel';
class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}
	/**
	 * @isDev removes client side react code bundled with next in dev for _hotter_ loads 🔥
	 * @NextScript bundles a hefty payload
	 * @returns
	 */
	render() {
		// const isDev = process.env.NODE_ENV === 'development';
		return (
			<Html>
				<Head>
					<style type='text/css' dangerouslySetInnerHTML={{ __html: mediaStyles }} />
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
					{/* {isDev && <NextScript />} */}
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
