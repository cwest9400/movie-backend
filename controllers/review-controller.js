const express = require('express');
const router = express.Router();

//model import - automatically pointing to models/index
const { MovieReview } = require('../models');
const { Movie } = require('../models');

//JSON body parser
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

//ROUTES - http://localhost:4000/reviews

//GET All reviews route - http://localhost:4000/reviews
router.get('/', async (req, res, next) => {
    try {
        const allReviews = await MovieReview.find({}).populate("movie")
        res.status(200).json(allReviews)
    } catch (err) {
        res.status(400).json({ error: err })
    }
});


//GET show route for reviews - display details - http://localhost:4000/reviews/
router.get('/:id', async (req, res, next) => {
    try {
        const foundMovie = await Movie.findById(req.params.id);
        const allReviews = await MovieReview.find({ title: req.params.id });
        res.status(200).json({ title: foundMovie, reviews: allReviews })
    } catch (err) {
        res.status(400).json({ error: err })
    }
})
