import { Router } from 'express';
import contactController from '../controllers/contactController';

const router = Router();

router.post('/', contactController.sendContactEmail);

export default router;
