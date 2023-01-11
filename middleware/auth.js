///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// Require the needed npm packages
const passport = require('passport')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { Strategy, ExtractJwt } = require('passport-jwt')

// User model import, accessed by JWT verify function
const User = require('../models/User')

///////////////////////////////
// CONFIGURATION
////////////////////////////////

const secret = process.env.JWT_SECRET || 'yolo unique secrets'

// Minimum required options for passport-jwt

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret
}

///////////////////////////////
// AUTHENTICATION FUNCTIONALITY
////////////////////////////////

const verify = async (jwt_payload, done) => {

    try {
        const user = await User.findById(jwt_payload.id)
        return done(null, user)
    }catch(err){
				// If there was an error, we pass it to done so it is eventually handled
		    // by error handlers in Express
       return done(err)
    }
}
 
const strategy = new Strategy(opts,verify)

passport.use(strategy)

// Initialize the passport middleware based on the above configuration
passport.initialize()

// variable that holds the authenticate method so we can
// export it for use in our routes
const requireToken = passport.authenticate('jwt', {session: false})

// function that takes the request and a user document
// and uses them to create a token to send back to the user
const createUserToken = (req, user) => {
	  

		if(
			!user ||
			!req.body.password ||
			!bcrypt.compareSync(req.body.password, user.password)
			){
	        const error = new Error("The provided username or password is incorrect")
	        error.statusCode = 422
	        throw error
    }

		// If no error was thrown, we create the token from user's id and
	  // return the token
    return jwt.sign({id: user._id},secret,{expiresIn: 36000 })
}

const handleValidateOwnership = (req, document) => {
	const ownerId = document.owner._id || document.owner;
	
	  // Check if the current user is also the owner of the document
	
	  if (!req.user._id.equals(ownerId)) {
	  throw Error("Unauthorized Access");
	} else {
	  return document;
	}
  };
  


module.exports = {
    requireToken,
    createUserToken,
	handleValidateOwnership
}
