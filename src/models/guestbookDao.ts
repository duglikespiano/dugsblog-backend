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

export const getPasswordFromDB = async (messageId: number) => {
	const [rows] = await database.query(`SELECT password FROM messages WHERE id = ?`, [messageId]);
	return (rows as { password: string }[])[0]?.password;
};

const deleteMessage = async (messageId: number): Promise<ResultSetHeader> => {
	const [result] = await database.query<ResultSetHeader>(`DELETE FROM messages WHERE id = ?`, [messageId]);
	return result;
};

export default { fetchMessages, createMessage, getPasswordFromDB, deleteMessage };
