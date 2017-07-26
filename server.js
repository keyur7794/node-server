const express= require("express");

var app=express();
app.use(express.static(__dirname + '/public'));
app.get('/',(req,res)=>{
//res.send("<h1>hello</h1>");
res.send({
name:'keyur',
liking:[
  'dc',
  'marvel'
]

});
});

app.listen(3000);
