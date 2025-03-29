"use client"
import { useState } from "react"

interface SearchBarProps {
    handleSearch: (query: string) => void
}

const SearchBar = ({ handleSearch }: SearchBarProps) => {
    const [query, setQuery] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (query.trim()) {
            handleSearch(query)
        }
    }

    return (
        <form className="flex justify-center mt-6" onSubmit={handleSubmit}>
            <input
                className="bg-blueCustom-200 text-white text-sm rounded-lg block p-2.5"
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Ingrese película"
            />
            <button className="bg-blueCustom-200 rounded-lg text-white cursor-pointer p-2.5 ml-1.5" type="submit">
                Buscar
            </button>
        </form>
    )
}

export default SearchBar