import { useEffect, useState } from 'react'
import './App.css'


export function App() {

    const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
    const CAT_ENDPOINT_RANDOM_IMAGE = 'https://cataas.com/cat/says/'

    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                // de esta forma lo que hago es decir que del json (data) quiero el fact.
                // otra forma es const fact = data.fact
                const { fact } = data
                setFact(fact)
            }
            )
    }, []
    )

    useEffect(() => {

        if (!fact) return

        const firstWord = fact.split(' ')[0]
        console.log(firstWord)

        fetch(`${CAT_ENDPOINT_RANDOM_IMAGE}${firstWord}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(data => setImageUrl(data.url))
    }, [fact])

    return (
        <main>
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Imagen generada con la palabra ${fact.split(' ')[0]}`} />}
        </main>
    )

}