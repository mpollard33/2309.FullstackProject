// import styling
import { faker } from "@faker-js/faker";
import Student from "./student";
import { useGetStudentsQuery } from "../store/studentSlice";

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = faker.internet.email();
const imageUrl = faker.image.url();
const gpa = faker.number.float({ max: 4, precision: 0.1 });

const studentsList = () => {
  const { data, isError, isLoading } = useGetStudentsQuery();

  if (isLoading) {
    return <p>Loading . . .</p>;
  }

  if (isError) {
    return <p>Error . . .</p>;
  }

  console.log(`List of students: ${data}`);

  return (
    <>
      {data.map((student, index) => (
        <Student student={s} key={`${student.student}-${index}`} />
      ))}
    </>
  );
};

export default studentsList;
