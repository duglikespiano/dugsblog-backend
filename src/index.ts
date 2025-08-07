import app from './server';
import { port } from './apps/dotenv';

app.listen(port, () => {
	console.log('server is running');
});
