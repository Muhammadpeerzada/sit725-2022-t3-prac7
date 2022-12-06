var express = require("express")
var cors = require("cors")
var app = express()
let projectCollection;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//MongoDB Connection...
var MongoClient = require("mongodb").MongoClient;

//Database Connection...
const uri = "mongodb+srv://Mpeerzada:Bukhari786@cluster0.gwnrn73.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

const createCollection = (collectionName) => {
    client.connect((err, db) => {
        projectCollection = client.db("DB").collection(collectionName);
        if (!err) {
            console.log("Database Connected!")
        } else {
            console.log(" ERROR: ", err);
            process.exit(1);
        }
    })
}



//Creating Dummy Cards for the cards API...
const cardList = [{
        title: "Hammer",
        image: "images/hammer.png",
        link: "About Hammer",
        desciption: "Demo desciption about Hammer"
    },
    {
        title: "Screwdriver",
        image: "images/screwdriver.png",
        link: "About Screwdriver",
        desciption: "Demo desciption about Screwdriver"
    }
]

//Some Database Functions...
//Insert some cards...
const insertCard = (card, callback) => {
    projectCollection.insertOne(card, callback);
}

//Find some cards...
const getCard = (callback) => {
    projectCollection.find({}).toArray(callback);
}

//Get cards in JSON Format while in this API...
app.get('/api/cards', (req, res) => {
    getCard((err, result) => {
        if (err) {
            res.json({ statusCode: 400, message: err })
        } else {
            res.json({ statusCode: 200, data: cardList, message: "Success" })
        }
    })
})

//Post new cards in JSON Format while in this API...
app.post('/api/cards', (req, res) => {
    console.log("New Card Added: ", req.body);
    var newCards = req.body;
    res.json({ statusCode: 200, data: newCards, message: "Success" });
    // insertCard((err,result) => {
    //     if(err){
    //         res.json({statusCode: 400, message:err})
    //     }
    //     else{
    //         res.json({statusCode: 200, data: newCards, message:"Success"})
    //     }
    // })
})


var port = process.env.port || 3000;

app.listen(port, () => {
    console.log("App listening to: http://localhost:" + port);
    createCollection("Tools");
})