const express = require('express')
const router = require('./routes')

const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/public'))

router(app)

module.exports = app 


const sushiController = require('../sushi/controller')

const router = (app) => {
    app.use ('/api/carts')
    app.use ('/api/products')
    app.use ('/sushi', sushiController)
}

module.exports = router