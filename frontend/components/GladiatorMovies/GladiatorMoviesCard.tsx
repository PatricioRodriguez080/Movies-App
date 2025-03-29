interface GladiatorMoviesProps {
    movie: Movie
}

const GladiatorMoviesCard = ({ movie }: GladiatorMoviesProps) => {
    return (
        <div className="bg-blueCustom-100 p-4 rounded-lg flex flex-col items-center justify-center text-center">
            <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-48 h-64 object-cover rounded-lg"
            />
            <h2 className="text-lg font-bold mt-2 text-white">{movie.Title}</h2>
            <p className="text-cremeCustom">{movie.Year}</p>
        </div>
    )
}

export default GladiatorMoviesCard