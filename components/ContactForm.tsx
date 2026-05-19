"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name:    (form.elements.namedItem("name")    as HTMLInputElement).value,
      email:   (form.elements.namedItem("email")   as HTMLInputElement).value,
      phone:   (form.elements.namedItem("phone")   as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok && json.success) {
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
          Something went wrong.{" "}
          <a
            href="https://wa.me/96181623936"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#4ade80", fontWeight: 700 }}
          >
            WhatsApp us directly
          </a>{" "}
          or try again.
        </p>
      )}
      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
