const express = require('express')
const NewUser = require('../Schema/UserSchema')

const Router = express.Router()

Router.post('/NewUser',(req,res)=>{
    NewUser.create(req.body)
    console.log(req.body)
    res.send({
        name : "karthik"
    })
})

module.exports = Router