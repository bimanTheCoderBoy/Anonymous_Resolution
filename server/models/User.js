const mongoose=require("mongoose")
const generateUniqueCode = () => {
    // Generate a random 7-digit number
    return "Anonymous"+Math.floor(1000000 + Math.random() * 9000000);
  };
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        default:generateUniqueCode
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },
    saved:{
      type:[mongoose.Schema.Types.ObjectId],
      ref:"Resolution"
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;