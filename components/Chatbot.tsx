"use client";

import { useState, useRef, useEffect, useCallback } from "react";

const CALENDLY =
  "https://calendly.com/rami-w-alnajjar/alnajjar-firm-introductory-meeting";

const MAIN_OPTIONS = [
  "Our Services",
  "Pricing",
  "Our Process",
  "Contact Us",
  "Book a Meeting",
  "Our Clients",
];

function route(input: string): string {
  const exact: Record<string, string> = {
    "Our Services": "services",
    Pricing: "pricing",
    "Our Process": "process",
    "Contact Us": "contact",
    "Book a Meeting": "book_meeting",
    "Our Clients": "clients",
    "Main Menu": "start",
  };
  if (exact[input]) return exact[input];

  const s = input.toLowerCase();
  if (/servic|offer|reel|video|edit|brand|graphic|design|motion|photo|web|app/.test(s))
    return "services";
  if (/pric|cost|fee|much|subscri|monthly|\$|1000|1,000|pay/.test(s))
    return "pricing";
  if (/process|step|how.*work|workflow|onboard/.test(s)) return "process";
  if (/contact|phone|whatsapp|email|address|locat|call|reach/.test(s))
    return "contact";
  if (/book|meet|schedul|appoint|calendly|get start/.test(s))
    return "book_meeting";
  if (/client|portfolio|result|grow|follower|doctor|beauty|case/.test(s))
    return "clients";
  if (/hi|hello|hey|good\s*(morning|afternoon|evening)/.test(s)) return "start";
  return "unknown";
}

type Step = { message: string; options: string[] };

const flow: Record<string, Step> = {
  start: {
    message:
      "👋 Hi! I'm the Alnajjar Firm assistant.\n\nI can answer questions about our services, pricing, process, and more.\n\nWhat would you like to know?",
    options: MAIN_OPTIONS,
  },
  services: {
    message:
      "We offer 10 professional services:\n\n🎬 Social media management\n✍️ Content creation\n📱 Reels production\n🎞️ Video editing\n📷 Videography & Photography\n🎨 Branding & Identity\n🖼️ Graphic Design\n✨ Motion Graphics\n📊 Marketing strategy\n💻 Web / App development\n\nWould you like to know about pricing or book a meeting?",
    options: ["Pricing", "Book a Meeting", "Main Menu"],
  },
  pricing: {
    message:
      "💰 Our Pricing:\n\n📱 Social Media Subscription — $1,000/month\n\nThis covers full content creation, shooting, editing, posting, and management across platforms.\n\nFor other services (branding, web dev, video editing, etc.), we build a custom quote based on your specific needs.\n\nBook a free meeting to get your personalized quote!",
    options: ["Book a Meeting", "Our Services", "Main Menu"],
  },
  process: {
    message:
      "📋 Our 7-Step Process:\n\n1️⃣ Payment made (via driver, Whish, or OMT)\n2️⃣ WhatsApp group created within 24 hours\n3️⃣ Kickoff meeting — align on style & branding\n4️⃣ 20 content ideas & scripts prepared\n5️⃣ Professional shooting & editing\n6️⃣ Your approval → posting across 4 platforms\n7️⃣ Performance analysis & optimization\n\nSimple, transparent, and results-driven!",
    options: ["Book a Meeting", "Pricing", "Main Menu"],
  },
  contact: {
    message:
      "📞 Reach Alnajjar Firm:\n\n📱 Phone: +961 81 623 936\n💬 WhatsApp: wa.me/96181623936\n📧 Email: info@alnajjarfirm.com\n📍 Awkar, Mount Lebanon, Lebanon\n\n⏰ Mon–Fri: 9 AM – 6 PM",
    options: ["Book a Meeting", "Main Menu"],
  },
  book_meeting: {
    message: `📅 Ready to grow your brand?\n\nBook a free introductory meeting:\n\n🔗 ${CALENDLY}\n\nOr WhatsApp us at +961 81 623 936 and we'll schedule it for you!\n\nWe look forward to working with you! 🚀`,
    options: ["Our Services", "Main Menu"],
  },
  clients: {
    message:
      "🏆 We've grown 50+ clients across multiple industries:\n\n🏥 Dr. Ghassan Azar — 3K → 1.1M followers\n💄 Liliane Najem — 6K → 1M followers\n💄 Rima Morkos — 2.5K → 1M followers\n💍 Lina Rai — 48K → 726K followers\n🧘 Hania Bsat — 5K → 553K followers\n👗 Fadia Haddad — 10K → 691K followers\n\nIndustries: Healthcare, Beauty, Coaching, Interior Design, Restaurants, Companies & more!",
    options: ["Book a Meeting", "Main Menu"],
  },
  unknown: {
    message:
      "I'm not sure about that, but I'm happy to help! 😊\n\nHere's what I can answer:",
    options: MAIN_OPTIONS,
  },
};

