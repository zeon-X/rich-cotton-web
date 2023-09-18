import pool from "@/app/lib/poolConnection";
import { deleteProduct, updateProduct } from "@/app/lib/productData";
import { NextResponse } from "next/server";

// export const PUT = async (req) => {
//   try {
//     console.log("PUT REQUEST BY ID");
//     return NextResponse.json({ message: "Updated" }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ message: "Error", error }, { status: 500 });
//   }
// };

// Define your HTTP method handlers as named exports
export const POST = async (req) => {
  try {
    const body = await req.json();
    let updatedProductData = await updateProduct(body);
    return NextResponse.json(
      {
        message: "Record created",
        data: { updatedData: updatedProductData },
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

export const GET = async (req) => {
  // try {
  //   const [rows] = await connection.query(sql);
  //   // console.log(rows);
  //   return NextResponse.json(
  //     { message: "Product fatched", product: rows },
  //     { status: 200 }
  //   );
  // } catch (error) {
  //   NextResponse.json({ message: "Error", error });
  //   throw error;
  // } finally {
  //   connection.release(); // Release the connection back to the pool
  // }

  const id = req.url.split("products/")[1];

  const sql = "SELECT * FROM `products` WHERE productCode = ?";
  const connection = await pool.getConnection();

  console.log(id);

  try {
    const [rows] = await connection.query(sql, [id]);
    if (rows.length === 0) {
      // return null; // Return null if no product with the given ID is found
      return NextResponse.json(
        { message: "Product fatched", product: [] },
        { status: 200 }
      );
    }
    return NextResponse.json(
      { message: "Product fatched", product: rows[0] },
      { status: 200 }
    );
  } catch (error) {
    NextResponse.json({ message: "Error", error });
    throw error;
  } finally {
    connection.release(); // Release the connection back to the pool
  }
};
