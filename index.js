var express=require('express');

var app=express();

// function rootCall(req ,res){
//     res.send("this is test")
// }

// const rootCall2=(req ,res )=>{
//     res.send("this is test")
// }
// app.get('/',rootCall);
app.get('/', function (req, res) {
    res.send('hello world')
  })

app.listen(3000 ,()=> console.log("port is running"));

