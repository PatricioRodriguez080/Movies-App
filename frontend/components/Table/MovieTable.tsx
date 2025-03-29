import StarIcon from "./StarIcon"

interface MovieTableProps {
    movies: Movie[]
}

const MovieTable = ({ movies }: MovieTableProps) => {

    return movies.length === 0 ? (
        <div className="h-40 flex justify-center items-center">
            <p className="text-center text-gray-400 mt-4">Ingrese nombre para ver resultados</p>
        </div>
    ) : (
        <div className="overflow-x-auto p-8">
            <table className="table-auto border-collapse w-full bg-blueCustom-100 text-white">
                <thead>
                    <tr className="bg-blueCustom-200">
                        <th className="border border-gray-800 px-4 py-2">Imagen</th>
                        <th className="border border-gray-800 px-4 py-2">Título</th>
                        <th className="border border-gray-800 px-4 py-2">Año</th>
                        <th className="border border-gray-800 px-4 py-2">Duración</th>
                        <th className="border border-gray-800 px-4 py-2">Favorito</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie, index) => (
                        <tr key={index} className="border border-gray-800 text-center">
                            <td className="border border-gray-600 px-4 py-2 flex items-center justify-center">
                                <img src={movie.Poster} alt={movie.Title} className="w-16 h-24 object-cover" />
                            </td>
                            <td className="border border-gray-800 px-4 py-2">{movie.Title}</td>
                            <td className="border border-gray-800 px-4 py-2">{movie.Year}</td>
                            <td className="border border-gray-800 px-4 py-2">{movie.Runtime || "Desconocido"}</td>
                            <td className="border border-gray-800 px-4 py-2">
                                <StarIcon movie={movie} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MovieTable