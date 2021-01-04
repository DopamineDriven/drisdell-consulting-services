import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
	DocumentInitialProps
} from 'next/document';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps: DocumentInitialProps = await Document.getInitialProps(
			ctx
		);
		return { ...initialProps };
	}
	render() {
		return (
			<Html lang='en-US'>
				<Head>
					<meta charSet='utf-8' />
					<link rel='stylesheet' href='https://use.typekit.net/cub6off.css' />
					<link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
					page_path: window.location.pathname,
				});
			`
						}}
					/>
				</Head>
				<Main />
				<NextScript />
			</Html>
		);
	}
}
