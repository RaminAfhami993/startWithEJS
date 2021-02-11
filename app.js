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
});

app.get("/user/:id", (req, res) => {
    // console.log(req.params);
    // res.send(req.params.id);

    fs.readFile(path.join(__dirname, "public/users.json"), 'utf8', (err, data) => {
        if (err) {
            return res.status(400).send("OPPPS! Something went wrong");
        };

        data = JSON.parse(data);

        user = data.find(x => x.id == req.params.id);

        if (!user) return res.status(404).send("User not found!!!");
        
        res.render('pages/home', user)
    })

})

app.listen(5005);

