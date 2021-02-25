const express = require('express');
const router = express.Router();

const generalTools = require('../tools/general-tools')



router.get('/articles', (req, res) => {

    let a = 1;

    let b = a;

    for (let index = 0; index < 10; index++) {
        let a = 1;

        let b = a;
        
    }

    let xy = 1;

    const x = generalTools.generateRandomNumber(4);

    res.send(`get all ${x} articles`)
})

router.get('/article/:id', (req, res) => {
    res.send(req.params.id)
})

router.post('/article', (req, res) => {

    res.json(req.body)
})

router.delete('/article', (req, res) => {
    res.send("delete")
})

router.put('/article', (req, res) => {
    res.send("update")
})


module.exports = router;