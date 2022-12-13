//requiring in express & creating an express router
const express = require('express');
const { application } = require('express');
const router  = express.Router

//Including middleware so users can enter data into the body of the request
router.use(express.json())
router.suse(express.urlencoded({extended: true}))

router.get("/", (req,res) => {
    const allShows = Router.findAll()
    res.send(allShows)
})

module.exports = { router }