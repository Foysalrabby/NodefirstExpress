var express=require('express');
var cors = require('cors');
var bodyParser = require('body-parser')

var app=express();

// function rootCall(req ,res){
//     res.send("this is test")
// }

// const rootCall2=(req ,res )=>{
//     res.send("this is test")
// }
// app.get('/',rootCall);

app.use(cors());
app.use(bodyParser.json());
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


  //post 
  app.post('/adduser',(req,res)=>{

    console.log("post data ..");
    console.log(req.body);
  } )


app.listen(3000 ,()=> console.log("port is running"));

