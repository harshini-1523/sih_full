const express = require('express')
const NewAdmin = require('../Schema/AdminSchema')

const Router = express.Router()

Router.post('/happy',(req,res)=>{
    NewAdmin.create(req.body)
    console.log(req.body)

    res.send({
        name : "karthik"
    })
})

Router.post('/NewAdmin',(req,res)=>{
    NewAdmin.create(req.body)
    console.log(req.body)
    res.send({
        name : "karthik"
    })
})


module.exports = Router