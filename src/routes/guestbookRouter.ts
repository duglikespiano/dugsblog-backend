import { Router } from 'express';
import guestbookController from '../controllers/guestbookController';

const router = Router();

router.get('/', guestbookController.fetchMessages);
router.post('/', guestbookController.createMessage);
router.delete('/', guestbookController.deleteMessage);

export default router;
