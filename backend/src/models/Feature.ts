import mongoose from "mongoose";

const featureSchema = new mongoose.Schema({

    title : {
        type : String
    },
    route : {
        type : String
    },
    isFeatured: {
        type : Boolean,
        default : true
    }
});


// Module Export
export default mongoose.model('Feature', featureSchema);