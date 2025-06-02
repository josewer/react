
import { useState, useEffect } from 'react'


export function useMovies({ search }) {

    const [movies, setMovies] = useState()

    useEffect(() => {

        console.log('holaaa')

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

    return { movies: mappedMovies }
}
