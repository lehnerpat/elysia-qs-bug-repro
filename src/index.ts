import { Elysia, t } from "elysia";
import { logger } from "@bogeychan/elysia-logger";

const app = new Elysia()
  .use(logger())
  .onRequest(({ request }) => {
    console.log("request url:", request.url);
  })
  .get(
    "/",
    ({ query }) => {
      return "ok";
    },
    {
      query: t.Object({
        key_1: t.Optional(t.Union([t.Array(t.String()), t.String()])),
      }),
    }
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
