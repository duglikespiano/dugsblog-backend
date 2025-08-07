import { Request, Response } from 'express';
import contactService from '../services/contactService';

const fetchAllMessages = async (req: Request, res: Response) => {
	const { name, email, message } = req.body;
	const valuesArray = [name, email, message];
	let areValuesValid = false;
	console.log(name);
	console.log(email);
	console.log(message);

	valuesArray.forEach((value) => {
		if (value.trim() !== '') {
			areValuesValid = true;
		} else {
			areValuesValid = false;
		}
	});

	if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
		areValuesValid = false;
	}

	if (areValuesValid) {
		await contactService.fetchAllMessages(name, email, message);
		if ('a' === 'a') {
			res.status(202).json({ message: 'MAIL SENT' });
		} else {
			res.status(500).json({ message: 'SERVER ERROR' });
		}
	} else {
		res.status(400).json({ message: 'INVALID INPUT' });
	}
};
export default { fetchAllMessages };
