import fastify = require("fastify");
import { Server, IncomingMessage, ServerResponse } from "http";

export function router(
  server: fastify.FastifyInstance<Server, IncomingMessage, ServerResponse>
) {
  server.get("/unreadPosts", (request, reply) => {
    reply.code(200).send({ message: "unreadPosts" });
  });

  server.get("/deletedPosts", (request, reply) => {
    reply.code(200).send({ pong: "deletedPosts" });
  });

  server.get("/readPosts", (request, reply) => {
    reply.code(200).send({ pong: "readPosts" });
  });

  server.post("/markAsRead", (request, reply) => {
    reply.code(200).send({ message: "markAsRead" });
  });

  server.post("/markAsUnread", (request, reply) => {
    reply.code(200).send({ pong: "markAsUnread" });
  });

  server.post("/markAsDeleted", (request, reply) => {
    reply.code(200).send({ pong: "markAsDeleted" });
  });

  server.post("/markAsUndeleted", (request, reply) => {
    reply.code(200).send({ pong: "markAsUndeleted" });
  });
}
