import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { message: "Invalid email address." },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: "AELSA Technologies <onboarding@resend.dev>",
      to: email,
      subject: "Welcome to AELSA Updates",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #071120; color: #E2E8F0; padding: 40px; border-radius: 16px;">
          <h1 style="color: #0EA5E9; font-size: 28px; font-weight: 900; margin-bottom: 8px;">Welcome to AELSA</h1>
          <p style="color: #94A3B8; font-size: 16px; line-height: 1.6;">
            You're now subscribed to AELSA Technologies updates. You'll receive monthly roundups of our latest deployments, research findings, and technology releases.
          </p>
          <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 32px 0;" />
          <p style="color: #94A3B8; font-size: 14px;">
            If you didn't subscribe, you can safely ignore this email.
          </p>
          <p style="color: #0EA5E9; font-size: 14px; font-weight: 600;">— The AELSA Team</p>
        </div>
      `,
    });

    await resend.emails.send({
      from: "AELSA Technologies <onboarding@resend.dev>",
  to: "cavidqurbanov249@gmail.com", 
  subject: "Welcome to AELSA Updates",
      html: `
        <div style="font-family: sans-serif; padding: 24px;">
          <h2>New subscriber</h2>
          <p><strong>${email}</strong> just subscribed to AELSA updates.</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Subscribed successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}