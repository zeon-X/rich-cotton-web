import { NextResponse } from "next/server";
import { postClient } from "@/app/lib/clientData"; // Import the client functions
import pool from "@/app/lib/poolConnection";

// Define your HTTP method handlers as named exports
export const POST = async (req) => {
  try {
    const body = await req.json();
    let insertedId = await postClient(body); // Use postClient for clients
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
        message: "Error occurred",
        error: "Error creating record",
      },
      { status: 500 }
    );
  }
};

export const GET = async (req) => {
  const sql = "SELECT * FROM `clients`"; // Use "clients" table
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(sql);
    return NextResponse.json(
      { message: "Clients fetched", clients: rows }, // Change the response message
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching clients:", error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    connection.release();
  }
};
