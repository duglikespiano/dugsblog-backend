import { Request, Response } from 'express';
import guestbookService from '../services/guestbookService';
import { hashPassword, checkPasswordsMatch } from '../functions/functions';

const createMessage = async (req: Request, res: Response) => {};
const fetchMessages = async (req: Request, res: Response) => {
	const result = await guestbookService.fetchMessages();
	res.status(200).json({ data: result });
};

export default { createMessage, fetchMessages };
