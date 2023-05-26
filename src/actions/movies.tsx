export const addMovie = (    
    movie = {}
) => ({
    type: "ADD_MOVIE",
    movie
})

export const addAllMovies = (    
    movies = []
) => ({
    type: "ADD_ALL_MOVIES",
    movies
})