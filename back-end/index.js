const express = require('express')
const BodyParser = require('body-parser')

const Admin = require('./src/admin/admin')

const app = express()

app.use(BodyParser.json())
app.use(BodyParser.urlencoded({extended:false}))


console.log('hellloo coiJVZOIJCIJPI')

app.use('/admin',Admin)

app.listen(2000)