import { database } from '../db/database';
import mysql from 'mysql2/promise';

interface Message extends RowDataPacket {
	id: number;
	name: string;
	password: string;
	message: string;
	created_at: Date;
	updated_at: Date;
}

import { RowDataPacket, ResultSetHeader } from 'mysql2';

const fetchMessages = async () => {
	const [result] = await database.query<RowDataPacket[]>('SELECT * FROM messages ORDER BY created_at DESC');
	return [...result];
};

const createMessage = async (name: string, hashedPassword: string, message: string) => {
	const connection = await database.getConnection();

	try {
		await connection.beginTransaction();
		// Insert message
		const [insertResult] = await database.query<mysql.ResultSetHeader>(
			`INSERT INTO messages (name, password, message) VALUES (?, ?, ?)`,
			[name, hashedPassword, message]
		);

		const insertId = insertResult.insertId;

		// Select the inserted row
		const [rows] = await database.query<Message[]>(`SELECT * FROM messages WHERE id = ?`, [insertId]);

		// Commit transaction
		await connection.commit();

		// Return inserted row data
		return rows[0];
	} catch (error) {
		// Rollback on error
		await connection.rollback();
		throw error;
	}
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
