import { database } from '../db/database';

import { RowDataPacket } from 'mysql2';

const fetchMessages = async () => {
	const [messages] = await database.query<RowDataPacket[]>('SELECT * FROM messages');
	return [...messages];
};

export default { fetchMessages };
