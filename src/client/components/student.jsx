import React from "react";
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  useGetStudentsQuery,
  useCreateStudentMutation,
  useDeleteStudentMutation,
} from "../store/studentSlice";

const StudentComponent = () => {
  const { data: students } = useGetStudentsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { studentId } = useParams();
  const [newStudent, setNewStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const student = students.find((s) => s.id === studentId);

  if (!student) {
    return (
      <div>
        <h1>Student Not Found</h1>
        <Link to="/students">Back to Students</Link>
      </div>
    );
  }

  const handleRemoveStudent = (id) => {
    dispatch(useDeleteStudentMutation(id));
    navigate("/students");
  };

  const handleUpdateStudent = () => {
    if (
      newStudent.firstName.trim() &&
      newStudent.lastName.trim() &&
      newStudent.email.trim()
    ) {
      dispatch(
        useUpdateStudentMutation({ studentId, updatedData: newStudent })
      );
      setNewStudent({
        firstName: "",
        lastName: "",
        email: "",
      });
      navigate("/students");
    }
  };

  const handleCreateStudent = () => {
    if (
      newStudent.firstName.trim() &&
      newStudent.lastName.trim() &&
      newStudent.email.trim()
    ) {
      dispatch(useCreateStudentMutation(newStudent));
      setNewStudent({
        firstName: "",
        lastName: "",
        email: "",
      });
      navigate("/students");
    }
  };

  return (
    <div>
      <header>
        <h1>
          {student.firstName} {student.lastName}
        </h1>
      </header>
      <img
        src={student.imageUrl}
        alt={`${student.firstName} ${student.lastName}`}
      />
      <p>Email: {student.email}</p>

      <button onClick={() => handleRemoveStudent(student.id)}>
        Remove Student
      </button>
      <div>
        <h2>Update Student</h2>
        <input
          type="text"
          placeholder="First Name"
          value={newStudent.firstName}
          onChange={(e) =>
            setNewStudent({ ...newStudent, firstName: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Last Name"
          value={newStudent.lastName}
          onChange={(e) =>
            setNewStudent({ ...newStudent, lastName: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Email"
          value={newStudent.email}
          onChange={(e) =>
            setNewStudent({ ...newStudent, email: e.target.value })
          }
        />
        <button onClick={handleUpdateStudent}>Update Student</button>
      </div>
      <div>
        <h2>Add a New Student</h2>
        <input
          type="text"
          placeholder="First Name"
          value={newStudent.firstName}
          onChange={(e) =>
            setNewStudent({ ...newStudent, firstName: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Last Name"
          value={newStudent.lastName}
          onChange={(e) =>
            setNewStudent({ ...newStudent, lastName: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Email"
          value={newStudent.email}
          onChange={(e) =>
            setNewStudent({ ...newStudent, email: e.target.value })
          }
        />
        <button onClick={handleCreateStudent}>Add Student</button>
      </div>
      <Link to="/students">Back to Students</Link>
    </div>
  );
};

export default StudentComponent;
