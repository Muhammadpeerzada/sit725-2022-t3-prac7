var express = require("express")
var cors = require("cors")
var app = express()

//For our dbConnect Module
let dbConnect = require("./dbConnect");

//For our Router...
let router = require("./routes/Routes");


app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/api/cards', router)

var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App listening to: http://localhost:"+port);
})