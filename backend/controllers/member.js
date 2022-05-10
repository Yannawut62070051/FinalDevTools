const express = require("express");

const router = express.Router();

const Member = require("../models/members")

router.get('/healt', async (req, res) => {
    try {
        res.send('member api is running')
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})


router.get('/all', async (req, res) => {
    try {
        const members = await Member.find()
        res.send(members)
    } catch(err) {
        console.log(err)
        res.send(err)
    }
})



module.exports = router;