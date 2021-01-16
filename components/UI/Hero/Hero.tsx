import React, { FC } from 'react';
import { Container } from '@components/UI';
import { RightArrow } from '@components/Icons';
import s from './Hero.module.css';
import Link from 'next/link';
interface Props {
	className?: string;
	headline: string;
	description: string;
}

const Hero: FC<Props> = ({ headline, description }) => {
	return (
		<div className='bg-primary-0'>
			<Container>
				<div className={s.root}>
					<h2 className='text-4xl leading-10 font-extrabold text-primary-9 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl'>
						{headline}
					</h2>
					<div className='flex flex-col justify-between'>
						<p className='mt-5 text-xl leading-7 text-accent-2 text-primary-9'>
							{description}
						</p>
						<Link href='/blog'>
							<a className='text-primary-9 pt-3 font-bold hover:underline flex flex-row cursor-pointer w-max-content'>
								Read it here
								<RightArrow width='20' heigh='20' className='ml-1' />
							</a>
						</Link>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Hero;
