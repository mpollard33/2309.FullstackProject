const prisma = require("../prisma");
const { faker } = require("@faker-js/faker");

const seed = async () => {
  for (let i = 0; i < 200; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email();
    const imageUrl = faker.image.url();
    const gpa = faker.number.float({ max: 4, precision: 0.1 });

    await prisma.student.create({
      data: {
        firstname: firstName,
        lastname: lastName,
        email: email,
        imgUrl: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
        gpa: gpa,
      },
    });
  }
};

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
