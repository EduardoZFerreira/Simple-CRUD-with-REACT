import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { StudentController } from "./controllers/StudentController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get(
    "/healthcheck",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return { OK: true };
    }
  );

  fastify.post(
    "/student",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new StudentController().handle(request, reply);
    }
  );
}
