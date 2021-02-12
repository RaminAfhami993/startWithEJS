const express = require('express');
const router = express.Router();


router.use('/', logger1)
router.get('/articles', (req, res) => {
    res.send("get all")
})

router.get('/article/:id', (req, res) => {
    res.send("get single")
})

router.post('/article', (req, res) => {
    res.send("create")
})

router.delete('/article', (req, res) => {
    res.send("delete")
})

router.put('/article', (req, res) => {
    res.send("update")
})


module.exports = router;