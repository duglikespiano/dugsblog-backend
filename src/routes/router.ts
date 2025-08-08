import { Router } from 'express';
import pingRouter from './pingRouter';
import contactRouter from './contactRouter';
import guestbookRouter from './guestbookRouter';

const router = Router();

router.use('/contact', contactRouter);
router.use('/guestbook', guestbookRouter);
router.use('/ping', pingRouter);

export default router;
