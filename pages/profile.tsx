import { Layout } from '@components/index';
import { PageTitle } from '@lib/index';

const Profile = () => {
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
