import dotenv from 'dotenv';
dotenv.config();

export const port = process.env.PORT;
export const mailService = process.env.MAIL_SERVICE;
export const mailServiceAddress = process.env.MAIL_SERVICE_ADDRESS;
export const mailServiceName = process.env.MAIL_SERVICE_NAME;
export const mailServicePassword = process.env.MAIL_SERVICE_PASSWORD;
