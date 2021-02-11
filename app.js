const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');




app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.get('/ejs', (req, res) => {
    res.render('index.ejs', {
        firstName: "Reza",
        lastName: "Qolami",
        skills: ["js", "html", "css", "js", "html", "css", "js", "html", "css"]
    })
});

// app.get('/ejs', (req, res) => {

//     fs.readFile(path.join(__dirname, "public/data.json"), "utf8", function(err, data) {
//         if (err) return res.status(400).send("Something went wrong!!!")
        
//         res.render('index.ejs', JSON.parse(data))
//     })

// });


app.get('/home', (req, res) => {
    res.render('pages/home', {
        user: {
            firstName: "Ali",
            lastName: "Rezaee"
        }
    })
})

app.get('/about', (req, res) => {
    res.render('pages/about', {
        user: {
            firstName: "Ali",
            lastName: "Rezaee"
        }
    })
})

app.post('/user', (req, res) => {
    res.status(201).send({
        msg: "Created successfully."
    })
})

app.listen(5005);

