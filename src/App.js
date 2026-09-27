import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import StudentList from "./pages/StudentList";
import AddStudent from "./pages/AddStudent";
import StudentDetails from "./pages/StudentDetails";
import studentsData from "./data/students.json";
import "./App.css";

function App() {
  const [students, setStudents] = useState(studentsData);

  function handleAddStudent(newStudent) {
    setStudents([...students, newStudent]);
  }

  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/">Student List</Link>
        <Link to="/add-student">Add Student</Link>
      </nav>

      <Routes>
        <Route path="/" element={<StudentList students={students} />} />
        <Route
          path="/add-student"
          element={<AddStudent onAddStudent={handleAddStudent} />}
        />
        <Route
          path="/student/:id"
          element={<StudentDetails students={students} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;