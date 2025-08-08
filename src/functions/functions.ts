import bcrypt from 'bcrypt';
import { bcryptSaltRound } from '../apps/dotenv';

export const hashPassword = async (plainPassword: string) => {
	bcrypt.genSalt(parseInt(bcryptSaltRound as string), function (err, salt) {
		bcrypt.hash(plainPassword as string, salt, function (err, hashedPassword) {
			console.log(hashedPassword);
		});
	});
};

export const checkPasswordsMatch = async (plainPassword: string) => {
	// const doPasswordsMatch = await bcrypt.compare(plainPassword, hashedPasswordInDB);
};
