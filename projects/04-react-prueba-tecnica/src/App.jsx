import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact , getRandomImg } from './services/facts'

export function App() {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        getRandomFact().then(setFact)
    }, [] ) 


    useEffect(() => {
         if (!fact) return
        setImageUrl(null) // limpia imagen previa
        getRandomImg(fact).then(setImageUrl)
    }, [fact])

    const handleClick = () => {
         getRandomFact().then(setFact)
    }

    return (
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handleClick}>Otro gatito</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img width="400px" height="400px" src={imageUrl} alt={`Imagen generada con la palabra ${fact?.split(' ')[0]}`} />}
        </main>
    )

}