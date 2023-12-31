const Resolution = require("../models/Resolution");
const User = require("../models/User");
class ResolutionService {
    static async createResolution({ creatorId, resolutions, thought }) {

        const data = {
            resolutions,
            thought
        }
        const resolution = await Resolution.create({ creatorId, data });
        resolution.save();

    }


    static async deleteResolution({ resolutionId }) {

        await Resolution.deleteOne({ _id: resolutionId })

    }

    static async getYourResolutions({ creatorId }) {
        let resolutions = await Resolution.find({ "creatorId": creatorId });
        resolutions = await ResolutionService.mapResolution(creatorId, resolutions)
        return resolutions;
    }


    static async mapResolution(userId, resolutions) {
        const user =await User.findById(userId);
        if (!user) throw new Error('No such user');
            // console.log(user);
            //console.log(user);

        resolutions =  resolutions.map((ele) => {
                //console.log(ele);
            
              const  isSaved = user.saved.includes(ele._id);
              const  isLiked = user.grows.includes(ele._id);
               // console.log( user.saved.includes(ele._id));
            return {
                ...ele,
                isSaved,
                isLiked
            }
        })

        return resolutions
    }

    static async getSingleResolutions(resId) {
        const res = await Resolution.findOne({ _id: resId });
        return res;
    }



    static async getResoluations({userid,num}) {
        let resolutions = await Resolution.find({}).sort( "-createdAt").skip(num).limit(num + 50);
        // console.log(resolutions);
        resolutions=await ResolutionService.mapResolution(userid, resolutions)
        return resolutions;
    }

}


module.exports = ResolutionService