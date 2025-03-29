import GladiatorMoviesContainer from "@/components/GladiatorMovies/GladiatorMoviesContainer"
import SearchContainer from "@/components/Search/SearchContainer"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl text-center mt-8">Movies App</h1>
      <SearchContainer />
      <GladiatorMoviesContainer />

      <ToastContainer />
    </div>
  )
}
