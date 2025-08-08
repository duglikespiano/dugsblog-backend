import mysql from 'mysql2/promise';
import { databaseHost, databasePort, databaseUser, databasePassword, databaseName } from '../apps/dotenv';

export const database = mysql.createPool({
	host: databaseHost,
	port: parseInt(databasePort!),
	user: databaseUser,
	password: databasePassword,
	database: databaseName,
});

database
	.getConnection()
	.then(() => console.log('DATABASE INITIALIZED'))
	.catch((error) => console.error(error));
