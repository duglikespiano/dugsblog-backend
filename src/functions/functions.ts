import bcrypt from 'bcrypt';
import { bcryptSaltRound } from '../apps/dotenv';

export const hashPassword = async (plainPassword: string) => {
	const salt = await bcrypt.genSalt(parseInt(bcryptSaltRound as string));
	const hashedPassword = await bcrypt.hash(plainPassword, salt);
	return hashedPassword;
};

export const checkPasswordsMatch = async (plainPassword: string) => {
	// const doPasswordsMatch = await bcrypt.compare(plainPassword, hashedPasswordInDB);
};
