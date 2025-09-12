"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { log } from "console";
import Link from "next/link";

type EnquiryDialogProps = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  productName?: string; // prefill
  productCode?: string; // prefill
};

export default function EnquiryDialog({
  open,
  onOpenChange,
  productName = "",
  productCode = "",
}: EnquiryDialogProps) {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [loading, setLoading] = React.useState(false);
  // function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   const fd = new FormData(e.currentTarget);
  //   const payload = {
  //     material_code: (fd.get("material_code") as string) || "",
  //     material_name: (fd.get("material_name") as string) || "",
  //     name: (fd.get("name") as string) || "",
  //     email: (fd.get("email") as string) || "",
  //     phone: (fd.get("phone") as string) || "",
  //     message: (fd.get("message") as string) || "",
  //     agreed: fd.get("agree") === "on",
  //   };
  //   if (!payload.agreed) {
  //     alert("Please agree to the terms & policy.");
  //     return;
  //   }
  //   // TODO: POST to your API route, e.g. /api/enquiry
  //   // await fetch("/api/enquiry", { method: "POST", body: fd });

  //   console.log("enquiry:", payload);
  //   alert("Enquiry submitted!");
  //   onOpenChange(false);
  //   formRef.current?.reset();
  // }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const fd = new FormData(e.currentTarget);

    // Basic client-side validation: agree must be checked
    const agreed = fd.get("agree") === "on";
    if (!agreed) {
      alert("Please agree to the terms & policy.");
      setLoading(false);
      return;
    }

    // Helpful context for the admin email
    fd.append("page_url", window.location.href);

    try {
      const res = await fetch("/api/enquiry", { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Failed to submit enquiry");
      }

      console.log(data, "=========================");

      alert("Enquiry submitted!");
      onOpenChange(false);
      formRef.current?.reset();
    } catch (err: any) {
      alert(err?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const defaultMessage = productName
    ? `Hi, I’m interested in ${productName}. Please share a quote.`
    : "";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Request a Quote</DialogTitle>
          <DialogDescription>Fill the form and we’ll get back to you.</DialogDescription>
        </DialogHeader>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          {/* Material details (readonly) */}
          <div className="grid gap-2">
            <input type="text" name="hp" tabIndex={-1} autoComplete="off" className="hidden" />
            <Label htmlFor="material_code">Material Code</Label>
            <Input id="material_code" name="material_code" defaultValue={productCode} readOnly />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="material_name">Material Name</Label>
            <Input id="material_name" name="material_name" defaultValue={productName} readOnly />
          </div>

          {/* User fields */}
          <div className="grid gap-2">
            <Label htmlFor="name">Your Name</Label>
            <Input id="name" name="name" placeholder="User Name" required />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Your Email</Label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              inputMode="tel"
              placeholder="+91 9XXXXXXXXX"
              pattern="^[0-9+\-\s()]{7,}$"
              title="Enter a valid phone number"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="message">Your Message</Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              defaultValue={defaultMessage}
              placeholder="Tell us what you need…"
              required
            />
          </div>

          {/* Agree checkbox */}
          <div className="flex items-start gap-2">
            <input id="agree" name="agree" type="checkbox" className="mt-1 h-4 w-4" required />
            <Label htmlFor="agree" className="text-sm">
              I agree to the{" "}
              <Link href="/terms" className="underline">
                terms
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline">
                privacy policy
              </Link>
              .
            </Label>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="secondary"
              onClick={() => onOpenChange(false)}
              className="bg-[#f94444] text-gray-100"
            >
              Close
            </Button>
            <Button type="submit" className="bg-[#067afd] text-gray-100" disabled={loading}>
              {" "}
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
