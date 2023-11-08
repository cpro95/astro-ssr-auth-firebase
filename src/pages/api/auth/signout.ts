import type { APIRoute } from "astro";
import { TOKEN } from "@constants/cookies";

export const POST: APIRoute = (ctx) => {
  ctx.cookies.delete(TOKEN, {
    path: "/",
  });

  return new Response(JSON.stringify({ message: "successfully signed out" }));
};
