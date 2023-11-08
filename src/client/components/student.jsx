// Import styling
import { useDispatch } from "react-redux";
import "./task.css";
import { faker } from "@faker-js/faker";

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = faker.internet.email();
const imageUrl = faker.image.url();
const gpa = faker.number.float({ max: 4, precision: 0.01 });

const studentData = {
  firstName,
  lastName,
  email,
  imageUrl,
  gpa,
};

const StudentComponent = ({ student }) => {
  return (
    <>
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
      </div>
    </>
  );
};

console.log(StudentComponent(studentData));

export default StudentComponent;
