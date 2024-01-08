const express = require('express')
const app = express()
const mongoose = require('mongoose')


app.get('/', (req,res) =>{
    res.send("Hello NODE API")
})
app.get('/blog', (req,res)=>{
    res.send("Hello blog")
})


mongoose.connect('mongodb+srv://anandsumid:Bibnsgejl1@cluster0.a8lbdrn.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log("connected to MONGODB")
    app.listen(3000, ()=>{
        console.log("Node API app is running on PORT 3000")
    })
}).catch(()=>{
    console.log(error)
})