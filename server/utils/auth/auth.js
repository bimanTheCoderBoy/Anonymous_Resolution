const Errorx = require("../error/customError")

module.exports =(req,res,next)=>{
    if(req.user)
    next()
    else    
        next(new Errorx("NOT AUTHENTICATED",404))
}