import { Router } from 'express';
import { RequirementController } from '../controllers/requirement.controller';

const router = Router();

router.post('/requirements', RequirementController.create);
router.get('/requirements', RequirementController.getAll);

export default router;
