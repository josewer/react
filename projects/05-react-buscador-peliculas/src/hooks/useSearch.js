import { useState, useEffect } from "react"

export function useSearch() {

    const [search, setSearch] = useState()

    useEffect(() => {

    console.log(search)

    }, [search])

    return { search, setSearch }
}
