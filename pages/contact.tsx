import { Fragment } from 'react';
import { Layout } from '@components/index';
import { PageTitle } from '@lib/index';

const Contact = () => {
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
