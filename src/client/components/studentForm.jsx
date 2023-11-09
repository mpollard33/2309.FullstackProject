import React from "react";
import useState from "react";
import { useCreateStudentMutation } from "../store/studentSlice";

const StudentForm = () => {
  const [studentData, setStudentData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const dispatch = useDispatch();
  const [createStudent] = useCreateStudentMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await createStudent(studentData);
      console.log(`Student created: ${data}`);
    } catch (err) {
      console.error(`Error creating Student. ${err}`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={studentData.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={studentData.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={studentData.email}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;
