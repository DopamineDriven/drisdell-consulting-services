import { FC, Fragment } from 'react';
import css from './layout.module.css';

interface LayoutProps {
	children?: any | any[];
}

const Layout: FC<LayoutProps> = props => {
	const { children } = props;
	return (
		<Fragment>
			<div
				className={`${css.bg} min-h-screen transform -translate-y-paddingPostTitleBottom z-0`}
			>
				<div className={'min-h-screen'}>
					<main className=' mx-paddingGutterReview'>{children}</main>
				</div>
			</div>
		</Fragment>
	);
};

export default Layout;
