var express=require("express");
var app=express();


//routing to the source and getting infro from /
app.get("/",function(req,res){
    res.send("Hi there!");
    });
    
//listening on what port, here use cloud9 server port: process.env.PORT and IP should be:process.env.IP

app.listen(process.env.PORT,process.env.IP,function()
{console.log("Server has started");
    });
    
//bye route

app.get("/bye",function(req,res){
    res.send("Goodbye!");
    });
    
//dog

app.get("/dog",function(req,res){
    res.send("MEOW");
    console.log("A request was made!");
    });
    
app.get("/r/:pattern/:userid/:title",function(req,res){
    res.send("You're learning route parameters!")
});

app.get("*",function(req,res){
        res.send("Star!");
}); 

    
    

    

