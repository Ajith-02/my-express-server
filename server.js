const express = require("express");
const req = require("express/lib/request");

const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello✨</h1>");
});

app.get("/contact", function(){
    req.send("contact me");
});

app.listen(3000, function(){
    console.log("Server started on Port 3000")
});