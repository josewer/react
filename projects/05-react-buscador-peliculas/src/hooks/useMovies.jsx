
import { useState, useEffect } from 'react'


export function useMovies({ search }) {

    const [movies, setMovies] = useState()

    useEffect(() => {

        if (search) {
            fetch(`https://www.omdbapi.com/?apikey=6578edfe&s=${search}`)
                .then(res => res.json())
                .then(data => setMovies(data.Search || []))
        }
    }, [search])


    const mappedMovies = movies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        type: movie.Type,
        poster: movie.Poster
    })) || [];

    mappedMovies.sort((a, b) => {
        if (a.year < b.year) {
            return -1;
        }
        if (a.year > b.year) {
            return 1;
        }
        return 0;
    });

    return { movies: mappedMovies }
}
