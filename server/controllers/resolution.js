const ResolutionService = require("../services/resolution")
const Errorx = require("../utils/error/customError")

//Jb 
const Resolution = require("../models/Resolution");

const createResolution = async (req, res, next) => {
   try {
      await ResolutionService.createResolution(req.body);
      res.send("done")
   } catch (error) {
      next(new Errorx("Error ocurred while creating resolution ", 500))
   }


}


const deleteResolution = async (req, res, next) => {
   try {
      console.log(req.body);
      await ResolutionService.deleteResolution(req.body);
      res.send("done111")
   } catch (error) {
      next(new Errorx("Error ocurred while deleting resolution ", 500))
   }
}


const getYourResolutions = async (req, res, next) => {
   try {
      const resolutions = await ResolutionService.getYourResolutions(req.body)
      res.json({
         resolutions
      })
   } catch (error) {
      next(new Errorx("Error getting your resolutions ", 500))
   }
}

const getResoluations = async (req, res, next) => {
   try {
      const resolutions = await ResolutionService.getResoluations(req.params)
      res.json({
         resolutions
      })
   } catch (error) {
      next(new Errorx("Error getting your resolutions ", 500))
   }
}


const getSingleResolution = async (req, res, next) => {
   try {
      const resolutions = await ResolutionService.getSingleResolutions(req.params.id);
      res.json({
         data: resolutions
      })
   } catch (error) {
      next(new Errorx('Error in fetching tshe single resolution', 400));
   }
}









module.exports = { createResolution, deleteResolution, getYourResolutions, getResoluations, getSingleResolution }