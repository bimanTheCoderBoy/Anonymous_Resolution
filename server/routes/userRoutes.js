const express=require("express") 
const router=express.Router() 
const {createUser,getYourSavedResolutions,saveResolution,likeResolution,logout}=require("../controllers/user")


//createUser
router.post("/create", createUser )
router.post("/logout",logout);

//save a resolution
router.post("/saveresolution",saveResolution)
//get your saved resolutions
router.get("/getsavedresolutions",getYourSavedResolutions)
//do like
router.put('/likeresolution',likeResolution );
module.exports=router