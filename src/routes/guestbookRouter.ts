import { Router } from 'express';
import guestbookController from '../controllers/guestbookController';

const router = Router();

router.post('/', guestbookController.createMessage);

export default router;
