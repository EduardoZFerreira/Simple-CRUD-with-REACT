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
}

export { StudentService };
