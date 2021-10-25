const express=require('express')
const bodyparser=require('body-parser')
const path=require('path')
const Doctorlist=require("./public/mongo")
const app=express()

app.use(express.static(path.join(__dirname,"public")))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})


    
app.listen(3000,()=>{console.log("server connected")});