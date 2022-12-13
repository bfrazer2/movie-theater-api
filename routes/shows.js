//requiring in express & creating an express router
const express = require('express');
const { application } = require('express');
const router  = express.Router({mergeParams: true})

//requiring in Show from index.js
const { Show } = require('../models/index')

//Including middleware so users can enter data into the body of the request
router.use(express.json())
router.use(express.urlencoded({extended: true}))

router.get("/", async (req,res) => {
    const allShows = await Show.findAll()
    res.send(allShows)
})

router.get("/:showId", async (req,res) => {
    const showByID = await Show.findByPk(req.params.showId)
    res.send(showByID)
})

router.get("/genre/:genre", async (req,res) => {
    const showsByGenre = await Show.findAll({
        where: {
            genre: req.params.genre
        }
    })
    res.send(showsByGenre)
})

router.put("/:showId/watched", async (req,res) => {
    const showByID = await Show.findByPk(req.params.showId)
    await showByID.update({
        rating: req.body.rating
    })
    res.send(showByID)
})

router.put("/:showId/updates", async (req,res) => {
    const showByID = await Show.findByPk(req.params.showId)
    await showByID.update({
        status: req.body.status
    })
    res.send(showByID)
})

router.delete("/:showId", async (req,res) => {
    const showByID = await Show.findByPk(req.params.showId)
    await showByID.destroy()
    res.send(`Show with ID ${req.params.showId} destroyed successfully.`)
    
})


module.exports = router