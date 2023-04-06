const express = require('express')
const app = express()
const port = 3030
const router  = require('./router')

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

