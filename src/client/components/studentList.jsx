import React, { useState } from "react";
import Student from "./student";
import { useGetStudentsQuery } from "../store/studentSlice";

const StudentsList = () => {
  const { data, isError, isLoading } = useGetStudentsQuery();

  const [sortBy, setSortBy] = useState("lastName");

  const sortStudents = (students, sortBy) => {
    if (sortBy === "gpa") {
      return [...students].sort((a, b) => b.gpa - a.gpa);
    } else if (sortBy === "lastName") {
      return [...students].sort((a, b) => a.lastName.localeCompare(b.lastName));
    } else {
      return students;
    }
  };
  

  const sortedStudents = sortStudents(data, sortBy);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error...</p>;
  }

  return (
    <div>
      <div>
        <label>
          Sort by:
          <select onChange={(e) => setSortBy(e.target.value)}>
            <option value="lastName">Last Name</option>
            <option value="gpa">GPA</option>
          </select>
        </label>
      </div>
      {sortedStudents.map((student, index) => (
        <Student student={student} key={index} />
      ))}
    </div>
  );
};

export default StudentsList;
