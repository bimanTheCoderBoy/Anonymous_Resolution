const mongoose=require("mongoose")

const thoughtSchema = new mongoose.Schema({
   resolutionId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Resolution',
        required:true
   },
   userId:{
    type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
   },
   text:{type:String,required:true},
   createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  const Thought = mongoose.model('Thought', thoughtSchema);
  
  module.exports = Thought;