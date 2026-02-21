import { useContext, useState } from "react"
import { StudentContext } from "../context/StudentContext"

function StudentList() {
    const { students, addFavourite } = useContext(StudentContext)
    const [search, setSearch] = useState("")

    const filtered = students.filter((student) =>
        student.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <>
            <h2>All Students</h2>

            <input
                type="text"
                placeholder="Search student..."
                className="search-box"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {filtered.map((student) => (
                <div key={student.id} className="card">
                    <div className="student-info">
                        <div className="avatar">
                            {student.name.charAt(0)}
                        </div>

                        <div>
                            <h3>{student.name}</h3>
                            <p>Roll: {student.roll}</p>
                        </div>
                    </div>

                    <button
                        className="add-btn"
                        onClick={() => addFavourite(student)}
                    >
                        ❤️ Add
                    </button>
                </div>
            ))}
        </>
    )
}

export default StudentList