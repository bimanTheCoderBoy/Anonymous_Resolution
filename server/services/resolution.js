const Resolution =require("../models/Resolution");
const User = require("../models/User");
class ResolutionService{
    static async createResolution({creatorId,resolutions,thought}){
       
        const data={
            resolutions,
            thought
        }
        const resolution =await Resolution.create({creatorId,data});
        resolution.save();
        
    }


    static async deleteResolution({resolutionId}){
    
        await Resolution.deleteOne({_id:resolutionId})

    }

    static async getYourResolutions({creatorId}){
        return await Resolution.find({"creatorId": creatorId});
    }
    static async mapResolution(userId,resolutions){
        const user=User.findById(userId).populate(['saved','grows']);
        if(!user) throw new Error('No such user');
        // resolutions=resolutions.map((ele)=>{
        //     if(user.saved.contains())
        // })
    }
    static async getResoluations(num){
        const resolutions=await Resolution.find({}).sort({fieldName:"createdAt"}).skip(num).limit(num+50);
        return resolutions;
    }

}


module.exports= ResolutionService