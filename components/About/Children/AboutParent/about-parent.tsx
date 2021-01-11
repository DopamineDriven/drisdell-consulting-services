import React, { FC } from 'react';
// import cn from classNames;
import { AboutPage } from '@lib/graphql/AboutPage/__generated__/AboutPage';
import AboutLayout from '../AboutLayout';

interface AboutParentProps {
	data: AboutPage;
	children?: React.ReactNode;
	error: undefined;
}

const AboutParent: FC<AboutParentProps> = props => {
	const { data, children, error } = props;

	return (
		<>
			{data != null &&
			data.pages != null &&
			data.pages.edges != null &&
			data.pages.edges.length > 0 ? (
				data.pages.edges.map(page => {
					return page != null &&
						page.node != null &&
						page.node.featuredImage != null &&
						page.node.children != null ? (
						<div
							className='block mx-auto font-poppins w-full max-w-cardGrid'
							key={page.node.__typename}
						>
							<AboutLayout
								title={page.node.title}
								children={page.node.children}
								featuredImage={page.node.featuredImage}
							/>
							{children}
						</div>
					) : (
						<div>error on about page mapping</div>
					);
				})
			) : (
				<div>an error occurred...{error}</div>
			)}
		</>
	);
};

export default AboutParent;
