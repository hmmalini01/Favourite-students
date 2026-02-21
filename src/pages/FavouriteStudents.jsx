import { useContext } from "react"
import { StudentContext } from "../context/StudentContext"

function FavouriteStudents() {
  const { favourites, removeFavourite } = useContext(StudentContext)

  return (
    <>
      <h2>Favourite Students</h2>

      {favourites.length === 0 ? (
        <p className="empty-message">
          No favourite students added yet
        </p>
      ) : (
        favourites.map((student) => (
          <div key={student.id} className="card">
            <div>
              <h3>{student.name}</h3>
              <p>Roll: {student.roll}</p>
            </div>

            <button
              className="remove-btn"
              onClick={() => removeFavourite(student.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </>
  )
}

export default FavouriteStudents