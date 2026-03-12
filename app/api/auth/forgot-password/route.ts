import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  const { email } = await req.json();

  const token = crypto.randomBytes(32).toString("hex");

  const resetLink = `http://localhost:3000/auth/reset-password?token=${token}`;

  console.log("Send this link to email:", resetLink);

  return NextResponse.json({
    message: "Reset link sent to your email",
  });
}