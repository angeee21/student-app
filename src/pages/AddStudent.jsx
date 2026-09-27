import { useState } from "react";
import { useNavigate } from "react-router-dom";

const courseDescriptions = {
  BSIT: "Bachelor of Science in Information Technology",
  BSCS: "Bachelor of Science in Computer Science",
  BSIS: "Bachelor of Science in Information Systems",
};

function AddStudent({ onAddStudent }) {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [course, setCourse] = useState("BSIT");
  const [yearLevel, setYearLevel] = useState("1st Year");
  const [sex, setSex] = useState("Male");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      id: Date.now(),
      fullname,
      studentNumber,
      course,
      courseDescription: courseDescriptions[course],
      yearLevel,
      sex,
    };

    onAddStudent(newStudent);
    navigate("/");
  };

  return (
    <div className="page-container">
      <form className="add-student-form" onSubmit={handleSubmit}>
        <h2>Add Student</h2>

        <label>Name</label>
        <input
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          required
        />

        <label>Student Number</label>
        <input
          type="text"
          value={studentNumber}
          onChange={(e) => setStudentNumber(e.target.value)}
          required
        />

        <label>Course</label>
        <select value={course} onChange={(e) => setCourse(e.target.value)}>
          <option value="BSIT">BSIT</option>
          <option value="BSCS">BSCS</option>
          <option value="BSIS">BSIS</option>
        </select>

        <label>Year Level</label>
        <select value={yearLevel} onChange={(e) => setYearLevel(e.target.value)}>
          <option value="1st Year">1st Year</option>
          <option value="2nd Year">2nd Year</option>
          <option value="3rd Year">3rd Year</option>
          <option value="4th Year">4th Year</option>
        </select>

        <label>Sex</label>
        <select value={sex} onChange={(e) => setSex(e.target.value)}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <button type="submit" className="btn">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;