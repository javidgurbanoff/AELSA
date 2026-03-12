import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token, password } = await req.json();

  console.log("Reset token:", token);
  console.log("New password:", password);

  return NextResponse.json({
    message: "Password updated successfully",
  });
}