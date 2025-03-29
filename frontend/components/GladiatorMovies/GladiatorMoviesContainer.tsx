"use client"
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination, Autoplay } from "swiper/modules"
import { toast } from "react-toastify"
import GladiatorMoviesCard from "./GladiatorMoviesCard"
import { getMoviesByQuery } from "@/src/services/moviesService"

const GladiatorMoviesContainer = () => {
    const [gladiatorMovies, setGladiatorMovies] = useState<Movie[]>([])

    useEffect(() => {
        const fetchGladiatorMovies = async () => {
            try {
                const movieData = await getMoviesByQuery("Gladiator")
                setGladiatorMovies(movieData)
            } catch (error: any) {
                toast.error(`Error al obtener las películas: ${error.message}`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                })
            }
        }

        fetchGladiatorMovies()
    }, [])

    return (
        <div className="p-8">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {gladiatorMovies.map((movie, index) => (
                    <SwiperSlide key={index}>
                        <GladiatorMoviesCard movie={movie} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default GladiatorMoviesContainer