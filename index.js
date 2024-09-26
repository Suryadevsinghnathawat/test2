const express=require('express');
const app=express();

app.get("/",(req,res)=>{
    res.status(200).send('Landing Pgae');
});

app.get("/about",(req,res)=>{
    res.status(200).send("About Page");
});

const port=8000;
app.listen(port,()=>{
    console.log('Site is running on port http://127.0.0.1:${port}');
});