type Message = { role: "bot" | "user"; text: string; id: number };

let uid = 0;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [options, setOptions] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTyping(true);
      const t = setTimeout(() => {
        const step = flow.start;
        setMessages([{ role: "bot", text: step.message, id: uid++ }]);
        setOptions(step.options);
        setTyping(false);
      }, 600);
      return () => clearTimeout(t);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, typing]);

  useEffect(() => {
    if (isOpen && !window.matchMedia("(max-width: 768px)").matches) {
      const t = setTimeout(() => inputRef.current?.focus(), 150);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const send = useCallback(
    (text: string) => {
      const t = text.trim();
      if (!t || typing) return;
      setMessages((prev) => [...prev, { role: "user", text: t, id: uid++ }]);
      setOptions([]);
      setInput("");
      setTyping(true);
      setTimeout(() => {
        const step = flow[route(t)] ?? flow.unknown;
        setMessages((prev) => [
          ...prev,
          { role: "bot", text: step.message, id: uid++ },
        ]);
        setOptions(step.options);
        setTyping(false);
      }, 600);
    },
    [typing]
  );

  return (
    <>
      {/* Floating toggle button */}
      <button
        className={`cb-toggle${isOpen ? " cb-toggle--open" : ""}`}
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M4 4l12 12M16 4L4 16"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <span style={{ fontSize: 12, fontWeight: 700, lineHeight: 1.2, textAlign: "center" }}>
            Chat<br />with us
          </span>
        )}
      </button>

      {/* Chat window — always in DOM for CSS transition */}
      <div
        className={`cb-window${isOpen ? " cb-window--open" : ""}`}
        aria-hidden={!isOpen}
        role="dialog"
        aria-label="Chat with Alnajjar Firm"
      >
        {/* Header */}
        <div className="cb-header">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ position: "relative", flexShrink: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/favicon.png"
                alt=""
                width={34}
                height={34}
                style={{ borderRadius: 8, display: "block" }}
              />
              <span
                style={{
                  position: "absolute",
                  bottom: -1,
                  right: -1,
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#4ade80",
                  border: "2px solid #252525",
                }}
              />
            </div>
            <div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 14,
                  color: "#fff",
                  lineHeight: 1.25,
                }}
              >
                Alnajjar Firm
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "#4ade80",
                  fontWeight: 600,
                  lineHeight: 1.25,
                }}
              >
                Online
              </div>
            </div>
          </div>
          <button
            className="cb-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path
                d="M4 4l12 12M16 4L4 16"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="cb-body" ref={bodyRef}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`cb-bubble cb-bubble--${msg.role}`}
            >
              {msg.text.split("\n").map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </div>
          ))}
          {typing && (
            <div className="cb-bubble cb-bubble--bot cb-typing">
              <span />
              <span />
              <span />
            </div>
          )}
        </div>

        {/* Quick-reply options */}
        {options.length > 0 && !typing && (
          <div className="cb-options">
            {options.map((opt) => (
              <button
                key={opt}
                className="cb-option"
                onClick={() => send(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        )}

        {/* Text input */}
        <div className="cb-input-row">
          <input
            ref={inputRef}
            className="cb-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send(input)}
            placeholder="Ask me anything…"
            disabled={typing}
            aria-label="Type a message"
          />
          <button
            className="cb-send"
            onClick={() => send(input)}
            disabled={!input.trim() || typing}
            aria-label="Send"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
              <path
                d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
