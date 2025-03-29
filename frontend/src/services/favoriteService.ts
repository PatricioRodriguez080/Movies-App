const BASE_URL = "http://localhost:5001/movies"

export const getFavoriteMovies = async () => {
    try {
        const response = await fetch("http://localhost:5001/movies/favorites")
        if (!response.ok) {
            throw new Error("Error al obtener favoritos")
        }

        const data = await response.json()
        if (data && Array.isArray(data.movies)) {
            return data.movies
        }

        return []

    } catch (error) {
        console.error(error)
        return []
    }
}

export const addFavoriteMovie = async (movie: Movie) => {
    try {
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                Title: movie.Title,
                Year: movie.Year,
                Runtime: movie.Runtime,
                Poster: movie.Poster,
            })
        })
        if (!response.ok) throw new Error("Error al agregar favorito")
        return true
    } catch (error) {
        console.error(error)
        return false
    }
}

export const removeFavoriteMovie = async (title: string) => {
    try {
        const response = await fetch(`${BASE_URL}/favorites/${title}`, { method: "DELETE" })
        if (!response.ok) throw new Error("Error al eliminar favorito")
        return true
    } catch (error) {
        console.error(error)
        return false
    }
}