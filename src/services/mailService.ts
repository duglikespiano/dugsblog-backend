import { transporter } from '../mailer/mailer';
import { mailServiceAddress } from '../apps/dotenv';

const sendContactEmail = async (name: string, email: string, message: string) => {
	console.log('check in service');
	try {
		const result = await transporter.sendMail({
			from: mailServiceAddress,
			to: mailServiceAddress,
			subject: `You've got a contact from ${name}.`,
			html: `<p>${name} wants to contact you.</p>
			       <p>You can contact to ${email}.</p>
             <p>Below is the message.</p>
             <p>${message}</p>
       `,
		});

		console.log('check in service, result');
		if (result.accepted.length !== 0) {
			return { statusCode: 202 };
		} else {
			return { statusCode: 400 };
		}
	} catch (error) {
		console.error('Mail send error:', error);
		return { statusCode: 500 };
	}
};

const notifyMessageCreation = (name: string, message: string) => {
	transporter.sendMail({
		from: mailServiceAddress,
		to: mailServiceAddress,
		subject: `You've got a message from ${name}.`,
		html: `<p>${name} has left a message.</p>
           <p>Below is the message.</p>
           <p>${message}</p>
     `,
	});
};

export default { sendContactEmail, notifyMessageCreation };
