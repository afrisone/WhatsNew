import fastify from "fastify";
import { router } from "./router/router";

const server = fastify();

router(server);

server.listen(3001, err => {
  if (err) {
    console.warn("Error starting server", err);
  }
  console.log("Listening on port 3001");
});
