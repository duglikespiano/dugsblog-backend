import express from 'express';
import router from '../routes/router';
import cors from 'cors';
const app = express();
const corsOption = {
	origin: '*',
	optionSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOption));
app.use(router);

export default app;
