import { FC, useEffect, useMemo } from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';
import css from './searchbar.module.css';

interface SearchbarProps {
	className?: string;
	id?: string;
}

const Searchbar: FC<SearchbarProps> = props => {
	const { className, id = 'search' } = props;
	const router = useRouter();

	useEffect(() => {
		router.prefetch('/search');
	}, []);

	return useMemo(
		() => (
			<div className={cn(css.parentDiv, className)}>
				<label className={css.label} htmlFor={id}>
					Search
				</label>
				<input
					id={id}
					className={css.input}
					placeholder='Search for pages...'
					defaultValue={router.query.q}
					onKeyUp={e => {
						e.preventDefault();
						if (e.key === 'Enter') {
							const q = e.currentTarget.value;
							router.push(
								{
									pathname: '/search',
									query: q ? { q } : {}
								},
								undefined,
								{ shallow: true }
							);
						}
					}}
				/>
				<div className={css.iconContainer}>
					<svg className={css.icon} fill='currentColor' viewBox='0 0 20 20'>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
						/>
					</svg>
				</div>
			</div>
		),
		[]
	);
};

export default Searchbar;
