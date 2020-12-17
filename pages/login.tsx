import { Layout } from '@components/index';
import { PageTitle } from '@lib/index';
import { NextPage } from 'next';

const Login: NextPage = () => {
	const { LOGIN } = PageTitle;
	return (
		<>
			<Layout title={LOGIN}>
				<div>Login Page</div>
			</Layout>
		</>
	);
};

export default Login;
