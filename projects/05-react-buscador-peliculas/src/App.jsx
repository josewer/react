
import { useMovies } from './hooks/useMovies.jsx';
import { useSearch } from './hooks/useSearch.js';
import { Movies } from './Components/Movies.jsx'
import { useEffect } from 'react';

import './App.css'


function App() {

  const { search , setSearch } = useSearch()
  const { movies: mappedMovies  } = useMovies({search})

  const handleSubmit = (event) => {

    event.preventDefault()
    const fields = Object.fromEntries(
      new window.FormData(event.target)
    )

    setSearch(fields.inputSearch)
  }

  return (
    <div className='page'>

      <h1>
        Buscador de películas
      </h1>

      <header>
        <form className='form' onSubmit={handleSubmit}>
          <input name='inputSearch' placeholder='Titanic, Avatar, Hercules...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App
