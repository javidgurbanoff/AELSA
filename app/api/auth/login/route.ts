import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json(
      { message: "Email and password required" },
      { status: 400 }
    );
  }

  const fakeUser = {
    email: "aelsa@1234",
    password: "123456",
  };

  if (email === fakeUser.email && password === fakeUser.password) {
    return NextResponse.json({
      message: "Login successful",
      token: "fake-jwt-token-123",
    });
  }

  return NextResponse.json(
    { message: "Invalid email or password" },
    { status: 401 }
  );
}