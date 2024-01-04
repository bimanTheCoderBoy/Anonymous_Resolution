const UserService = require("../services/user")
const Errorx = require("../utils/error/customError")

const createUser = async (req, res, next) => {
  await UserService.createUser(req.body);
  res.send("done")
}

//get your saved resolution
const getYourSavedResolutions = async (req, res, next) => {

  try {
    const resolutions = await UserService.getYourSavedResolutions(req.body)
    res.json({
      resolutions
    })
  } catch (error) {
    next(new Errorx("Error getting resolutions ", 500))
  }

}


//save a resolution
const saveResolution = async (req, res, next) => {
  try {
    await UserService.saveResolution(req.body)
    res.send("done")
  } catch (error) {
    next(new Errorx("Error getting resolutions ", 500))
  }
}

const isLoggedIn = async (req, res, next) => {
  // console.log("authenticated");
  try {
    if (req.user) {
      res.json({
        success: true,
        user: req.user,
        message: "user authenticated"
      })
    }
    else {
      next(new Errorx("Error ayaaaaaa"));
    }
  } catch (error) {
    next(new Errorx("Error ayaa",error));
  }
}

const logout = async (req, res, next) => {


  req.logout(function(err){
    if(err){return next(err)}
    res.redirect(process.env.CLIENT_URL);
})
}
//like resolution

const likeResolution = async (req, res, next) => {
  try {
    await UserService.likeResolution(req.body)
    res.send("done")
  } catch (error) {
    next(new Errorx("Error getting resolutions ", 500))
  }
}


module.exports = { createUser, getYourSavedResolutions, saveResolution, likeResolution, logout, isLoggedIn }