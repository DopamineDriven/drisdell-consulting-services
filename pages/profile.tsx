import { Layout } from '@components/index';
import { PageTitle } from '@lib/index';
import { NextPage } from 'next';

const Profile: NextPage = () => {
	const { PROFILE } = PageTitle;
	return (
		<>
			<Layout title={PROFILE}>
				<div>Profile Page</div>
			</Layout>
		</>
	);
};

export default Profile;
