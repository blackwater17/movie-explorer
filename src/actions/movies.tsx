
// this will be just an argument
export const addMovie = (
    {
        movie_name = "Unknown_Movie_Name"
    } = {}
    ) => ({
        type: "ADD_MOVIE",
        move: {
            movie_name,
        }
        })

export const addAllMovies = (    
    movies = []
) => ({
    type: "ADD_ALL_MOVIES",
    movies
})
