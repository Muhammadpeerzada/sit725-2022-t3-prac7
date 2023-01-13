let client = require("../dbConnect");
let projectCollection = client.db("DB").collection("Tools");


//Some Database Functions...
//Insert some cards...
const insertCard = (card, callback) => {
    projectCollection.insertOne(card, (err) => {
        if (err) {
            console.log("Error Message: \n" + err);
        } else {
            console.log("Card successfully inserted!")
        }
    });
}


//Find some cards...
const getCard = (callback) => {
    projectCollection.find({}).toArray(callback);
}

module.exports = {
    insertCard,
    getCard
}