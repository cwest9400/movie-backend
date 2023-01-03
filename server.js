// import express
const express = require("express");
// create application object
const app = express();

const cors = require('cors')
const morgan = require('morgan')

const movieController = require('./controllers/movie-controller')
const reviewController = require('./controllers/review-controller')


// initialize .env variables
require("dotenv").config();
require("./config/db.connection")
// pull PORT from .env, give default value of 4000 and establish DB Connection

const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/movie', movieController)
app.use('/review', reviewController)
app.get('/', (req, res)=>res.redirect('/movie'))

app.listen(PORT, ()=> {
    console.log(`listening on: ${PORT}`)
})