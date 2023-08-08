const { Router } = require('express')
const uploader = require('../utils/multer')

const router = Router()

router.get('/', (req, res) => {
    res.json({message: 'Productos'})
})

router.get('/:id', (req, res) => {
    res.json({message: `Producto ${req.params.id}`})
})

router.post('/', uploader.single('file'), (req, res) => {
    console.log(req.body)
    product.profile = req.file.path
    res.json({message: `${product}`})
})

router.put('/:id', (req, res) => {
    console.log(req.body)
    res.json({message: `producto actualizado`})
})

router.delete('/:id', (req, res) => {
    res.json({message: `producto eliminado ${req.params.id}`})
})

module.exports = router