import { Elysia, t } from "elysia";

const app = new Elysia()
  .onRequest(({ request }) => {
    console.log("request url:", request.url);
  })
  .get("/", () => "ok", {
    query: t.Object({
      key1: t.Union([t.Array(t.String()), t.String()]),
    }),
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
