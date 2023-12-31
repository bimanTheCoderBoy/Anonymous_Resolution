const Thought = require("../models/Thought")
class ThoughtService {
    static async putThought({ resolutionId, userId, text }) {
        const thought = await Thought.create({ resolutionId, userId, text })
        thought.save()
    }

    static async getThoughts(resolutionId) {

        const a = await Thought.find({ resolutionId: resolutionId })
        console.log(a);
        return a;
    }

    static async deleteThought({ userId, thoughtId }) {

        const delthought = async () => {
            await Thought.deleteOne({ _id: thoughtId });
        }


        let thought = await Thought.findById(thoughtId);

        if (thought) {
            if (thought.userId == userId) {


                await delthought();
            } else {

                thought = await Thought.findById(thoughtId).populate('resolutionId');

                if (thought.resolutionId.creatorId == userId) {
                    await delthought();
                }
            }
        }
    }
}


module.exports = ThoughtService