const express = require("express");

const router = express.Router();

const Class = require("../models/classes")

router.get('/healt', async (req, res) => {
    try {
        res.send('class api is running')
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})


router.get('/all', async (req, res) => {
    try {
        const classes = await Class.find()
        res.send(classes)
    } catch(err) {
        console.log(err)
        res.send(err)
    }
})



module.exports = router;