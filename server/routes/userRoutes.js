const express = require("express")
const router = express.Router()
const { createUser, getYourSavedResolutions, saveResolution, likeResolution, logout, isLoggedIn } = require("../controllers/user")


//createUser
router.post("/create", createUser)
router.get("/logout", logout);


//Is logged in
router.get("/isloggedin", isLoggedIn);

//save a resolution
router.post("/saveresolution", saveResolution)
//get your saved resolutions
router.post("/getsavedresolutions", getYourSavedResolutions)
//do like
router.put('/likeresolution', likeResolution);
module.exports = router