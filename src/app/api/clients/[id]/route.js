import { deleteClient, updateClient } from "@/app/lib/clientData"; // Import the client functions
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const body = await req.json();
    let updatedClientData = await updateClient(body); // Use updateClient for clients
    return NextResponse.json(
      {
        message: "Record updated",
        data: { updatedData: updatedClientData },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error updating record:", error);
    return NextResponse.json(
      {
        message: "Error occurred",
        error: "Error updating record",
      },
      { status: 500 }
    );
  }
};

export const DELETE = async (req) => {
  try {
    const id = req.url.split("clients/")[1];
    let isDeleted = await deleteClient(id); // Use deleteClient for clients

    return NextResponse.json(
      { message: isDeleted ? "Deleted" : "Error Deleting" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting record:", error);
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
