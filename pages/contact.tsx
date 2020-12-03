import { Fragment } from 'react';
import { Meta, Nav, Footer } from '@components/index';

const Contact = () => {
	return (
		<Fragment>
			<Meta title='contact us' />
			<div className='flex min-w-full w-full'>
				<Nav classNameParentDiv=' border-secondary-0 border-b-2' />
			</div>
			<div className='fit'></div>
			<Footer />
		</Fragment>
	);
};

export default Contact;
