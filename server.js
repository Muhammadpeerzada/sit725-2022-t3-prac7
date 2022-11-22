var express = require("express")
var app = express()

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extends: false }));

const addNumbers = (number1, number2) => {
    var num1 = parseInt(number1);
    var num2 = parseInt(number2);
    var result = num1 + num2;
    return result;
}

app.get("/addTwoNumbers", (req, res) => {
    var num1 = req.query.num1;
    var num2 = req.query.num2;
    var result = addNumbers(num1, num2);
    res.json({ statusCode: 200, data: result, message: 'Success' })
})

var port = process.env.port || 3000;

app.listen(port, () => {
    console.log("App listening to the port: " + port)
})