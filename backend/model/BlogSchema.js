const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    blog: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model("Blog", BlogSchema)