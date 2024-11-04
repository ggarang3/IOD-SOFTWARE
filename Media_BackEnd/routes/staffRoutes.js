// routes/staffRoutes.js
import { Router } from 'express';
import { createStaff, getAllStaff, updateStaff, deleteStaff } from '../controllers/staffController.js';

const router = Router();

router.post('/', createStaff);
router.get('/', getAllStaff);
router.put('/:id', updateStaff);
router.delete('/:id', deleteStaff);

export default router;
