const mongoose = require("mongoose")
const MovieReview = require("./MovieReviews")

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title required"]
    },
    agerating: {
        type: String,
        required: [true, "age rating required"]
    },
    hlength: {
        type: String,
        required: [true, "hours required"]
    },
    mlength: {
        type: String,
        required: [true, "minutes required"]
    },
    image: {
        type: String,
        required: [true, "Image required"]
    },
    desc: {
        type: String,
        required: [true, "Title required"]
    },
    year: {
        type: String,
        required: [true, "date required"]
    },
    director: {
        type: String,
        required: [true, "Director name required"]
    },
    cast: {
        type: Array,
        required: [true, "Title required"]
    },
}, { timestamps: true });

const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;