const mongoose = require("mongoose")
const MovieReview = require("./MovieReviews")

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title required"]
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
        type: String,
        required: [true, "Title required"]
    },
}, { timestamps: true });

const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;