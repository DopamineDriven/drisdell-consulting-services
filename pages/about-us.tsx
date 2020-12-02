import { Fragment } from 'react';
import { Meta, Nav } from '@components/index';

const About = () => {
	return (
		<Fragment>
			<Meta title='about us' />
			<div className='flex min-w-full w-full'>
				<Nav classNameParentDiv='' />
			</div>
		</Fragment>
	);
};

export default About;
