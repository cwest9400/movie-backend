const express = require('express')
const router = express.Router()

//model import - automatically pointing to models/index
const { Movie } = require('../models')

//JSON body parser
router.use(express.json())
console.log(Movie)

//All movies route - /movie
router.get('/', async (req,res)=> {
    try {
        const allMovies = await Movie.find({})
        res.status(200).json(allMovies)
    } catch (err){
        res.status(400).json({error: err})
    }
})

// Get specific movie - /movie/:id - GET
router.get('/:id', async (req,res)=> {
    try {
        const foundMovie = await Movie.findById(req.params.id)
        res.status(200).json(foundMovie)
    }catch (err) {
        res.status(400).json({error: err})
    }
})

//create movie route: /movie
router.post('/', async (req, res, next)=> {
    try {
        const createdMovie = await Movie.create(req.body)
        console.log(createdMovie)
        res.status(201).json(createdMovie)
    } catch(error) {
        console.error(error)
        return next(error)
    }
})

//update Movie route: /movie/:id
router.put('/:id', async (req, res, next)=>{
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true})
        console.log(updatedMovie)
        return res.status(200).json(updatedMovie)
    } catch(error) {
        console.error(error)
        return next(error)
    }
})

//delete product: /movie/:id
router.delete('/:id', async (req,res,next)=> {
    try {
        const deletedMovie = await Movie.findByIdAndDelete(req.params.id)
        console.log(deletedMovie)
        res.redirect('/products')
    } catch(error) {
        console.error(error)
        return next(error)
    }
})

module.exports = router