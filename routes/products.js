const router = require("express").Router();
const productsController = require("../controllers/products");

// Register routes related to listing, adding, updating and deleting products
router.get('/', productsController.getProducts);
router.post('/create', productsController.create);
router.delete('/:id', productsController.deleteProduct);
router.post('/:id/update_quantity/', productsController.updateQuantity);

module.exports = router;