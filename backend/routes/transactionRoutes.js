import express from 'express';
import {
    getTransactions,
    createTransaction,
    getTransactionById,
    updateTransaction,
    deleteTransaction,

} 
from '../controllers/transactionController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
router.use(protect);

router.get('/',getTransactions);                //get for listing
router.post('/',createTransaction);            //post for creating
router.get('/:id',getTransactionById);        //get/id for a single transaction
router.put('/:id',updateTransaction);        //put/id for updating
router.delete('/:id',deleteTransaction);    //delete/id for deleting 

export default router;