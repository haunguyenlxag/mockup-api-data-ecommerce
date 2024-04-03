import { type NextRequest } from "next/server";
import { products } from "./data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredComments = query
    ? products.filter((product) => product.name.includes(query))
    : products;
  return Response.json(filteredComments);
}

export async function POST(request: Request) {
  const product = await request.json();
  product.id = products.length + 1;
  const newProduct = product;

  products.push(newProduct);
  return new Response(JSON.stringify(newProduct), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
