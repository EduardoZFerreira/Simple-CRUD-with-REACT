import { FastifyRequest, FastifyReply } from "fastify";
import { StudentService } from "../services/StudentService";

class StudentController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email } = request.body as { name: string; email: string };

    const studentService = new StudentService();
    const student = await studentService.execute({ name, email });

    reply.send(student);
  }
}

export { StudentController };
