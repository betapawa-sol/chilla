"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import Button from "@/components/ui/Button";

const IMPACT_BULLETS = [
  "Available capacity across multiple node classes",
  "Pay-per-kg or monthly subscription",
  "Real-time monitoring from day one",
  "Verified cold-chain records for every batch",
  "Eligible for DFI co-financing",
];

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p role="alert" className="text-red-400 text-xs mt-1">{message}</p>;
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setServerError("Something went wrong. Please try again or email us directly.");
    }
  };

  if (submitted) {
    return (
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="bg-white py-20 sm:py-28"
      >
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-chilla-green mb-6" aria-hidden="true">
            <span className="text-2xl text-chilla-accent">✓</span>
          </div>
          <h2 className="font-display font-bold text-[#1A1200] text-3xl mb-4">Request received!</h2>
          <p className="text-[#1A1200]/60 leading-relaxed mb-2">
            A Chilla° operator will contact you within 2 business days about available cold-storage capacity near you.
          </p>
          <p className="text-chilla-amber text-sm font-mono">Store longer. Sell smarter.</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Left: context */}
          <div className="w-full lg:w-[45%]">
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-chilla-amber mb-3">
              Get started
            </p>
            <h2
              id="contact-heading"
              className="font-display font-bold text-[#1A1200] mb-5"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              Get cold storage for your business.
            </h2>
            <p className="text-[#1A1200]/60 text-base leading-relaxed mb-8">
              Tell us where you are and what you&apos;re storing. We&apos;ll identify the nearest available node and connect you with the local operator.
            </p>
            <ul className="flex flex-col gap-4" role="list">
              {IMPACT_BULLETS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-[#1A1200]/70">
                  <span className="mt-0.5 text-chilla-amber shrink-0" aria-hidden="true">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div className="w-full lg:w-[55%]">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              aria-label="Site assessment request form"
              className="flex flex-col gap-5"
            >
              {/* Full name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-[#1A1200]/80 mb-1.5">
                  Full name <span aria-hidden="true" className="text-chilla-amber">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  autoComplete="name"
                  aria-required="true"
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  className="w-full rounded-lg bg-[#1A1200]/5 border border-[#1A1200]/15 px-4 py-3 text-[#1A1200] text-sm placeholder:text-[#1A1200]/30 focus:outline-none focus:border-chilla-amber focus:ring-1 focus:ring-chilla-amber transition-colors"
                  placeholder="Amina Yusuf"
                  {...register("fullName")}
                />
                <span id="fullName-error"><FieldError message={errors.fullName?.message} /></span>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1A1200]/80 mb-1.5">
                  Business email <span aria-hidden="true" className="text-chilla-amber">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  aria-required="true"
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="w-full rounded-lg bg-[#1A1200]/5 border border-[#1A1200]/15 px-4 py-3 text-[#1A1200] text-sm placeholder:text-[#1A1200]/30 focus:outline-none focus:border-chilla-amber focus:ring-1 focus:ring-chilla-amber transition-colors"
                  placeholder="amina@yourpharmacy.com"
                  {...register("email")}
                />
                <span id="email-error"><FieldError message={errors.email?.message} /></span>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#1A1200]/80 mb-1.5">
                  Phone number <span aria-hidden="true" className="text-chilla-amber">*</span>
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-[#1A1200]/15 bg-[#1A1200]/8 text-[#1A1200]/50 text-sm select-none" aria-hidden="true">
                    +234
                  </span>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    aria-required="true"
                    aria-label="Phone number (without country code)"
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className="flex-1 rounded-r-lg bg-[#1A1200]/5 border border-[#1A1200]/15 px-4 py-3 text-[#1A1200] text-sm placeholder:text-[#1A1200]/30 focus:outline-none focus:border-chilla-amber focus:ring-1 focus:ring-chilla-amber transition-colors"
                    placeholder="801 234 5678"
                    {...register("phone")}
                  />
                </div>
                <span id="phone-error"><FieldError message={errors.phone?.message} /></span>
              </div>

              {/* Business type */}
              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-[#1A1200]/80 mb-1.5">
                  Business type <span aria-hidden="true" className="text-chilla-amber">*</span>
                </label>
                <select
                  id="businessType"
                  aria-required="true"
                  aria-describedby={errors.businessType ? "businessType-error" : undefined}
                  className="w-full rounded-lg bg-[#1A1200]/5 border border-[#1A1200]/15 px-4 py-3 text-[#1A1200] text-sm focus:outline-none focus:border-chilla-amber focus:ring-1 focus:ring-chilla-amber transition-colors appearance-none"
                  style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23FFB800' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center", backgroundSize: "20px" }}
                  {...register("businessType")}
                  defaultValue=""
                >
                  <option value="" disabled style={{ backgroundColor: "#ffffff" }}>Select business type…</option>
                  <option value="food-vendor" style={{ backgroundColor: "#ffffff" }}>Farmer / cooperative</option>
                  <option value="pharmacy" style={{ backgroundColor: "#ffffff" }}>Trader / aggregator</option>
                  <option value="clinic" style={{ backgroundColor: "#ffffff" }}>Food business</option>
                  <option value="other" style={{ backgroundColor: "#ffffff" }}>Other</option>
                </select>
                <span id="businessType-error"><FieldError message={errors.businessType?.message} /></span>
              </div>

              {/* City */}
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-[#1A1200]/80 mb-1.5">
                  City <span aria-hidden="true" className="text-chilla-amber">*</span>
                </label>
                <input
                  id="city"
                  type="text"
                  autoComplete="address-level2"
                  aria-required="true"
                  aria-describedby={errors.city ? "city-error" : undefined}
                  className="w-full rounded-lg bg-[#1A1200]/5 border border-[#1A1200]/15 px-4 py-3 text-[#1A1200] text-sm placeholder:text-[#1A1200]/30 focus:outline-none focus:border-chilla-amber focus:ring-1 focus:ring-chilla-amber transition-colors"
                  placeholder="Lagos"
                  {...register("city")}
                />
                <span id="city-error"><FieldError message={errors.city?.message} /></span>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#1A1200]/80 mb-1.5">
                  Message <span className="text-[#1A1200]/30 font-normal">(optional)</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-lg bg-[#1A1200]/5 border border-[#1A1200]/15 px-4 py-3 text-[#1A1200] text-sm placeholder:text-[#1A1200]/30 focus:outline-none focus:border-chilla-amber focus:ring-1 focus:ring-chilla-amber transition-colors resize-none"
                  placeholder="Tell us about your storage needs, how many traders you serve, or any questions you have."
                  {...register("message")}
                />
              </div>

              {/* Server error */}
              {serverError && (
                <p role="alert" className="text-red-400 text-sm text-center">{serverError}</p>
              )}

              {/* Submit */}
              <Button
                type="submit"
                fullWidth
                disabled={isSubmitting}
                className="py-4 text-base mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending…" : "Request storage access"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
