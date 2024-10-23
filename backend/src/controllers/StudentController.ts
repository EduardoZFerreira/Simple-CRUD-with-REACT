import { FastifyRequest, FastifyReply } from "fastify";
import { StudentService } from "../services/StudentService";

class StudentController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email } = request.body as { name: string; email: string };

    const studentService = new StudentService();
    const student = await studentService.execute({ name, email });

    reply.send(student);
  }

  async list(request: FastifyRequest, reply: FastifyReply) {
    const studentService = new StudentService();
    const students = await studentService.list();

    reply.send(students);
  }

  async delete(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };
    const studentService = new StudentService();

    const response = await studentService.delete(+id);

    reply.send(response);
  }
}

export { StudentController };
