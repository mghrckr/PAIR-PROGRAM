const express = require('express')
const Controller = require('../controllers/controller')
const router = express.Router()


router.get('/', Controller.buyerPage)
//menampilkan page all item yang bisa dibeli buat buyer 

router.get('/:buyerId/cart', Controller.home)
//menampilkan cart atau semua item yang ditambahkan oleh buyer/user

router.get('/:buyerId/wallet', Controller.home)
//menampilkan wallet dan balance dari user sesuai id mereka

router.get('/:itemId/detail', Controller.home)
//menampilkan detail dari item sesuai id-nya



module.exports = router