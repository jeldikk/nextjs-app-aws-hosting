import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json({
    message: "Hello from Server",
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  return NextResponse.json({
    message: "POST request from server",
  });
}
