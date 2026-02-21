import { Routes, Route, Link } from "react-router-dom"
import StudentList from "./pages/StudentList"
import FavouriteStudents from "./pages/FavouriteStudents"

function App() {
  return (
    <div className="container">
      <h1>Campus Tracker 🎓</h1>

      <div className="nav-links">
        <Link to="/">Students</Link>
        <Link to="/favourites">Favourites</Link>
      </div>

      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/favourites" element={<FavouriteStudents />} />
      </Routes>
    </div>
  )
}

export default App