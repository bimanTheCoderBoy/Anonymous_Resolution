const Resolution = require("../models/Resolution");
const User=require("../models/User")
class UserService{
    static async createUser({email}){
        try {
            let user=await User.findOne({email});
            if(!user){
             user=await User.create({email})
            user.save();
            
            }
            return user
        } catch (error) {
            throw new Error("Creating User Error")
        }
       
    }


    //get your saved resolution
    static async getYourSavedResolutions({userId}){
        const user=await User.findById(userId).populate(['saved','grows']);
        let resolutions=user.saved;
        let liked
        resolutions=resolutions.map((ele)=>{

            return {
                ...ele,
                isSaved:true,

            }
        })

        return resolutions;
    }

    //save resolution
   static async saveResolution({userId,resolutionId}){
        await User.updateOne({_id:userId},{
            $push:{
                saved:resolutionId
            }
        })
   }
   //like resolution
   static async likeResolution({userId,resolutionId}){
    const userUpdate= User.updateOne({_id:userId},{
        $push:{
            grows:resolutionId
        }
    })
    const resolution=await Resolution.findById(resolutionId)
    const resolutionUpdate=Resolution.updateOne({_id:resolutionId},{grows:resolution.grows+1});
   await Promise.all([userUpdate,resolutionUpdate])
}
}

module.exports=UserService