

function ListOfMovies({ movies }) {
    return (
        <ul className="movies">
            {
                movies.map(movie => (
                    <li className="movie" key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <img src={movie.poster} alt={movie.title} />
                    </li>
                ))
            }
        </ul>
    )
}

function NoMoviesresults() {
    return (
        <p>No hay resultados para esta película</p>
    )
}

export function Movies({movies}) {

    const hasMovies = movies?.size != 0;

    return (
        hasMovies
            ? <ListOfMovies movies={movies} />
            : <NoMoviesresults/>
    )

}