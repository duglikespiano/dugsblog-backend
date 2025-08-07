import { Request, Response } from 'express';
import contactService from '../services/contactService';

const fetchAllMessages = async (req: Request, res: Response) => {
	console.log(req.body);
	await contactService.fetchAllMessages('abc');
};
export default { fetchAllMessages };
