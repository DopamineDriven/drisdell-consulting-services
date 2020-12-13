import { Layout } from '@components/index';
import { PageTitle } from '@lib/index';

const Login = () => {
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
