import { Fragment } from 'react';
import { Layout } from '@components/index';
import { PageTitle } from '@lib/index';

const Consultants = () => {
	const { CONSULTANTS } = PageTitle;
	return (
		<Fragment>
			<Layout title={CONSULTANTS}>
				<div>Consultants Page</div>
			</Layout>
		</Fragment>
	);
};

export default Consultants;
