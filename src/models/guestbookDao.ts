import { database } from '../db/database';

import { RowDataPacket, ResultSetHeader } from 'mysql2';

const fetchMessages = async () => {
	const [result] = await database.query<RowDataPacket[]>('SELECT * FROM messages');
	return [...result];
};

const createMessage = async (name: string, hashedPassword: string, message: string): Promise<ResultSetHeader> => {
	const [result] = await database.query<ResultSetHeader>(`INSERT INTO messages (name, password, message) VALUES (?, ?, ?)`, [
		name,
		hashedPassword,
		message,
	]);
	return result;
};

export default { fetchMessages, createMessage };
