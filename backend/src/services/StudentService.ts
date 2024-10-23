import prismaClient from "../prisma";

interface StudentProps {
  name: string;
  email: string;
}

class StudentService {
  async execute({ name, email }: StudentProps) {
    const student = await prismaClient.student.create({
      data: {
        name,
        email,
      },
    });

    return student;
  }

  async list() {
    const students = await prismaClient.student.findMany();
    return students;
  }
}

export { StudentService };
