const express=require("express") 
const router=express.Router() 
const {createResolution, deleteResolution, getYourResolutions}=require("../controllers/resolution")



//createResolution
router.post("/create",createResolution)
//delete Resolution
router.delete("/delete",deleteResolution)
//get your own resolution
router.get("/ownresolutions",getYourResolutions)



module.exports=router