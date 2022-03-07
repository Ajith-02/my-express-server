const express = require("express");
const req = require("express/lib/request");

const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello✨</h1>");
});

app.get("/contact", function(req, res){
    res.send("contact me");
});

app.get("/about", function(req, res){
    res.send("My name is Ajith P");
});

app.listen(3000, function(){
    console.log("Server started on Port 3000")
});