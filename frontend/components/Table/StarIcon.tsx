import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons"
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons"
import { useEffect, useState } from "react"
import { addFavoriteMovie, getFavoriteMovies, removeFavoriteMovie } from "@/src/services/favoriteService"

interface StarIconProps {
    movie: Movie
}

const StarIcon = ({ movie }: StarIconProps) => {
    const [isFavorite, setIsFavorite] = useState<boolean>(false)

    useEffect(() => {
        const fetchFavorites = async () => {
            const favorites: Movie[] = await getFavoriteMovies()
            const isAlreadyFavorite: boolean = favorites.some(fav => fav.Title === movie.Title)
            setIsFavorite(isAlreadyFavorite)
        }

        fetchFavorites()
    }, [movie])

    const handleFavoriteButton = async () => {
        if (isFavorite) {
            const success = await removeFavoriteMovie(movie.Title)
            if (success) setIsFavorite(false)
        } else {
            const success = await addFavoriteMovie(movie)
            if (success) setIsFavorite(true)
        }
    }

    return (
        <button onClick={handleFavoriteButton}>
            <FontAwesomeIcon
                icon={isFavorite ? faStarSolid : faStarRegular}
                className="text-yellow-400 cursor-pointer"
            />
        </button>
    )
}

export default StarIcon