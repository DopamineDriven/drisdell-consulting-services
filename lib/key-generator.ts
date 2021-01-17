import random from 'lodash.random';
// import crypto, { BinaryLike } from 'crypto';
// import { v4 as uuidv4 } from 'uuid';
// import { validate } from 'email-validator';

export default function keyHelper() {
	const hexConstructor = [
		'0',
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'A',
		'B',
		'C',
		'D',
		'E',
		'F'
	];

	const getRandomHexValue = () => random(3, 4);
	let idx = getRandomHexValue();
	let idx2 = getRandomHexValue();
	let idx3 = getRandomHexValue();
	let idx4 = getRandomHexValue();

	while (idx === idx2 || idx === idx3 || idx === idx4) {
		idx = getRandomHexValue();
	}
	while (idx2 === idx3 || idx2 === idx4) {
		idx2 = getRandomHexValue();
	}
	while (idx3 === idx4) {
		idx3 = getRandomHexValue();
	}

	const merge = [
		hexConstructor[idx],
		hexConstructor[idx2],
		hexConstructor[idx3],
		hexConstructor[idx4]
	];
	return [...merge];
}

// type HashProps = {
// 	password: BinaryLike;
// 	email: string;
// };

// const generateUniqueSecret = ({ password, email }: HashProps) => {
// 	const salt = crypto.randomBytes(16).toString('hex');
// 	const hash = crypto
// 		.pbkdf2Sync(password, salt, 1000, 64, 'sha512')
// 		.toString('hex');
// 	const user = {
// 		id: uuidv4(),
// 		created: Date.now(),
// 		email: validate(email),
// 		hash,
// 		salt
// 	};
// };

/*
    function pbkdf2(
        password: BinaryLike,
        salt: BinaryLike,
        iterations: number,
        keylen: number,
        digest: string,
        callback: (err: Error | null, derivedKey: Buffer) => any,
    ): void;
    function pbkdf2Sync(
        password: BinaryLike,
        salt: BinaryLike,
        iterations: number,
        keylen: number,
        digest: string,
    ): Buffer;
*/
