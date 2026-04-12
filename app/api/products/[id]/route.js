import { prisma } from "@/lib/prisma";

// ✅ GET
export async function GET(req, context) {
  try {
    const id = Number(context.params.id);

    if (!id) {
      return Response.json({ error: "Invalid ID" }, { status: 400 });
    }

    const product = await prisma.product.findUnique({
      where: { id },
    });

    return Response.json(product);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to fetch" }, { status: 500 });
  }
}

// ✅ UPDATE
export async function PUT(req, context) {
  try {
    const id = Number(context.params.id);

    console.log("ID:", id); // 🔍 debug

    if (!id) {
      return Response.json({ error: "Invalid ID" }, { status: 400 });
    }

    const body = await req.json();

    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        name: body.name,
        price: Number(body.price),
        description: body.description,
        image: body.image,
        category: body.category,
        color: body.color,
        gender: body.gender,
        stock: Number(body.stock),
      },
    });

    return Response.json(updatedProduct);
  } catch (error) {
    console.error("UPDATE ERROR:", error);
    return Response.json({ error: "Update failed" }, { status: 500 });
  }
}

// ✅ DELETE
export async function DELETE(req, context) {
  try {
    const id = Number(context.params.id);

    if (!id) {
      return Response.json({ error: "Invalid ID" }, { status: 400 });
    }

    await prisma.product.delete({
      where: { id },
    });

    return Response.json({ message: "Deleted successfully" });
  } catch (error) {
    console.error("DELETE ERROR:", error);
    return Response.json({ error: "Delete failed" }, { status: 500 });
  }
}