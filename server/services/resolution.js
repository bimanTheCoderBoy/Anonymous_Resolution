const Resolution =require("../models/Resolution")
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


}


module.exports= ResolutionService