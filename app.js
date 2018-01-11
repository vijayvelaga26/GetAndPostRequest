var express= require("express");
var app= express();
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));
var friends=["john","smith","kevin","glenn","patterson"];
// routes
app.post("/addfriend",function(req,res){
    var newFriend= req.body.name;
  //  console.log(newFriend);
  friends.push(newFriend);
    res.redirect("/");
})


app.get("/",function(req,res){
    res.render("home",{friends:friends});
})

app.listen(4000,function(){
    console.log("server running on port 4000 !!!!")
})
