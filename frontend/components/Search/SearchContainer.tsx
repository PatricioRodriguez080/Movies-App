"use client"
import { useState } from "react"
import { toast } from "react-toastify"
import SearchBar from "./SearchBar"
import MovieTable from "../Table/MovieTable"
import MovieTableSkeleton from "@/src/skeletons/MovieTableSkeleton"
import { getMoviesByQuery } from "@/src/services/moviesService"

const SearchContainer = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const handleSearch = async (searchQuery: string) => {
        setLoading(true)
        try {
            const movieData = await getMoviesByQuery(searchQuery)
            setMovies(movieData)
        } catch (error: any) {
            toast.error(`Error: ${error.message}`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <SearchBar handleSearch={handleSearch} />
            {loading ? <MovieTableSkeleton /> : <MovieTable movies={movies} />}
        </div>
    )
}

export default SearchContainer