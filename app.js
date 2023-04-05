const express = require('express')
const Controller = require('./controllers/controller')
const app = express()
const port = 3000


app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))

app.get('/', Controller.home)
//menampilkan landing page berisi login dan sign-in

app.get('/user/buyer/:buyerId', Controller.home)
//menampilkan page all item yang bisa dibeli buat buyer sesuai dengan id-nya 

app.get('/user/buyer/:buyerId/cart', Controller.home)
//menampilkan cart atau semua item yang ditambahkan oleh buyer/user

app.get('/user/buyer/:buyerId/wallet', Controller.home)
//menampilkan wallet dan balance dari user sesuai id mereka

app.get('/user/buyer/:itemId/detail', Controller.home)
//menampilkan detail dari item sesuai id-nya

app.get('/user/admin', Controller.home)
//menampilkan page buat admin yang berisi banyak button dan fitur khusus admin

app.get('/user/admin/add', Controller.home)
//menampilkan form buat menambahkan item

app.post('/user/admin/add', Controller.home)
//mengupdate database dengan tambahan data didapat dari form

app.get('/user/admin/:itemId/edit', Controller.home)
//menampilkan form buat mengedit item sesuai id-nya

app.post('/user/admin/:itemId/edit', Controller.home)
//melakukan editing terhadap item yang dipegang

app.get('/user/admin/:itemId/delete', Controller.home)
//menghapus item sesuai id-nya

app.get('/user/admin/:itemId/user', Controller.home)
//menampilkan semua nama user



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})