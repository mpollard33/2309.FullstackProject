// import styling
import { faker } from "@faker-js/faker";
import { useState } from "react";
import Student from "./student";
import { useGetStudentsQuery } from "../store/studentSlice";

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = faker.internet.email();
const imageUrl = faker.image.url();
const gpa = faker.number.float({ max: 4, precision: 0.1 });

const StudentsList = () => {
  const { data, isError, isLoading } = useGetStudentsQuery();

  const [sortBy, setSortBy] = useState("lastName");

  const sortStudents = (students, sortBy) => {
    return [...students].sort((a, b) => {
      if (sortBy === "gpa") {
        return b[sortBy] - a[sortBy];
      } else {
        return a[sortBy].localeCompare(b[sortBy]);
      }
    });
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
