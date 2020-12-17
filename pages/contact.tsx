import { Fragment } from 'react';
import { Layout } from '@components/index';
import { PageTitle } from '@lib/index';
import { NextPage } from 'next';

const Contact: NextPage = () => {
	const { CONTACT } = PageTitle;
	return (
		<Fragment>
			<Layout title={CONTACT}>
				<div>Contact Page</div>
			</Layout>
		</Fragment>
	);
};

export default Contact;
