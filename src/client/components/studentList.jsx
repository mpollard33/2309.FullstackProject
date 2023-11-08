// import styling
const { faker } = require("@faker-js/faker");
import Student from "./student";
import { useSelector } from "react-redux";

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = faker.internet.email();
const imageUrl = faker.image.url();
const gpa = faker.number.float({ max: 4, precision: 0.1 });

const mockData = [
  {
    student: {
      firstname: firstName,
      lastname: lastName,
      email: email,
      image: imageUrl,
      gpa: gpa,
    },
  },
];

const students = () => {
  const task = useSelector(state => {

  });
  return (
    <>
      {students.map((student, index) => (
        <Student student={s} key={`${student.student}-${index}`} />
      ))}
    </>
  );
};

export default StudentList;
