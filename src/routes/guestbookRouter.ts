import { Router } from 'express';
import guestbookController from '../controllers/guestbookController';

const router = Router();

router.get('/', guestbookController.fetchAllMessages);

export default router;
