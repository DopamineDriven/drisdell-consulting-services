import { parseISO, format } from 'date-fns';
import { FC } from 'react';
import cn from 'classnames';

interface ModifiedProps {
	modifiedString: string | null;
	root?: string;
}

const Modified: FC<ModifiedProps> = props => {
	const { modifiedString, root } = props;
	if (modifiedString !== null) {
		const date: Date = parseISO(modifiedString);
		return (
			<time
				dateTime={modifiedString}
				className={cn(root, 'font-poppins text-primary-0')}
			>
				{format(date, 'LLLL	d, yyyy')}
			</time>
		);
	} else {
		return <p>Post hasn't been modified.</p>;
	}
};

export default Modified;
