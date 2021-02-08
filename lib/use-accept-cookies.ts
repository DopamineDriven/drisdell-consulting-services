import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const COOKIE_NAME = 'accept_cookies';

export const useAcceptCookies = () => {
	const [acceptedCookies, setAcceptedCookies] = useState(true);

	useEffect(() => {
		if (!Cookies.get(COOKIE_NAME)) {
			setAcceptedCookies(false);
		}
	}, []);

	const acceptCookies = () => {
		setAcceptedCookies(true);
		Cookies.set(COOKIE_NAME, 'accepted', {
			expires: 365,
			secure: process.env.NODE_ENV === 'production' ? true : false,
			sameSite: 'strict'
		});
	};

	return {
		acceptedCookies,
		onAcceptCookies: acceptCookies
	};
};
