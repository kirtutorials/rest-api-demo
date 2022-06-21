const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/product-controller');

router.get('/count', productCtrl.getCount);
router.get('/all', productCtrl.getAllProducts);
router.post('/create', productCtrl.createProduct);

router.post('/create')

module.exports = router;

/**
 * Globals
 *  - require
 *  - module
 *  - __dirname
 *  - __filename
 */
    // POST hostname.com/api/employee/create
    // DELETE hostname.com/api/employee/:id
    // PUT/PATCH hostname.com/api/employee/:id
    // hostname.com/api/product/get