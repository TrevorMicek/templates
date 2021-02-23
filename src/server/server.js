const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors')
const corsOptions = require('./corsOptions');
const path = require('path');
const bodyParser = require("body-parser")

const getUser = require('./database/getUserPass')
const postData = require ('./database/postDatabase')


app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(cors({origin:true,credentials: true}));

app.use('/', express.static('build'));

app.post("/api/send-email", function(req, res) {
    var user = req.body;
   
    //postData(user.username, user.password)
    console.log(user)
    
    res.redirect('http://localhost:8000')
    
});
  



/*
app.get("api/jsonData", function(req, res, next) {
    res.send(categories);
  });


const fs = require('fs');

router.get('/api/items', (req, res) => {

    fs.readFile('./data/db.json', (err, json) => {
        let obj = JSON.parse(json);
        res.json(obj);
    });

});
*/

var listener = app.listen(4000, function() {
    console.log('Listening on port ' + listener.address().port);
});
