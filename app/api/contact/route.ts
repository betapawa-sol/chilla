import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // TODO: integrate Resend for email delivery
    // e.g. await resend.emails.send({ from: "...", to: "hello@chilla.africa", ... })
    console.log("[Chilla° Contact] New site assessment request:", {
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      businessType: data.businessType,
      city: data.city,
      message: data.message ?? "(none)",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
