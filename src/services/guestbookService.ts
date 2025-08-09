import guestbookDao from '../models/guestbookDao';

const fetchMessages = async () => {
	return await guestbookDao.fetchMessages();
};

const createMessage = async (name: string, hashedPassword: string, message: string) => {
	return await guestbookDao.createMessage(name, hashedPassword, message);
};

export default { fetchMessages, createMessage };
