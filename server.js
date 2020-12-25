var users = [
    {
        userName: "haseeb",
        userEmail: "haseeb@gmail.com",
        userPassword: '13124'
    },
    {
        userName: "Muneeb",
        userEmail: "muneeb@gmai.com",
        userPassword: '2343423'
    }
]
const PORT = process.env.PORT || 5000;
var express = require("express");
var cors = require('cors')
var morgan = require('morgan')
var bodyParser = require('body-parser')

var app = express();

app.use(cors());
app.use(morgan('dev'))
app.use(bodyParser.json())


app.get("/", (req, res, next) => {
    console.log("some one get menu");
    res.send("Welcome");
});
app.post("/signup", (req, res, next) => {
    var vEmail = req.body.userEmail;
    console.log(vEmail)
    var isFound = false;

    for (var i = 0; i < users.length; i++) {
        if (users[i].userEmail === vEmail) {
            isFound = true;
            break;
        }
    }
    if (isFound) {
        res.send("User Already Exist")
    }
    else {
        users.push(req.body);
        res.send("Signup Successully");
    }
    console.log(users)

});
app.post("/login", (req, res, next) => {
    var sEmail = req.body.email
    var sPass = req.body.pass

    var isFound = false

    for (var i = 0; i < users.length; i++) {

        console.log(users[i].userEmail, sEmail)

        if (users[i].userEmail === sEmail) {
            isFound = i;
            var currentEmail = sEmail;
            break;
        }
    }
    if (isFound === false) {
        res.send("user not found")
    }
    else if (users[isFound].userPassword === sPass) {
        res.send(`Login Success Name: ${users[isFound].userName} Email: ${currentEmail}`)
    }
    else {
        res.status(403).send("Password or email invalid")
    }
});

app.listen(PORT, () => {
    console.log("server is running on Heruko"+PORT);
})
// app.listen(3000, function () {
//     console.log("server is running");
// });