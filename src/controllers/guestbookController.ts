import { Request, Response } from 'express';
import guestbookService from '../services/guestbookService';

const fetchAllMessages = async (req: Request, res: Response) => {
	await guestbookService.fetchAllMessages('abc');
};
export default { fetchAllMessages };
