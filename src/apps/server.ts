import http from 'http';
import { port } from './dotenv';
import app from './apps';

const server = http.createServer(app);

const startServer = () => {
	server.listen(port, () => {
		console.log(`Server is running on port ${port}`);
	});
};

export default startServer;
