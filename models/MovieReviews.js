const mongoose = require("mongoose")
const Movie = require("./Movie")

const MovieReviewSchema = new mongoose.Schema({
   
    rating: {
        type: Number,
        required: false,
        minlegnth: 1,
        maxlength: 100
    },
    comment: {
        type: String,
        required: false,
        max: 250
    },
    //relationship to movie
    title: {
        type: mongoose.Types.ObjectId,
        ref: "Movie",
    },

    //Triet's stuff
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }
  
}, {timestamps: true})

const MovieReview = mongoose.model("Review", MovieReviewSchema)
module.exports = MovieReview