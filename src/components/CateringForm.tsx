"use client";

import { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";

const fieldClasses =
  "mt-1.5 block min-h-11 w-full rounded-xl border border-charcoal/15 bg-white px-3.5 py-2.5 text-base text-charcoal placeholder:text-charcoal/55 focus:border-ember-dark focus:outline-none focus:ring-2 focus:ring-ember-dark/20";

export function CateringForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const requestText = `Hi Kiki's Kitchen, I would like a catering quote.

Name: ${form.name || "—"}
Phone: ${form.phone || "—"}
Event date: ${form.date || "—"}
Details: ${form.message || "—"}`;

  const requestLink = whatsappLink(requestText);

  function update(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSent(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(requestLink, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-cream p-6 shadow-2xl shadow-charcoal/15 sm:p-8"
    >
      <h3 className="font-display text-2xl font-semibold tracking-tight">
        Request a quote
      </h3>
      <p className="mt-1 text-sm text-charcoal/65">
        Tell us the basics. We&apos;ll reply on WhatsApp.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={update}
            placeholder="e.g. Amina Yusuf"
            className={fieldClasses}
          />
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-medium">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            value={form.phone}
            onChange={update}
            placeholder="07XX XXX XXX"
            className={fieldClasses}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="date" className="text-sm font-medium">
            Date of event
          </label>
          <input
            id="date"
            name="date"
            type="date"
            required
            value={form.date}
            onChange={update}
            className={fieldClasses}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-medium">
            Message <span className="font-normal text-charcoal/65">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={form.message}
            onChange={update}
            placeholder="Guest count, dishes you have in mind, delivery area…"
            className={`${fieldClasses} resize-y`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-charcoal px-5 text-sm font-semibold text-cream transition-colors hover:bg-charcoal/90"
      >
        <MessageCircle className="size-4" aria-hidden="true" />
        Request quote on WhatsApp
      </button>

      {sent ? (
        <p role="status" className="mt-3 text-sm leading-relaxed text-palm">
          WhatsApp should have opened with your details. If it didn&apos;t,{" "}
          <a
            href={requestLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2"
          >
            tap here to send your request
          </a>
          .
        </p>
      ) : null}

      <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-charcoal/70">
        <Phone className="size-3.5" aria-hidden="true" />
        Prefer to talk?{" "}
        <a href={site.phoneHref} className="font-semibold text-charcoal">
          {site.phoneDisplay}
        </a>
      </p>
    </form>
  );
}
