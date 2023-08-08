const router = app => {
    
    app.get('/', getCartsController)
    app.post('/', postCartsController)
    app.put('/', putCartsController)
    
}

module.exports = router