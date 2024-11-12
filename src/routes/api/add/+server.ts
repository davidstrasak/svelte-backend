import { json } from "@sveltejs/kit";
/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  let { a, b } = await request.json();
  a = Number(a);
  b = Number(b);
  return json(a + b);
}
