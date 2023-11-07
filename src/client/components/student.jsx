// import styling
import './task.css'
const { faker } = require("@faker-js/faker");

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = faker.internet.email();
const imageUrl = faker.image.url();
const gpa = faker.number.float({ max: 4, precision: 0.01 });

const student = ({student}) => {
    return (
        <div className={'student-style'}>student.student</div>
    )
}
console.log(mockData[0].student);
console.log();

export default student;
