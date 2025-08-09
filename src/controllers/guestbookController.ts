import { Request, Response } from 'express';
import guestbookService from '../services/guestbookService';
import { hashPassword } from '../functions/functions';

const fetchMessages = async (req: Request, res: Response) => {
	const result = await guestbookService.fetchMessages();
	res.status(200).json({ data: result });
};

const createMessage = async (req: Request, res: Response) => {
	const { name, password, message } = req.body;
	const hashedPassword = await hashPassword(password);
	const queryResult = await guestbookService.createMessage(name, hashedPassword, message);
	if ('id' in queryResult) {
		res.status(201).json({ message: 'MESSAGE CREATED', id: queryResult.id, created_at: queryResult.created_at });
	} else {
		res.status(400).json({ message: 'QUERY FAILED' });
	}
};

const deleteMessage = async (req: Request, res: Response) => {
	const { messageId, password } = req.body;
	const queryResult = await guestbookService.deleteMessage(messageId, password);
	if (queryResult?.affectedRows) {
		res.status(204).json({ message: 'MESSAGE DELETED' });
	} else {
		res.status(400).json({ message: 'QUERY FAILED' });
	}
};

export default { createMessage, fetchMessages, deleteMessage };
