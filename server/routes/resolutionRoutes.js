const express=require("express") 
const router=express.Router() 
const {createResolution, deleteResolution, getYourResolutions,getResoluations}=require("../controllers/resolution")



//createResolution
router.post("/create",createResolution)
//delete Resolution
router.delete("/delete",deleteResolution)
//get your own resolution
router.get("/ownresolutions",getYourResolutions)

router.get("/getResoluations/:num",getResoluations)


module.exports=router