"use client";
import { useRef, useState } from "react";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const fd = new FormData(e.currentTarget);
    fd.append("page_url", window.location.href);

    try {
      const res = await fetch("/api/contact", { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Failed to send message");

      alert("Thanks! We received your message and will contact you soon.");
      formRef.current?.reset();
    } catch (e: any) {
      alert(e?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="space-y-4" ref={formRef} onSubmit={handleSubmit}>
      <input type="text" name="hp" tabIndex={-1} autoComplete="off" className="hidden" />

      <div className="relative">
        <i className="ri-user-line absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"></i>
        <input name="name" type="text" placeholder="Enter Name *" required className="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-10 text-sm transition focus:border-[#067afd] focus:outline-none"/>
      </div>

      <div className="relative">
        <i className="ri-mail-line absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"></i>
        <input name="email" type="email" placeholder="Enter Email *" required className="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-10 text-sm transition focus:border-[#067afd] focus:outline-none"/>
      </div>

      <div className="relative">
        <i className="ri-phone-line absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"></i>
        <input name="phone" type="tel" placeholder="Enter Phone No." inputMode="tel" pattern="^[0-9+\\-\\s()]{7,}$" className="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-10 text-sm transition focus:border-[#067afd] focus:outline-none"/>
      </div>

      <div className="relative">
        <i className="ri-chat-1-line absolute top-4 left-3 text-gray-400"></i>
        <textarea name="message" rows={4} placeholder="Message *" required className="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-10 text-sm transition focus:border-[#067afd] focus:outline-none"></textarea>
      </div>

      <button type="submit" disabled={loading} className="w-full rounded-lg bg-[#067afd] px-6 py-3 font-medium text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg md:w-auto disabled:opacity-60">
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
