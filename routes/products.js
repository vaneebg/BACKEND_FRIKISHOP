const express = require('express');
const ProductController = require('../controllers/ProductController');
const router = express.Router();

router.post('/', ProductController.create)
router.get('/', ProductController.findAll)
router.put('/id/:id', ProductController.update)
router.delete('/id/:id', ProductController.delete)
router.get('/id/:id', ProductController.getById)
router.get('/name/:name', ProductController.getOneByName)
router.get('/filter/pricemin/:min/pricemax/:max', ProductController.filterByPrice)
router.get('/order', ProductController.orderPrice)

module.exports = router;