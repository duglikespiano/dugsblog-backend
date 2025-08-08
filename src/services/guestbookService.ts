import guestbookDao from '../models/guestbookDao';

const fetchMessages = async () => {
	return await guestbookDao.fetchMessages();
};

export default { fetchMessages };
