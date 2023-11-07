// import styling
const { faker } = require("@faker-js/faker");

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

const studentList = () => {
  return (
    <>
      {mockData.map((s) => (
        <Student />
      ))}
    </>
  );
};

export default studentList;
