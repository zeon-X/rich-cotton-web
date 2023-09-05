import { deleteProduct } from "@/app/lib/productData";
import { NextResponse } from "next/server";

export const PUT = async (req) => {
  try {
    console.log("PUT REQUEST BY ID");
    return NextResponse.json({ message: "Updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};

export const DELETE = async (req) => {
  try {
    console.log("DELETE REQUEST BY ID");
    const id = req.url.split("products/")[1];
    let isDeleted = deleteProduct(id);

    // console.log(isDeleted);

    return NextResponse.json(
      { message: isDeleted ? "Deleted" : "Error Deleting" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};

export const GET = (req) => {
  try {
    console.log("GET REQUEST BY ID");
    return NextResponse.json({ message: "Get" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};
