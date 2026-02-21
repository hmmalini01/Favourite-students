import { createContext, useState } from "react"

export const StudentContext = createContext()

export const StudentProvider = ({ children }) => {
  const students = [
    { id: 1, name: "Prakash", roll: 101 },
    { id: 2, name: "Monesh", roll: 102 },
    { id: 3, name: "Vignesh", roll: 103 },
    { id: 4, name: "Navira", roll: 104 }
  ]

  const [favourites, setFavourites] = useState([])

  const addFavourite = (student) => {
    const exists = favourites.find((fav) => fav.id === student.id)
    if (!exists) {
      setFavourites([...favourites, student])
    }
  }

  const removeFavourite = (id) => {
    setFavourites(favourites.filter((student) => student.id !== id))
  }

  return (
    <StudentContext.Provider
      value={{ students, favourites, addFavourite, removeFavourite }}
    >
      {children}
    </StudentContext.Provider>
  )
}