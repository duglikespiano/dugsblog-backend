import dotenv from 'dotenv';
dotenv.config();

export const port = process.env.PORT;
export const mailService = process.env.MAIL_SERVICE;
export const mailServiceAddress = process.env.MAIL_SERVICE_ADDRESS;
export const mailServiceName = process.env.MAIL_SERVICE_NAME;
export const mailServicePassword = process.env.MAIL_SERVICE_PASSWORD;
export const bcryptSaltRound = process.env.BCRYPT_SALT_ROUND;
export const databaseHost = process.env.DATABASE_HOST;
export const databasePort = process.env.DATABASE_PORT;
export const databaseUser = process.env.DATABASE_USER;
export const databasePassword = process.env.DATABASE_PASSWORD;
export const databaseName = process.env.DATABASE_NAME;
