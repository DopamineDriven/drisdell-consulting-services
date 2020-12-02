import { ApolloError } from '@apollo/client';
import SiteDivider from '@components/Divider';

const ApolloErrorMessage = ({
	message,
	name,
	networkError,
	extraInfo,
	graphQLErrors,
	stack
}: ApolloError) => {
	return (
		<div
			className={`w-screen min-w-full mx-auto block p-32 text-fiveOBlack font-bold text-lg text-justify`}
		>
			<SiteDivider />
			{`error message(s): ${message}`}
			<SiteDivider />
			{`GraphQL error(s): ${graphQLErrors}`}
			<SiteDivider />
			{`network error(s): ${networkError}`}
			<SiteDivider />
			{`additional log(s): ${extraInfo}`}
			<SiteDivider />
			{`name(s): ${name}`}
			<SiteDivider />
			{`stack(s): ${stack}`}
			<SiteDivider />
		</div>
	);
};

export default ApolloErrorMessage;
