import { NextResponse } from "next/server";
import { sendEnquiryMail } from "@/lib/mailer";

// Nodemailer needs Node runtime (NOT Edge)
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    // Optional anti-bot honeypot: add <input name="hp" className="hidden" /> in your form
    if (String(form.get("hp") || "")) {
      return NextResponse.json({ ok: true });
    }

    const material_code = String(form.get("material_code") || "");
    const material_name = String(form.get("material_name") || "");
    const name          = String(form.get("name") || "");
    const email         = String(form.get("email") || "");
    const phone         = String(form.get("phone") || "");
    const message       = String(form.get("message") || "");
    const page_url      = String(form.get("page_url") || "");

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    await sendEnquiryMail({
      material_code,
      material_name,
      name,
      email,
      phone,
      message,
      page_url,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Enquiry API error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send email." },
      { status: 500 }
    );
  }
}
