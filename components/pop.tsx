"use client";

import { FormEvent } from "react";

interface EnquiryModalProps {
  open: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ open, onClose }: EnquiryModalProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Enquiry submitted!");
    onClose();
  };
// adasd
  if (!open) return null;

  return (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
        >
          ✕
        </button>

        {/* Modal Content */}
        <h2 className="mb-4 text-xl font-semibold text-gray-800">Enquiry Form</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            required
            className="w-full rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-[#067afd] to-[#004aad] py-2 font-medium text-white shadow-md transition hover:opacity-90"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}
