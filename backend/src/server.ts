import fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes";

const app = fastify({ logger: true });

const start = async () => {
  await app.register(routes);

  try {
    await app.listen({ port: 8081 });
  } catch (exception) {
    process.exit(1);
  }
};

start();
