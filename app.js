const express = require('express');
const app = express();
const path = require('path');
const api = require('./router/api')

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');


app.use('/', api);


app.listen(5005);

