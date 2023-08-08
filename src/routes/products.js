const router = app => {
    
    app.get('/', getProductsController)
    app.post('/', postProductsController)
    app.put('/', putProductsController)
    
}

module.exports = router