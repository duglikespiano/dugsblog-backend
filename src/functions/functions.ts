import bcrypt from 'bcrypt';
import { bcryptSaltRound } from '../apps/dotenv';
import guestbookDao from '../models/guestbookDao';

export const hashPassword = async (plainPassword: string) => {
	const salt = await bcrypt.genSalt(parseInt(bcryptSaltRound as string));
	return await bcrypt.hash(plainPassword, salt);
};

export const checkPasswordsMatch = async (messageId: number, plainPassword: string) => {
	const hashedPasswordInDB = await guestbookDao.getPasswordFromDB(messageId);
	return await bcrypt.compare(plainPassword, hashedPasswordInDB);
};
