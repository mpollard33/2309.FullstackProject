// import styling
import { useDispatch } from "react-redux";
import "./task.css";
import { faker } from "@faker-js/faker";

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = faker.internet.email();
const imageUrl = faker.image.url();
const gpa = faker.number.float({ max: 4, precision: 0.01 });

const Student = ({ student }) => {
  const dispatch = useDispatch();
  return <div className={"student-style"}>student.student</div>;
};
console.log(`${firstName} ${lastName}`);

export default Student;
