const express = require("express");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');
app.get("/",function(req, res){

var today = new Date();
var currentDay = today.getDay();
var day = "";

if(currentDay === 0 || currentDay === 6){
  day = "Weekday";
  res.render("index",{KindaDay:day});
}
else{
  day = "Weekend";
  res.render("index",{KindaDay:day});
}

});


app.listen(3000,function(){
console.log("Node has started");
});
