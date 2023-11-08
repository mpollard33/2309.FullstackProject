// import styling
import { useState } from "react";
import Student from "./student";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";

const StudentForm = () => {
  const { student, setStudent } = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventdefault();
    // dispatch(addStudent({ student }));
    setStudent("");
  };
  return (
    <>
      <form>
        <label>
          Student:
          <input
            type="text"
            value={student}
            onChange={(e) => setStudent(e.target.value)}
          />
        </label>
        <button>Add Student</button>
      </form>
    </>
  );
};

export default StudentForm;
