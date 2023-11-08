// import styling
const { faker } = require("@faker-js/faker");
import Student from "./student";
import { useSelector } from "react-redux";
import { useGetTaskQuery } from "../store/studentSlice";

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = faker.internet.email();
const imageUrl = faker.image.url();
const gpa = faker.number.float({ max: 4, precision: 0.1 });

const studentsList = () => {
  const task = useSelector((state) => {
    const { data, isError, isLoading } = useGetTaskQuery();
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
