import contactDao from '../models/contactDao';

const fetchAllMessages = async (string: string) => {
	await contactDao.fetchAllMessages(string);
};
export default { fetchAllMessages };
