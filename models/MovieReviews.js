const mongoose = require("mongoose")
const Movie = require("./Movie")

const MovieReviewSchema = new mongoose.Schema({
   
    rating: {
        type: Number,
        required: true,
        minlegnth: 1,
        maxlength: 100
    },
    comment: {
        type: String,
        required: true,
        max: 250
    },
    //relationship to movie
    title: {
        type: mongoose.Types.ObjectId,
        ref: "Movie",
    },
}, {timestamps: true})

const MovieReview = mongoose.model("Review", MovieReviewSchema)
module.exports = MovieReview