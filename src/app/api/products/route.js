import { NextResponse } from "next/server";
import { getProduct, postProduct } from "@/app/lib/productData";
import pool from "@/app/lib/poolConnection";

// Define your HTTP method handlers as named exports
export const POST = async (req) => {
  try {
    const body = await req.json();
    let insertedId = await postProduct(body);
    return NextResponse.json(
      {
        message: "Record created",
        data: { id: insertedId },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating record:", error);
    return NextResponse.json(
      {
        message: "Error occured",
        error: "Error creating record",
      },
      { status: 500 }
    );
  }
};

export const GET = async (req) => {
  const sql = "SELECT * FROM `products`";
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(sql);
    // console.log(rows);
    return NextResponse.json(
      { message: "Product fatched", product: rows },
      { status: 200 }
    );
  } catch (error) {
    NextResponse.json({ message: "Error", error });
    throw error;
  } finally {
    connection.release(); // Release the connection back to the pool
  }
};
