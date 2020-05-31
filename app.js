var express=require("express");
var app=express();
app.set("view engine","ejs");
app.use(express.static("public"));
var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/hotel",{
    useNewUrlParser:true,useUnifiedTopology:true
});

app.get("/",function(req,res){
    res.redirect("/home");
});

app.get("/home",function(req,res){
    res.render("home");
});

app.get("/about",function(req,res){
    res.render("about");
});

app.listen(3000,function(){
    console.log("Server has Started");
})