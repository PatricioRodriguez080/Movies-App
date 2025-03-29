import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const MovieTableSkeleton = () => {
    return (
        <div className="overflow-x-auto p-8">
            <table className="table-auto border-collapse w-full bg-gray-600 text-white">
                <thead>
                    <tr className="bg-gray-700">
                        <th className="border border-gray-800 px-4 py-2">
                            <Skeleton height={20} width={80} />
                        </th>
                        <th className="border border-gray-800 px-4 py-2">
                            <Skeleton height={20} width={150} />
                        </th>
                        <th className="border border-gray-800 px-4 py-2">
                            <Skeleton height={20} width={80} />
                        </th>
                        <th className="border border-gray-800 px-4 py-2">
                            <Skeleton height={20} width={100} />
                        </th>
                        <th className="border border-gray-800 px-4 py-2">
                            <Skeleton height={20} width={50} />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {[...Array(6)].map((_, index) => (
                        <tr key={index} className="border border-gray-800 text-center">
                            <td className="border border-gray-800 px-4 py-2" >
                                <Skeleton height={60} width={60} />
                            </td>
                            <td className="border border-gray-800 px-4 py-2">
                                <Skeleton height={20} width={150} />
                            </td>
                            <td className="border border-gray-800 px-4 py-2">
                                <Skeleton height={20} width={80} />
                            </td>
                            <td className="border border-gray-800 px-4 py-2">
                                <Skeleton height={20} width={100} />
                            </td>
                            <td className="border border-gray-800 px-4 py-2">
                                <Skeleton height={20} width={50} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MovieTableSkeleton