const express = require("express")
const axios = require("axios")
const cors = require("cors")
const sqlite3 = require("sqlite3").verbose()
const path = require("path")
const rateLimit = require("express-rate-limit")

const app = express()
const PORT = 5001
const API_KEY = "d3eabc3a"

app.use(cors())
app.use(express.json())

const limiter = rateLimit({
    windowMs: 1000,
    max: 10,
    message: { error: "Demasiadas solicitudes, intenta nuevamente más tarde" },
    headers: true,
})

const db = new sqlite3.Database(path.join(__dirname, 'movies.db'), (err) => {
    if (err) {
        console.error("Error al conectar con la base de datos:", err.message)
    } else {
        console.log("Conectado a la base de datos SQLite")
    }
})

app.get("/movies", limiter, async (req, res) => {
    const { query } = req.query

    if (!query) {
        return res.status(400).json({ error: "Es necesario un termino de busqueda" })
    }

    try {
        const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)

        if (response.data.Response === "False") {
            return res.status(404).json({ error: "No se encontraron resultados" })
        }

        res.json(response.data)
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los datos de la API OMDb" })
    }
})

app.get("/movies/favorites", (req, res) => {
    const query = `SELECT * FROM favorites`

    db.all(query, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: "Error al obtener las películas favoritas" })
        }
        res.status(200).json({ movies: rows })
    })
})

app.post("/movies", (req, res) => {
    const movie = req.body

    if (!movie || !movie.Title || !movie.Year) {
        return res.status(400).json({ error: "Se requieren Title y Year" })
    }

    const insertQuery = `INSERT INTO favorites (Title, Year, Released, Runtime, Poster) VALUES(?, ?, ?, ?, ?)`
    db.run(insertQuery, [movie.Title, movie.Year, movie.Released, movie.Runtime, movie.Poster], function (err) {
        if (err) {
            return res.status(500).json({ error: "Error al insertar la película en la base de datos" })
        }

        res.status(201).json({ message: "Película agregada correctamente", movie })
    })
})

app.delete("/movies/favorites/:title", (req, res) => {
    const { title } = req.params

    const query = `DELETE FROM favorites WHERE Title = ?`

    db.run(query, [title], function (err) {
        if (err) {
            return res.status(500).json({ error: "Error al eliminar la película de favoritos" })
        }
        res.status(200).json({ message: "Película eliminada de favoritos" })
    })
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})