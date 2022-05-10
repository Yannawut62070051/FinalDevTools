const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const classSchema = new Schema({
    course: {
        type: String,
    },
    studyPlan: {
        type: String,
    },
    date: {
        type: String,
        // required: true
    },
    fauculty:{
        type: String,
    },
    recruit:{
        type: String,
    },
    attribute:{
        type: String,
    }

})

module.exports = mongoose.model("classes", classSchema);