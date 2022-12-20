var express = require("express")
var router = express.Router();

let cardController = require("../controller/Controller");

//Get cards in JSON Format while in this API...
router.get('/',(req,res) => {
    cardController.find(req,res)
})

//Post new cards in JSON Format while in this API...
router.post('/',(req,res) => {
    cardController.insert(req,res)
})

module.exports = router;