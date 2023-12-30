const express=require("express") 
const router=express.Router() 
const {createUser,getYourSavedResolutions,saveResolution,logout}=require("../controllers/user")


//createUser
router.post("/create", createUser )
router.post("/logout",logout);

//save a resolution
router.post("/saveresolution",saveResolution)
//get your saved resolutions
router.get("/getsavedresolutions",getYourSavedResolutions)

module.exports=router