import { FC } from 'react';
import NextHead from 'next/head';
import { DefaultSeo } from 'next-seo';
import config from '@config/seo.json';

const Head: FC = () => {
	return (
		<>
			<DefaultSeo {...config} />
			<NextHead>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</NextHead>
		</>
	);
};

export default Head;

/*
				<link
					href='/wp-includes/css/dist/block-library/style.min.css'
					rel='stylesheet'
				/>
				<link
					href='/wp-includes/css/dist/block-library/theme.min.css'
					rel='stylesheet'
				/>
*/
