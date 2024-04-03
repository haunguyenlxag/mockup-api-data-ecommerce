import { redirect } from "next/navigation";
import { products } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const product = products.find(
    (product) => product.id === params.id
  );
  return Response.json(product);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { name } = body;

  const index = products.findIndex(
    (product) => product.id === params.id
  );
  products[index].name = name;
  return Response.json(products[index]);
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const index = products.findIndex(
    (product) => product.id === params.id
  );
  const deletedComment = products[index];
  products.splice(index, 1);
  return Response.json(deletedComment);
}
