const express=require("express") 
const router=express.Router() 
const {createUser,getYourSavedResolutions,saveResolution}=require("../controllers/user")


//createUser
router.post("/create", createUser )

//save a resolution
router.post("/saveresolution",saveResolution)
//get your saved resolutions
router.get("/getsavedresolutions",getYourSavedResolutions)

module.exports=router