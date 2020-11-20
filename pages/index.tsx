import { Fragment } from 'react';
import { Meta, Navbar } from '@components/index';
import { NextPage } from 'next';
import Head from 'next/head';

const Index = ({}: NextPage) => {
	return (
		<Fragment>
			<Meta />
			<Head>
				<title>Mark W Jacob Dental Group</title>
			</Head>
			<div className='flex mx-5 min-w-full w-full'>
				<Navbar className='min-w-full w-full -mx-5 font-poppins' />
			</div>
		</Fragment>
	);
};

export default Index;
