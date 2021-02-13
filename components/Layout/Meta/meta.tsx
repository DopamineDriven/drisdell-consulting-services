import Head from 'next/head';

const MetaData = () => {
	return (
		<>
			<Head>
				<link
					rel='apple-touch-icon'
					type='img/png'
					sizes='180x180'
					href='/meta/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/meta/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/meta/favicon-16x16.png'
				/>
				<meta charSet='utf-8' />
				<link rel='stylesheet' href='https://use.typekit.net/cub6off.css' />
				<link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
				<link rel='manifest' href='/meta/manifest.json' />
				<link rel='mask-icon' href='/meta/safari-pinned-tab.svg' color='#000000' />
				<link rel='shortcut icon' href='/meta/favicon.ico' />
				<link rel='canonical' href={'https://drisdell.com'} />
				<meta name='robots' content='all' />
				<meta
					name='viewport'
					content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5'
				/>
				<meta name='format-detection' content='telephone=no' />
				<title>{'Drisdell Consulting Services'}</title>
				<meta name='msapplication-TileColor' content='#000000' />
				<meta name='msapplication-config' content='/meta/browserconfig.xml' />
				<meta name='theme-color' content='#000000' />
				<link rel='alternate' type='application/rss+xml' href='/feed.xml' />
				<meta
					name='description'
					content={
						'Headless WordPress Linux Instance ft Bitnami & Automatiic powered by Amazon Cloudfront and LightSail'
					}
				/>
				<meta charSet='utf-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta
					name='keywords'
					content='nextjs, typescript, react, incremental static site regeneration, WPGraphQL, Apollo, GraphQL, headless wordpress, tailwindcss, vercel, figma'
				/>
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:site' content='@Dopamine_Driven' />
				<meta name='twitter:title' content='Andrew Ross — Full-Stack Engineer' />
				<meta
					name='twitter:description'
					content={
						'Headless WordPress Linux Instance ft Bitnami & Automatiic powered by Amazon Cloudfront and LightSail'
					}
				/>
				<meta
					name='twitter:image'
					content={
						'https://og-image.now.sh/**Drisdell%20Consulting%20Services**.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fss8q9p3mq3mu4d3kvjpw.png&widths=350&widths=350&heights=350&heights=350'
					}
				/>
				<meta name='twitter:creator' content='@Dopamine_Driven' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://drisdell.com' />
				<meta property='og:title' content='Drisdell Consulting Services' />
				<meta
					property='og:description'
					content={
						'Headless WordPress Linux Instance ft Bitnami & Automatiic powered by Amazon Cloudfront and LightSail'
					}
				/>
				<meta
					property='og:image'
					content={
						'https://og-image.now.sh/**Drisdell%20Consulting%20Services**.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fss8q9p3mq3mu4d3kvjpw.png&widths=350&widths=350&heights=350&heights=350'
					}
				/>
				<meta property='og:image:width' content='2048' />
				<meta property='og:image:height' content='1170' />
			</Head>
		</>
	);
};

export default MetaData;

// content='width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, user-scalable=no'
