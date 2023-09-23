import mongoose from "mongoose";

const featureSchema = new mongoose.Schema({

    title : {
        type : String,
        required : [true, 'Title is missing.']
    },
    description : {
        type : String,
        required : [true, 'Description is missing.']
    },
    route : {
        type : String,
        required : [true, 'Route is missing.']
    },
    isFeatured: {
        type : Boolean,
        default : true
    }
});


// Module Export
export default mongoose.model('Feature', featureSchema);