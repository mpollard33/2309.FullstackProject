const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

const DEFAULT_IMG =
  "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png";

/** User must be logged in to access students */
router.use((req, res, next) => {
  if (!res.locals.user) {
    return next(new ServerError(401, "You must be logged in."));
  }
  next();
});

/** Sends all students */
router.get("/", async (req, res, next) => {
  try {
    const students = await prisma.student.findMany();
    res.json(students);
  } catch (err) {
    next(err);
  }
});

/** Creates new student and sends it */
router.post("/", async (req, res, next) => {
  try {
    const { firstName, lastName, email, imageUrl, gpa } = req.body;
    if (!firstName || !lastName || email) {
      throw new ServerError(
        400,
        "First and Last Name required in addition to a valid email address."
      );
    }

    const student = await prisma.student.create({
      data: {
        firstname: firstName,
        lastname: lastName,
        email: email,
        imageUrl: imageUrl ?? DEFAULT_IMG,
        gpa: gpa ?? 0.0,
      },
    });
    res.json(student);
  } catch (err) {
    next(err);
  }
});

/** Checks if student exists and belongs to the given user*/
const validateStudent = async (user, studentId) => {
  const student = await prisma.student.findUnique({ where: { id: studentId } });
  if (!student) {
    throw new ServerError(404, "Student not found.");
  }

  if (student.userId !== user.id) {
    throw new ServerError(403, "This account does not belong to you.");
  }
};

/** Sends single student by id */
router.get("/:id", async (req, res, next) => {
  try {
    const studentId = +req.params.id;
    const student = await prisma.student.findUnique({ where: { studentId } });

    validateStudent(res.locals.user, studentId);

    res.json(student);
  } catch (err) {
    next(err);
  }
});

/** Updates single student by id */
router.put("/:id", async (req, res, next) => {
  try {
    const studentId = +req.params.id;
    const { firstName, lastName, email, imageUrl, gpa } = req.body;
    const student = await prisma.student.findUnique({ where: { id } });

    validateStudent(res.locals.user, studentId);

    const updatedStudent = await prisma.student.update({
      where: { studentId },
      data: { firstName, lastName, email, imageUrl, gpa },
    });
    res.json(updatedStudent);
  } catch (err) {
    next(err);
  }
});

/** Deletes single student by id */
router.delete("/:id", async (req, res, next) => {
  try {
    const studentId = +req.params.id;
    const student = await prisma.student.findUnique({ where: { studentId } });

    validateStudent(res.locals.user, studentId);

    await prisma.student.delete({ where: { studentId } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
