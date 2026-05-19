"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", "YOUR_WEB3FORMS_KEY"); // get free key at web3forms.com
    data.append("subject", "New message from Alnajjar Firm website");
    data.append("from_name", "Alnajjar Firm Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="contact-form-success">
        <div className="contact-form-success-icon">✓</div>
        <h3>Message Sent!</h3>
        <p>Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
        <button onClick={() => setStatus("idle")} className="contact-form-reset">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        minLength={2}
        disabled={status === "sending"}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        disabled={status === "sending"}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone / WhatsApp (optional)"
        disabled={status === "sending"}
      />
      <textarea
        name="message"
        rows={5}
        placeholder="How can we help you?"
        required
        minLength={10}
        disabled={status === "sending"}
      />
      {status === "error" && (
        <p className="contact-form-error">
          Something went wrong. Please try again or WhatsApp us directly.
        </p>
      )}
      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
