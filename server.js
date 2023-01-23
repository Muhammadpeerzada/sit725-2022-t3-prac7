var express = require("express")
var cors = require("cors")
var app = express()

//For our dbConnect Module
let dbConnect = require("./dbConnect");

//For our Router...
let router = require("./routes/Routes");

//Initializing Sockets...
let http = require('http').createServer(app);
let io = require('socket.io')(http);


app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/api/cards', router)

app.get("/addTwoNumbers/:firstNum/:secondNum",function(req,res,next){
    var num1 = parseInt(req.params.firstNum);
    var num2 = parseInt(req.params.secondNum);
    var result = num1 + num2;
    if (result == null){
        res.json({result: result, statusCode: 400}).status(400);
    }
    else {
        res.json({result: result, statusCode: 400}).status(400);
    }
    
})

//Adding sockets...
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  setInterval(()=>{
    socket.emit('number', parseInt(Math.random()*10));
  }, 2000);

});

var port = process.env.port || 3000;

http.listen(port,()=>{
    console.log("App listening to: http://localhost:"+port);
})