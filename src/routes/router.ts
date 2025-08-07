import { Router } from 'express';
import pingRouter from './pingRouter';
import contactRouter from './contactRouter';

const router = Router();

router.use('/contact', contactRouter);
router.use('/ping', pingRouter);

export default router;
