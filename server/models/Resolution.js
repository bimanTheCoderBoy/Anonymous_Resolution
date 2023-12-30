const mongoose = require('mongoose');

const resolutionSchema = new mongoose.Schema({
    creatorId:{
            type: mongoose.Schema.Types.ObjectId,
            required:true,
            ref: 'User',
    },
    data: {
        type:{
            resolutions:{type:[String]},
            thought:{type:String}
        },
        required: true,
    },
    grows: {
            type: Number,
            default:0
        },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Resolution = mongoose.model('Resolution', resolutionSchema);

module.exports = Resolution;
