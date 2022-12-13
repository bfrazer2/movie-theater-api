//requiring in express & creating an express router
const express = require('express');
const { application } = require('express');
const router  = express.Router()

//Requiring in User & Show from index.js
const { User, Show } = require('../models/index')

//Including middleware so users can enter data into the body of the request
router.use(express.json())
router.use(express.urlencoded({extended: true}))

router.get("/", async (req,res) => {
    const allUsers = await User.findAll()
    res.send(allUsers)
})

router.get("/:userId", async (req,res) => {
    const userByID = await User.findByPk(req.params.userId)
    res.send(userByID)
})

router.put("/:userId/:showId", async (req,res) => {
    const user = await User.findByPk(req.params.userId)
    const show = await Show.findByPk(req.params.showId)
    await user.addShow(show)
    const watchedShows = await user.getShows()
    res.send(watchedShows)
})

router.get("/:userId/watched", async (req,res) => {
    const user = await User.findByPk(req.params.userId)
    const watchedShows = await user.getShows()
    res.send(watchedShows)
})



module.exports = router