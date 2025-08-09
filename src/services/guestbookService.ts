import guestbookDao from '../models/guestbookDao';
import { checkPasswordsMatch } from '../functions/functions';

const fetchMessages = async () => {
	return await guestbookDao.fetchMessages();
};

const createMessage = async (name: string, hashedPassword: string, message: string) => {
	return await guestbookDao.createMessage(name, hashedPassword, message);
};

const deleteMessage = async (messageId: number, password: string) => {
	const arePasswordsMatch = await checkPasswordsMatch(messageId, password);
	if (arePasswordsMatch) {
		return await guestbookDao.deleteMessage(messageId);
	} else {
		return;
	}
};

export default { fetchMessages, createMessage, deleteMessage };
