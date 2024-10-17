import express from 'express'
import { placeOrder,placeOrderRazorpay,placeOrderStripe,AllOrders,updateStatus,userOrders,verifyStripe } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js';

const orderRouter = express.Router();

//admin features
orderRouter.post('/list',adminAuth,AllOrders);
orderRouter.post('/status',adminAuth,updateStatus)

//payment features

orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)

//user features

orderRouter.post('/userorders',authUser,userOrders)

//verify payment
orderRouter.post('/verifystripe',authUser,verifyStripe)

export default orderRouter
