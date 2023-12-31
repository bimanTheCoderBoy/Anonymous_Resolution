const express = require("express")
const router = express.Router()
const { createResolution, deleteResolution, getYourResolutions, getResoluations, getSingleResolution } = require("../controllers/resolution")



//createResolution
router.post("/create", createResolution)
//delete Resolution
router.post("/delete", deleteResolution)
//get your own resolution
router.post("/ownresolutions", getYourResolutions)

router.get("/getresolutions/:userid/:num", getResoluations)

router.get("/getsingleresolution/:id", getSingleResolution);


module.exports = router