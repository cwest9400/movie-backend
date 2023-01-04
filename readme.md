# Movie*Buff* backend
API for project 3 (MERN), JSON Data

## End points
### Show all movies
https://movie-buff-backend.herokuapp.com/movies
- movies are created, updated and destroyed on the backend

### show specific movie details + any associated reviews
https://movie-buff-backend.herokuapp.com/review/_id(movie) <br>
/_id refers to movie _id (ex. 63b4dd71eb20346cd676399c) 
- reviews are created, updated and destroyed on the front end by the user

### Create new review
https://movie-buff-backend.herokuapp.com/review/ <br>
POST:
``` 
{ 
"rating": Number,
"comment": "String",
"title": "63b4dd71eb20346cd676399c" (movie _id, this is how the review attaches to the specific movie)
} 
```

### Update Review
-pending info


### Delete review
https://movie-buff-backend.herokuapp.com/review/_id(review) <br>
/_id refers to review _id (ex. 63b5914e6dea18d3212cc5c5) 

