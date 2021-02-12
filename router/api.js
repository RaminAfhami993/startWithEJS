const express = require('express');
const router = express.Router();
const article = require('./article')
const blogger = require('./blogger')
const comment = require('./comment')



function logger1(req, res, next) {
    console.log(req.url);

    res.send("middle")
};

router.use('/blogger', blogger)
router.use('/article', article)
router.use('/comment', comment)




















function logger() {
    return function (req, res, next) {
        console.log(req.url);
        next()
    }
};





router.get('/ejs', logger1, logger(),(req, res) => {

    res.render('index.ejs', {
        firstName: "Reza",
        lastName: "Qolami",
        skills: ["js", "html", "css", "js", "html", "css", "js", "html", "css"]
    })
});


// router.get('/ejs', (req, res) => {

//     fs.readFile(path.join(__dirname, "public/data.json"), "utf8", function(err, data) {
//         if (err) return res.status(400).send("Something went wrong!!!")

//         res.render('index.ejs', JSON.parse(data))
//     })

// });


router.get('/home', (req, res) => {
    res.render('pages/home', {
        user: {
            firstName: "Ali",
            lastName: "Rezaee"
        }
    })
})

router.get('/about', (req, res) => {
    res.render('pages/about', {
        user: {
            firstName: "Ali",
            lastName: "Rezaee"
        }
    })
});



router.get("/user/:id", (req, res) => {
    // console.log(req.params);
    // res.send(req.params.id);

    fs.readFile(path.join(__dirname, "public/users.json"), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send("OPPPS! Something went wrong");
        };

        data = JSON.parse(data);

        user = data.find(x => x.id == req.params.id);

        if (!user) return res.status(404).send("User not found!!!");

        res.render('pages/home', user)
    })

})

router.get('/user', logger(), (req, res) => {
    res.status(201).send({
        msg: "Created successfully."
    })
})







module.exports = router;