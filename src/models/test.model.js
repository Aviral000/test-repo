const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
    testNumber: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        default: "LOL"
    }
})

const Test = mongoose.model("Test", testSchema);

module.exports = Test;