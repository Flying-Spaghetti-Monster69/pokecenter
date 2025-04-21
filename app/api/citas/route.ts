import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const requestBody = await request.json();

    return NextResponse.json(
      { message: "Data received successfully!", data: requestBody },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Failed to process data" },
      { status: 400 }
    );
  }
}
