const express =require('express')
 const app = express()
 app.get("/api/get",(req,res)=>{
    res.send({message:'hello back to nodejs'})
 })
 app.get("/api/get",(req,res)=>{
    res.send({message:'hello back to nodejs'})
 })
 app.get('/api/get_user_details',(req,res)=>{
     res.send({
        user:{
         name:"abhishek",
         age:33,
        contact:12345
       } 
   })
 })
 app.listen(7777,()=>{
   console.log('listioning to 7777');
 }
 )