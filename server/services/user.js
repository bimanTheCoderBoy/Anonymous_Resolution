const Resolution = require("../models/Resolution");
const User = require("../models/User");
const ResolutionService = require("./resolution");
class UserService {
    static async createUser({ email }) {
        try {
            let user = await User.findOne({ email });
            if (!user) {
                user = await User.create({ email })
                user.save();

            }
            return user
        } catch (error) {
            throw new Error("Creating User Error")
        }

    }


    //get your saved resolution
    static async getYourSavedResolutions({ userId }) {
        const user = await User.findById(userId).populate('saved');
        let resolutions = user.saved;
        resolutions = await ResolutionService.mapResolution(userId, resolutions);

        return resolutions;
    }

    //save resolution
    static async saveResolution({ userId, resolutionId }) {
        const user = await User.findById(userId);
        const isSaved= user.saved.includes(resolutionId);
        
        if (!isSaved) {
            const userUpdate =await User.findByIdAndUpdate(userId,{ $push: { saved:resolutionId}})
    
        } 
        else {
            const userUpdate =await User.findByIdAndUpdate(userId,{ $pull: { saved:resolutionId}})
        }
    }
    //like resolution
    static async likeResolution({ userId, resolutionId }) {
        // console.log({ userId, resolutionId });
        const user = await User.findById(userId);
        const isLiked = user.grows.includes(resolutionId);
        // console.log(isLiked);
        if (!isLiked) {
            const userUpdate =await User.findByIdAndUpdate(userId,{ $push: { grows:resolutionId}})
       
            const resolutionUpdate =await Resolution.findByIdAndUpdate( resolutionId, {$inc: { grows: 1 }});
            // await Promise.all([userUpdate,resolutionUpdate])
            //    console.log(resolutionUpdate);
        } 
        else {
            const userUpdate =await User.findByIdAndUpdate(userId,{ $pull: { grows:resolutionId}})
           
            const resolutionUpdate =await Resolution.findByIdAndUpdate( resolutionId, {$inc: { grows: -1 }});
        }
    }
}

module.exports = UserService