import { Link } from "react-router-dom";

function StudentCard({ student }) {
  return (
    <div className="student-card">
      <h2>{student.fullname}</h2>
      <p>Student Number: {student.studentNumber}</p>
      <p>Course: {student.course}</p>
      <p>Course Description: {student.courseDescription}</p>
      <Link to={`/student/${student.id}`}>
        <button className="btn">View full details</button>
      </Link>
    </div>
  );
}

export default StudentCard;