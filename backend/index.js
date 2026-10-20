const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

var username = "sanjai"
var password = "123"
var email = "sanjairajeshkumar@gmail.com"
var phone = "8667752344"
var address = "Coimbatore"

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.post('/login', (req, res) =>
    
{
    console.log(req.body.username);

    if (req.body.username === username && req.body.password === password 
        && req.body.email === email && req.body.phone === phone
         && req.body.address === address) {
        res.send(true);
    } else {
        res.send(false);
    }
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
})