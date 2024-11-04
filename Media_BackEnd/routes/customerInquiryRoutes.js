// routes/customerInquiryRoutes.js
import { Router } from 'express';
import { createInquiry, getInquiries, updateInquiry, deleteInquiry } from '../controllers/CustomerInquiryController.js';



const router = Router();

router.post('/', createInquiry);
router.get('/', getInquiries);
router.put('/:id', updateInquiry);
router.delete('/:id', deleteInquiry);

export default router;
