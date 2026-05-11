import { resend } from '../mailer/mailer';
import { mailServiceAddress } from '../apps/dotenv';

const sendContactEmail = async (name: string, email: string, message: string) => {
	console.log('check in service');
	try {
		const { error } = await resend.emails.send({
			from: 'Dug Blog <onboarding@resend.dev>',
			to: mailServiceAddress as string,
			subject: `You've got a contact from ${name}.`,
			html: `<p>${name} wants to contact you.</p>
			       <p>You can contact to ${email}.</p>
             <p>Below is the message.</p>
             <p>${message}</p>
       `,
		});

		console.log('check in service, result');
		if (error) {
			console.error('Resend error:', error);
			return { statusCode: 400 };
		}
		return { statusCode: 202 };
	} catch (error) {
		console.error('Mail send error:', error);
		return { statusCode: 500 };
	}
};

const notifyMessageCreation = async (name: string, message: string) => {
	const { error } = await resend.emails.send({
		from: 'Dug Blog <onboarding@resend.dev>',
		to: mailServiceAddress as string,
		subject: `You've got a message from ${name}.`,
		html: `<p>${name} has left a message.</p>
           <p>Below is the message.</p>
           <p>${message}</p>
     `,
	});
	if (error) {
		console.error('Resend notify error:', error);
	}
};

export default { sendContactEmail, notifyMessageCreation };
