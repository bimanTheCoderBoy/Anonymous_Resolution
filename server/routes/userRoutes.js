const express = require("express")
const router = express.Router()
const { createUser, getYourSavedResolutions, saveResolution, logout, isLoggedIn } = require("../controllers/user")


//createUser
router.post("/create", createUser)
router.post("/logout", logout);


//Is logged in
router.get("/isloggedin", isLoggedIn);

//save a resolution
router.post("/saveresolution", saveResolution)
//get your saved resolutions
router.post("/getsavedresolutions", getYourSavedResolutions)

module.exports = router