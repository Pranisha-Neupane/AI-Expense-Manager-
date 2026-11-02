import express from 'express';
import {
    getBudgets,
    createBudget,
    updateBudget,
    deleteBudget,
} from'../controllers/budgetController.js';

import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
router.use(protect);

router.get('/', getBudgets);
router.post('/', createBudget);
router.put('/', updateBudget);
router.delete('/', deleteBudget);

export default router; //mount it in server 