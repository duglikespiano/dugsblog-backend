import guestbookDao from '../models/guestbookDao';

const fetchAllMessages = async (string: string) => {
	await guestbookDao.fetchAllMessages(string);
};
export default { fetchAllMessages };
