import express from 'express';
import router from '../routes/router';
import cors from 'cors';
const app = express();
const corsOption = {
	origin: '*',
	optionsSuccessStatus: 200,
};

app.use(cors(corsOption));
app.use(express.json());
app.use(router);

export default app;
