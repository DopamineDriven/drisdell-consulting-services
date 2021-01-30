import { FC } from 'react';
import KeenSlider from '../../KeenSlider/keen-slider';

const LandingTestimonialsWrapper: FC = ({ children }) => {
	return (
		<KeenSlider>
			{/* <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8'> */}
			{children}
			{/* </div> */}
		</KeenSlider>
	);
};

export default LandingTestimonialsWrapper;
