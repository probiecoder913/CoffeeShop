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
var port = process.env.PORT;
app.listen(port||3000,function(){
    console.log("Listening on PORT " + port);
})