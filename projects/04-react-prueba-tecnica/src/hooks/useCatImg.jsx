import { useState , useEffect} from "react"
import { getRandomImg } from '../services/facts.js'

export function useCatImg({fact}) {

        const [imageUrl, setImageUrl] = useState()

        useEffect(() => {
            if (!fact) return
            getRandomImg({fact}).then(setImageUrl)
        }, [fact])

        return { imageUrl : imageUrl }
}
  