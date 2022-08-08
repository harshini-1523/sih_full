const express = require('express')
const BodyParser = require('body-parser')

const cors = require('cors');


const Admin = require('./src/admin/admin')

const app = express()
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({extended:false}))

console.log(process.env.Mongo_URL)

app.use('/admin',Admin)

app.listen(5000)