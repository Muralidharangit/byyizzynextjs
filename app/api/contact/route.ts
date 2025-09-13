import { NextResponse } from "next/server";
import { sendContactMail } from "@/lib/mailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    // honeypot (add a hidden input named "hp" in the form)
    if (String(form.get("hp") || "")) {
      return NextResponse.json({ ok: true });
    }

    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const phone = String(form.get("phone") || "");
    const message = String(form.get("message") || "");
    const page_url = String(form.get("page_url") || "");

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
    }

    const info = await sendContactMail({ name, email, phone, message, page_url });

    // Optional debug:
    console.log("contact mail:", {
      id: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ ok: false, error: "Failed to send message." }, { status: 500 });
  }
}
