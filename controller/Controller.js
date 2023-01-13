let projectModel = require("../models/projects");

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

//Function to be called for Inserting cards...
const insert = (req, res) => {
    console.log("New Card Added: ", req.body);
    var newCards = req.body;
    // res.json({statusCode: 200, data: newCards, message:"Success"});
    projectModel.insertCard((err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: "Success" })
        } else {
            res.json({ statusCode: 400, message: err })
        }
    })
}

//Function to be called for Finding cards...
const find = (req, res) => {
    projectModel.getCard((err, result) => {
        if (err) {
            res.json({ statusCode: 400, message: err })
        } else {
            res.json({ statusCode: 200, data: result, message: "Success" })
        }
    })
}

module.exports = { find, insert }