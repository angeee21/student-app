import { useParams, Link } from "react-router-dom";

function StudentDetails({ students }) {
  const { id } = useParams();
  const student = students.find((s) => s.id.toString() === id);

  if (!student) {
    return (
      <div className="page-container">
        <p>Student not found.</p>
        <Link to="/">Back to Student List</Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="details-card">
        <h2>Student Details</h2>
        <p><strong>Name:</strong> {student.fullname}</p>
        <p><strong>Student Number:</strong> {student.studentNumber}</p>
        <p><strong>Course:</strong> {student.course}</p>
        <p><strong>Course Description:</strong> {student.courseDescription}</p>
        <p><strong>Year Level:</strong> {student.yearLevel}</p>
        <p><strong>Sex:</strong> {student.sex}</p>
        <Link to="/">
          <button className="btn">Back to Student List</button>
        </Link>
      </div>
    </div>
  );
}

export default StudentDetails;