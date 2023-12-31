const Errorx = require("../utils/error/customError")
const ThoughtService = require("../services/thoughtService")
const getThoughts = async (req, res, next) => {
    try {
        console.log(req.params.id);
        const thoughts = await ThoughtService.getThoughts(req.params.id)
        res.json({ thoughts })
    } catch (error) {
        next(new Errorx("Error getting Thoughts", 500))
    }

}


const putThought = async (req, res, next) => {
    try {
        await ThoughtService.putThought(req.body)
        res.send("done")
    } catch (error) {
        next(new Errorx("Error putting your Thought", 500))
    }
}


const deleteThought = async (req, res, next) => {
    try {
        await ThoughtService.deleteThought(req.body)
        res.send("done")
    } catch (error) {
        next(new Errorx("Error deleting Thought", 500))
    }

}

module.exports = { getThoughts, putThought, deleteThought }