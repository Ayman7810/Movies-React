export const ALLMOVIES = 'ALLMOVIES'
export const MoviesApi='https://api.themoviedb.org/3/movie/popular?api_key=df350d9bd59aab33095f873f90daf980&language=ar&page=1'
export const MOVIE = 'MOVIE'
export const MOVIESEARCH = word => `https://api.themoviedb.org/3/search/movie?api_key=df350d9bd59aab33095f873f90daf980&query=${word}&language=ar`
export const MOVIEPAGE = page =>  `https://api.themoviedb.org/3/movie/popular?api_key=df350d9bd59aab33095f873f90daf980&language=ar&page=${page}`
export const MOVIEDITELS = id =>  `https://api.themoviedb.org/3/movie/${id}?api_key=df350d9bd59aab33095f873f90daf980&language=ar`