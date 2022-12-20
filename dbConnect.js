require("dotenv").config();

//MongoDB Connection...
var MongoClient = require("mongodb").MongoClient;

//Database Connection...
const uri = "mongodb+srv://mskashif:sbk1997MDB@cluster0.orxlvxg.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser : true });

client.connect((err,db) => {
    if (!err){
        console.log("Database Connected!")
        }
        else{
            console.log(" ERROR: ", err);
            process.exit(1);
        }
    });


module.exports = client;