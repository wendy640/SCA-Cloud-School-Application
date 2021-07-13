const express = require("express");
const bodyParser = require("body-parser");

const date = require(__dirname + "/date.js");


const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let items = ["Buy Food", "Cook Food" ,"Shopping"];
let workItems = [];

app.get("/", function(req,res){
 
let day = date(); 

 res.render("list", {
    listTitle: day, newList:items
    });  
});

app.post("/", function(req,res){

    let item = req.body.newItem;
    if (req.body.list === "work") {
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
    
});

app.get("/work", function(req,res){
    res.render("list", {
        listTitle: " work List",  newList:workItems
        });  
});

app.get("/about", function(req,res){
    
    res.render("about");  
});



app.listen(3000, function(){
    console.log("we are curently on port 3000");
});

