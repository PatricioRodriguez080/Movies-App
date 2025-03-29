const BASE_URL = "http://localhost:5001/movies"

export const getMoviesByQuery = async (query: string) => {
    const response = await fetch(`${BASE_URL}?query=${query}`)
    const data = await response.json()
    if (!response.ok) {
        throw new Error(data.error)
    }
    return data.Search || []
}