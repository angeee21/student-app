import StudentCard from "../components/StudentCard";

function StudentList({ students }) {
  return (
    <div className="page-container">
      <h1 className="page-title">Student Lists!</h1>
      <div className="card-grid">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}

export default StudentList;