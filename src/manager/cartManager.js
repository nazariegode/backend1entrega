const { Router } = require('express');
const uploader = require('../utils/multer');

const router = Router();
const cart = [];

// Obtener el contenido del carrito
router.get('/', (req, res) => {
    res.json(cart);
});

// Agregar un producto al carrito
router.post('/:productId', (req, res) => {
    const productId = req.params.productId;
    cart.push(productId);
    res.json({ message: 'Producto agregado al carrito' });
});

// Actualizar la cantidad de un producto en el carrito
router.put('/:productId', (req, res) => {
    const productId = req.params.productId;
    const newQuantity = req.body.quantity;
    res.json({ message: 'Cantidad de productos actualizada' });
});

// Eliminar un producto del carrito
router.delete('/:productId', (req, res) => {
    const productId = req.params.productId;
    const index = cart.indexOf(productId);
    if (index !== -1) {
        cart.splice(index, 1);
        res.json({ message: 'Producto ha sido removido del carrito!!' });
    } else {
        res.status(404).json({ message: 'Producto no ha sido encontrado...' });
    }
});

module.exports = router;
