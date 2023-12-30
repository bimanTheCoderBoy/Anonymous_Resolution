const User=require("../models/User")
class UserService{
    static async createUser({email}){
        try {
            const isAlreadyUser=await User.findOne({email});
            if(!isAlreadyUser){
            const user=await User.create({email})
            user.save();
            }
        } catch (error) {
            throw new Error("Creating User Error")
        }
       
    }


    //get your saved resolution
    static async getYourSavedResolutions({userId}){
        const user=await User.findById(userId).populate('saved');
        const resolutions=user.saved;
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
}

module.exports=UserService