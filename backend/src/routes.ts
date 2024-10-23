import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";

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
}
