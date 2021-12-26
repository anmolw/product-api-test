const router = require("express").Router();
const productsController = require('../controllers/products');

router.get('/', productsController.getProducts);

// Use the products router for all URLS starting with /products
router.use('/products', require('./products'));

module.exports = router;