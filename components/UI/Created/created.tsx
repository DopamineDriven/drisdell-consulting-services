import { parseISO, format } from 'date-fns';
import { FC } from 'react';
import cn from 'classnames';

interface CreatedProps {
	createdString: string | null;
	root?: string;
}

const Created: FC<CreatedProps> = props => {
	const { createdString, root } = props;
	if (createdString !== null) {
		const date: Date = parseISO(createdString);
		return (
			<time
				dateTime={createdString}
				className={cn(root, 'font-poppins text-primary-0')}
			>
				{format(date, 'LLLL	d, yyyy')}
			</time>
		);
	} else {
		return <p>{Date.now()}</p>;
	}
};

export default Created;
