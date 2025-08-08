import nodemailer from 'nodemailer';
import { mailService, mailServiceName, mailServiceAddress, mailServicePassword } from '../apps/dotenv';
const sendContactEmail = async (name: string, email: string, message: string) => {
	const transporter = nodemailer.createTransport({
		service: mailService,
		auth: {
			user: mailServiceAddress,
			pass: mailServicePassword,
		},
	});

	const result = await transporter.sendMail({
		from: mailServiceAddress,
		to: mailServiceAddress,
		subject: `You've got a contact from ${name}.`,
		html: `<p>${name} wants to contact you.</p>
           <p>Below is the message </p>
           <p>${message}</p>
     `,
	});

	if (result.accepted.length !== 0) {
		return { statusCode: 202 };
	} else {
		return { statusCode: 400 };
	}
};
export default { sendContactEmail };
