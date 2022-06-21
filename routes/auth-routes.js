const express = require('express');
const usrCtrl = require('../controllers/auth-controller');
const router = express.Router();

router.post('/signup', usrCtrl.signup);
router.post('/signin', usrCtrl.signin);
router.post('/logout', usrCtrl.logout);

module.exports = router;

/**
 * Starting E-Commerce
 *  - Employees and Customers - Actors
 *      
 *      1. Employees
 *          - SuperAdmin (all access)
 *          - Admin (all access)
 *          - Sales (only sales)
 *  
 *      1. Customer (only toshop)
 *              - product shopping
 *              - add items cart
 *              - Checkout
 * 
 *      Login/Password -> Authentication  --> server send token
 *      create cart (HTTP POST - AUthorization: token) -> allowed
 *  
 *        
 *      
 *             
 *      
 */

