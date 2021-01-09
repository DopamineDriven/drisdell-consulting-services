import { ApolloError } from '@apollo/client';
import SiteDivider from '@components/Divider';
import cn from 'classnames';
import css from './error-message.module.css';
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
			className={cn(
				css.root,
				`w-screen min-w-full mx-auto block p-32 text-fiveOBlack font-bold text-lg text-justify`
			)}
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

/*
import { ApolloError } from '@apollo/client';
import SiteDivider from '@components/Divider';
import { FC } from 'react';
import cn from 'classnames';

interface ApolloErrorMessageProps {
	rootClassName?: string;
}

const ApolloErrorMessage: FC<ApolloErrorMessageProps> = (
	props,
	{ message, name, networkError, extraInfo, graphQLErrors }: ApolloError
) => {
	const { rootClassName } = props;
	return (
		<div
			className={cn(
				rootClassName,
				`w-screen min-w-full mx-auto block p-32 text-fiveOBlack font-bold text-lg text-justify`
			)}
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

*/
