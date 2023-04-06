const express = require('express')
const Controller = require('../controllers/controller')
const router = express.Router()


router.get('/', Controller.adminPage)
//menampilkan page buat admin yang berisi banyak button dan fitur khusus admin

router.get('/user/admin/add', Controller.home)
//menampilkan form buat menambahkan item

router.post('/user/admin/add', Controller.home)
//mengupdate database dengan tambahan data didapat dari form

router.get('/user/admin/:itemId/edit', Controller.home)
//menampilkan form buat mengedit item sesuai id-nya

router.post('/user/admin/:itemId/edit', Controller.home)
//melakukan editing terhadap item yang dipegang

router.get('/user/admin/:itemId/delete', Controller.home)
//menghapus item sesuai id-nya

router.get('/user/admin/:itemId/user', Controller.home)
//menampilkan semua nama user



module.exports = router