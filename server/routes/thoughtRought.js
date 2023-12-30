const express=require("express") 
const router=express.Router() 
const {getThoughts,putThought,deleteThought}=require("../controllers/thougth")
router.post('/putthought',putThought)
router.get('/getthoughts',getThoughts)
router.delete('/deletethought',deleteThought)
module.exports=router