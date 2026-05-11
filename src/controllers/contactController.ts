import { Request, Response } from 'express';
import mailService from '../services/mailService';

const sendContactEmail = async (req: Request, res: Response) => {
	console.log('check');
	const { name, email, message } = req.body;
	const valuesArray = [name, email, message];
	let areValuesValid = false;

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
		const result = await mailService.sendContactEmail(name, email, message);
		if (result?.statusCode === 202) {
			res.status(202).json({ message: 'MAIL SENT' });
		} else {
			res.status(result?.statusCode ?? 500).json({ message: 'SERVER ERROR' });
		}
	} else {
		res.status(400).json({ message: 'INVALID INPUT' });
	}
};
export default { sendContactEmail };
