import express from 'express';
import {
    getSummary,
    getCategoryBreakdown,
    getMonthlyTrend,
   
} from '../controllers/dashboardController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect);

router.get('/', getSummary);
router.post('/', getCategoryBreakdown);
router.put('/:id', getMonthlyTrend);


export default router;