import { transporter } from '../mailer/mailer';
import { mailServiceAddress } from '../apps/dotenv';

const sendContactEmail = async (name: string, email: string, message: string) => {
	const result = await transporter.sendMail({
		from: mailServiceAddress,
		to: mailServiceAddress,
		subject: `You've got a contact from ${name}.`,
		html: `<p>${name} wants to contact you.</p>
		       <p>You answer to ${email}.</p>
           <p>Below is the message.</p>
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
