const express = require('express')
const routerBuyer = require('./buyer')
const routerAdmin = require('./admin')
const Controller = require('../controllers/controller')
const router = express.Router()


router.get('/login', Controller.loginPage)
router.get('/signup', Controller.signupPage)
router.post('/validateAccount', Controller.validateAccount)
router.get('/addToCart/:itemId', Controller.addToCart)


//menampilkan landing page berisi login dan sign-in
router.use('/user/buyer/:buyerId', routerBuyer)
router.use('/user/admin/:adminId', routerAdmin)

module.exports = router

