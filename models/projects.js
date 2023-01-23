let client = require("../dbConnect");
let projectCollection = client.db("DB").collection("Tools");


//Some Database Functions...
//Insert some cards...
const insertCard = (card, callback) =>{
    projectCollection.insertOne(card, callback);
}


//Find some cards...
const getCard = (callback) =>{
    projectCollection.find({}).toArray(callback);
}

module.exports = {
    insertCard, getCard
}