const express = require('express');
const router = express.Router();

//model import - automatically pointing to models/index
const { MovieReview } = require('../models');
const { Movie } = require('../models');
const { handleValidateOwnership, requireToken } = require("../middleware/auth");//Triet's stuff

//JSON body parser
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

//GET All reviews route - 

router.get('/', async (req, res) => {
    try {
        const allReviews = await MovieReview.find({}).populate('owner', 'username -_id').exec()
        res.status(200).json(allReviews)
    } catch (err) {
        res.status(400).json({ error: err })
    }
});

//GET show route for reviews - display details - 
    router.get('/:id', async (req, res) => {
        try {
            const foundMovie = await Movie.findById(req.params.id)//Joshua
            console.log(foundMovie)
            const allReviews = await MovieReview.find({ title: req.params.id });
            res.status(200).json({ title: foundMovie, reviews: allReviews })
        } catch (err) {
            res.status(400).json({ error: err })
        }
    })
router.get('/:id', async (req, res) => {
    try {
        const foundMovie = await Movie.findById(req.params.id).populate("owner").exec()//Triet's stuff since "".populate"
        const allReviews = await MovieReview.find({ title: req.params.id });
        res.status(200).json(allReviews)
    } catch (err) {
        res.status(400).json({ error: err })
    }
})

router.get('/edit/:id', async (req, res) => {
    try {
        const oneReview = await MovieReview.findById(req.params.id);
        const allReviews = await MovieReview.find({ title: req.params.id });
        res.status(200).json( oneReview)
    } catch (err) {
        res.status(400).json({ error: err })
    }
})

//create route
router.post('/:id', requireToken, async (req, res) => {//Triet added requireToken
    try {
        const owner = req.user._id
        console.log(req.user)
        req.body.owner = owner
        const newReview = await MovieReview.create(req.body)
        res.status(200).json(newReview)
    } catch (err) {
        res.status(400).json({ error: err })
    }
})

//update review
router.put('/edit/:id', requireToken,async (req, res) => {
    try {
        handleValidateOwnership(req, await MovieReview.findById(req.params.id))
        const movieReview = await MovieReview.findByIdAndUpdate(req.params.id, req.body, { new: true })
        console.log(movieReview)
        res.status(200).json(movieReview)
    } catch (err) {
        res.status(400).json({ error: err })
    }
})

//delete route
router.delete('/edit/:id', requireToken, async (req, res) => {
    try {
        handleValidateOwnership(req, await MovieReview.findById(req.params.id))
        const deletedReview = await MovieReview.findByIdAndDelete(req.params.id);
        const deletedReviews = await MovieReview.deleteMany({ title: req.params.id });
        res.redirect(200, '/review')

    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deletedReview = await MovieReview.findByIdAndDelete(req.params.id);
        const deletedReviews = await MovieReview.deleteMany({ title: req.params.id });
        res.redirect(200, '/movie')

    } catch (err) {
        res.status(400).json({ error: err })
    }
})
module.exports = router