import { Request, Response } from 'express';
import guestbookService from '../services/guestbookService';
import { hashPassword, checkPasswordsMatch } from '../functions/functions';

const createMessage = async (req: Request, res: Response) => {
	const { name, password, message } = req.body;
	const hashedPassword = await hashPassword(password);
	const queryResult = await guestbookService.createMessage(name, hashedPassword, message);
	if (queryResult.affectedRows > 0) {
		res.status(201).json({ message: 'MESSAGE CREATED' });
	} else {
		res.status(400).json({ message: 'QUERY FAILED' });
	}
};
const fetchMessages = async (req: Request, res: Response) => {
	const result = await guestbookService.fetchMessages();
	res.status(200).json({ data: result });
};

export default { createMessage, fetchMessages };
