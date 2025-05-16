import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact, getRandomImg } from './services/facts'
import { useCatImg } from './hooks/useCatImg'
import { useCatFact } from './hooks/useCatFact'

export function App() {
    const {fact, refreshFact} =  useCatFact()
    const { imageUrl } = useCatImg({ fact })

    return (
        <main>
            <h1>App de gatitos</h1>
            <button onClick={refreshFact}>Otro gatito</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img width="400px" height="400px" src={imageUrl} alt={`Imagen generada con la palabra ${fact?.split(' ')[0]}`} />}
        </main>
    )

}