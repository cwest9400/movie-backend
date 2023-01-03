const express = require('express')
const router = express.Router()

//model import - automatically pointing to models/index
const { Movie } = require('../models')

//JSON body parser
router.use(express.json())
console.log(Movie)

//ROUTES - http://localhost:4000/movie

//All movies route - http://localhost:4000/movie
router.get('/', async (req,res)=> {
    try {
        const allMovies = await Movie.find({})
        res.status(200).json(allMovies)
    } catch (err){
        res.status(400).json({error: err})
    }
})

// Get specific movie - http://localhost:4000/movie/:id - GET
router.get('/:id', async (req,res)=> {
    
    try {

        const foundProduct = await Product.findById(req.params.id)
        res.status(200).json(foundProduct)

    }catch (err) {
        res.status(400).json({error: err})
    }
})
