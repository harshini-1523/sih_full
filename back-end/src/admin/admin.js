const express = require('express')


const Router = express()

Router.post('/happy',(req,res)=>{
    console.log(req.body)
    res.send({
        name : "karthik"
    })
})

module.exports = Router