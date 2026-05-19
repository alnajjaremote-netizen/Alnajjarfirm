"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

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
        setErrorMsg(json.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
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
        <p className="contact-form-error">{errorMsg}</p>
      )}
      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
