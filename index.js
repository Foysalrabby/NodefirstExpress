var express=require('express');

var app=express();

// function rootCall(req ,res){
//     res.send("this is test")
// }

// const rootCall2=(req ,res )=>{
//     res.send("this is test")
// }
// app.get('/',rootCall);
const users=['farzana','rafi','rabbi','sima','rima'];
app.get('/', function (req, res) {

    const fruit={
        product:"ada",
        price:30,
        quant:9
    }
    res.send(fruit)
  })

  app.get('/fruit/banana',function(req,res){
    res.send({name:"banana",price:300,quantity:10});
  })

  app.get('/users/:id',(req,res)=>{
    const userId=req.params.id;
    const name=users[userId];
    res.send({userId,name});


  })

app.listen(3000 ,()=> console.log("port is running"));

