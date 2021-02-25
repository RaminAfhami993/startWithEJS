const express = require('express');
const app = express();
const path = require('path');
const api = require('./router/api')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


mongoose.connect(
    'mongodb://localhost:27017/mak45', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);





app.use(bodyParser.json()); // parse application/json


app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');


app.use('/', api);


app.listen(5005, () => {
    console.log("All is well!!!");

});