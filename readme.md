# Movie*Buff* backend
API for project 3 (MERN), JSON Data

# End points
----
### Show all movies
movies are created, updated and destroyed on the backend
```
https://movie-buff-backend.herokuapp.com/movies
```

----

### Show specific movie details + any associated reviews
```
https://movie-buff-backend.herokuapp.com/review/_id(movie)
```
/_id refers to the movie _id found in the JSON (ex. 63b4dd71eb20346cd676399c) <br>
Reviews are created, updated and destroyed on the front end by the user

----

### Create new review
```
https://movie-buff-backend.herokuapp.com/review/
```
POST:
``` 
{ 
"rating": Number(1-100),
"comment": "String",
"title": "63b4dd71eb20346cd676399c" (movie _id, this is how the review attaches to the specific movie)
} 
```

### Update review
```
https://movie-buff-backend.herokuapp.com/review/_id(review _id)
```


### Delete review
```
https://movie-buff-backend.herokuapp.com/review/_id(review)
```
/_id refers to review _id found in JSON(ex. 63b5914e6dea18d3212cc5c5) 


## Movie Review Schema
![Screen Shot 2023-01-04 at 10 28 11 AM](https://user-images.githubusercontent.com/116116801/210589978-e1654922-9760-4557-85ae-e5fe41a63782.png)

