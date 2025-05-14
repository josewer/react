import { CAT_ENDPOINT_RANDOM_FACT, CAT_ENDPOINT_RANDOM_IMAGE } from "../Constants"

export const getRandomFact = async () => {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const data = await res.json()
    return data.fact
}


export const getRandomImg = async ( {fact}) => {

    const threeWord = fact.split(' ', 3).join(' ')

    const res = await fetch(`${CAT_ENDPOINT_RANDOM_IMAGE}${threeWord}?size=50&color=red&json=true`)
    const data = await res.json()
    return data.url
}