const router = require("express").Router();
const productsController = require("../controllers/products");

router.post('/create', productsController.create);
router.get('/', productsController.getProducts);
router.delete('/:id', productsController.deleteProduct);
router.post('/:id/update_quantity/', productsController.updateQuantity);

module.exports = router;