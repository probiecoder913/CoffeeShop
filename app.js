const express = require('express');

const app = express();

app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname +"/index.html");
})

app.get("/booking",function(req,res){
    res.sendFile(__dirname +"/booking.html");
})
app.get("/feedback",function(req,res){
    res.sendFile(__dirname +"/feedback.html");
})
app.get("/aim",function(req,res){
    res.sendFile(__dirname +"/aim.html");
})
app.post("/",function(req,res){
    res.redirect("/");
})

app.listen(3000,function(err){
    if(err){
        console.log(err);
    }
    else{
    console.log("Listening on PORT 3000");
    }
})