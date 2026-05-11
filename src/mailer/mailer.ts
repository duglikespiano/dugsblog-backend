import nodemailer from 'nodemailer';
import { mailService, mailServiceAddress, mailServicePassword } from '../apps/dotenv';
export const transporter = nodemailer.createTransport({
	service: mailService,
	auth: {
		user: mailServiceAddress,
		pass: mailServicePassword,
	},
	connectionTimeout: 5000,
	greetingTimeout: 5000,
	socketTimeout: 10000,
});
