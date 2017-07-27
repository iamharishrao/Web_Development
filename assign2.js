var express=require("express");
var app=express();


app.get("/",function(req,res){
    res.send("Welcome to my assignment");
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server has started!");
});

app.get("/speak/:animal",function(req,res){
    var sounds=
     {pig:"Oink",
      cow:"Moo",
      dog:"Woof Woof",
      goldfish:"...",
      cat:"I hate you human!"
     }
     var animals=req.params.animal;
     var sound=sounds[animal];
     res.send("The" + animal + "says" + sound);
     });
     
     
     
app.get("/repeat/:message/:times",function(req,res){
    var times=Number(req.params.times);
    var message=req.params.message;
    var result="";
    for(var i=0;i<times;i++)
     {
         result+=message+" ";
     }
     
     res.send(result);
});
     
app.get("*",function(req,res){
   res.send("Wrong Page. Whatchu doing with your life, mate?");
    });
