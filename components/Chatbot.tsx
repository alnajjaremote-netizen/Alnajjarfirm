"use client";

import { useState, useEffect } from "react";
import ChatBot from "react-chatbotify";
import "@/styles/react-chatbotify.css";
import type { Params, Flow, Settings, Styles } from "react-chatbotify";

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

const flow: Flow = {
  start: {
    message:
      "👋 Hi! I'm the Alnajjar Firm assistant.\n\nI can answer questions about our services, pricing, process, and more.\n\nWhat would you like to know?",
    options: MAIN_OPTIONS,
    chatDisabled: false,
    path: (params: Params) => route(params.userInput),
  },

  services: {
    message:
      "We offer 10 professional services:\n\n🎬 Social media management\n✍️ Content creation\n📱 Reels production\n🎞️ Video editing\n📷 Videography & Photography\n🎨 Branding & Identity\n🖼️ Graphic Design\n✨ Motion Graphics\n📊 Marketing strategy\n💻 Web / App development\n\nWould you like to know about pricing or book a meeting?",
    options: ["Pricing", "Book a Meeting", "Main Menu"],
    chatDisabled: false,
    path: (params: Params) => route(params.userInput),
  },

  pricing: {
    message:
      "💰 Our Pricing:\n\n📱 Social Media Subscription — $1,000/month\n\nThis covers full content creation, shooting, editing, posting, and management across platforms.\n\nFor other services (branding, web dev, video editing, etc.), we build a custom quote based on your specific needs.\n\nBook a free meeting to get your personalized quote!",
    options: ["Book a Meeting", "Our Services", "Main Menu"],
    chatDisabled: false,
    path: (params: Params) => route(params.userInput),
  },

  process: {
    message:
      "📋 Our 7-Step Process:\n\n1️⃣ Payment made (via driver, Whish, or OMT)\n2️⃣ WhatsApp group created within 24 hours\n3️⃣ Kickoff meeting — align on style & branding\n4️⃣ 20 content ideas & scripts prepared\n5️⃣ Professional shooting & editing\n6️⃣ Your approval → posting across 4 platforms\n7️⃣ Performance analysis & optimization\n\nSimple, transparent, and results-driven!",
    options: ["Book a Meeting", "Pricing", "Main Menu"],
    chatDisabled: false,
    path: (params: Params) => route(params.userInput),
  },

  contact: {
    message:
      "📞 Reach Alnajjar Firm:\n\n📱 Phone: +961 81 623 936\n💬 WhatsApp: wa.me/96181623936\n📧 Email: info@alnajjarfirm.com\n📍 Awkar, Mount Lebanon, Lebanon\n\n⏰ Mon–Fri: 9 AM – 6 PM",
    options: ["Book a Meeting", "Main Menu"],
    chatDisabled: false,
    path: (params: Params) => route(params.userInput),
  },

  book_meeting: {
    message: `📅 Ready to grow your brand?\n\nBook a free introductory meeting:\n\n🔗 ${CALENDLY}\n\nOr WhatsApp us at +961 81 623 936 and we'll schedule it for you!\n\nWe look forward to working with you! 🚀`,
    options: ["Our Services", "Main Menu"],
    chatDisabled: false,
    path: (params: Params) => route(params.userInput),
  },

  clients: {
    message:
      "🏆 We've grown 50+ clients across multiple industries:\n\n🏥 Dr. Ghassan Azar — 3K → 1.1M followers\n💄 Liliane Najem — 6K → 1M followers\n💄 Rima Morkos — 2.5K → 1M followers\n💍 Lina Rai — 48K → 726K followers\n🧘 Hania Bsat — 5K → 553K followers\n👗 Fadia Haddad — 10K → 691K followers\n\nIndustries: Healthcare, Beauty, Coaching, Interior Design, Restaurants, Companies & more!",
    options: ["Book a Meeting", "Main Menu"],
    chatDisabled: false,
    path: (params: Params) => route(params.userInput),
  },

  unknown: {
    message:
      "I'm not sure about that, but I'm happy to help! 😊\n\nHere's what I can answer:",
    options: MAIN_OPTIONS,
    chatDisabled: false,
    path: (params: Params) => route(params.userInput),
  },
};

export default function Chatbot() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width:600px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const mobileWindowStyle = isMobile
    ? {
        position: "fixed" as const,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100dvh",
        maxWidth: "100%",
        maxHeight: "100dvh",
        borderRadius: 0,
      }
    : {};

  const settings: Settings = {
    general: {
      primaryColor: "#deb841",
      secondaryColor: "#1e1e1e",
      fontFamily:
        "Bricolage Grotesque, system-ui, -apple-system, Arial, sans-serif",
      showFooter: false,
      embedded: false,
      flowStartTrigger: "ON_LOAD",
    },
    tooltip: {
      mode: "NEVER",
    },
    header: {
      title: (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ position: "relative", flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/favicon.png"
              alt=""
              width={34}
              height={34}
              style={{ borderRadius: "8px", display: "block" }}
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
                fontSize: "14px",
                color: "#ffffff",
                lineHeight: 1.25,
              }}
            >
              Alnajjar Firm
            </div>
            <div
              style={{
                fontSize: "11px",
                color: "#4ade80",
                fontWeight: 600,
                lineHeight: 1.25,
              }}
            >
              Online
            </div>
          </div>
        </div>
      ),
      showAvatar: false,
    },
    notification: {
      disabled: true,
    },
    audio: {
      disabled: true,
    },
    chatHistory: {
      disabled: true,
    },
    chatInput: {
      enabledPlaceholderText: "Ask me anything...",
      botDelay: 600,
      blockSpam: true,
      sendOptionOutput: true,
      allowNewline: false,
    },
    chatWindow: {
      showScrollbar: false,
      autoJumpToBottom: true,
      showTypingIndicator: true,
    },
    botBubble: {
      simulateStream: false,
    },
  };

  const styles: Styles = {
    chatWindowStyle: {
      background: "#141414",
      fontFamily:
        "Bricolage Grotesque, system-ui, -apple-system, Arial, sans-serif",
      borderRadius: "20px",
      border: "1px solid rgba(222, 184, 65, 0.15)",
      boxShadow:
        "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)",
      ...mobileWindowStyle,
    },
    headerStyle: {
      background: "linear-gradient(135deg, #1e1e1e 0%, #252525 100%)",
      color: "#ffffff",
      borderBottom: "1px solid rgba(222, 184, 65, 0.2)",
      padding: "12px 14px",
    },
    bodyStyle: {
      background: "#141414",
    },
    botBubbleStyle: {
      background: "#1e1e1e",
      color: "#f0f0f0",
      border: "1px solid rgba(255,255,255,0.06)",
      fontFamily: "inherit",
      fontSize: "13.5px",
      lineHeight: "1.6",
      maxWidth: "86%",
      borderRadius: "4px 18px 18px 18px",
    },
    userBubbleStyle: {
      background: "linear-gradient(135deg, #deb841 0%, #c9a530 100%)",
      color: "#111111",
      fontFamily: "inherit",
      fontSize: "13.5px",
      fontWeight: 600,
      borderRadius: "18px 18px 4px 18px",
    },
    botOptionStyle: {
      background: "transparent",
      border: "1px solid rgba(222, 184, 65, 0.4)",
      color: "#deb841",
      fontFamily: "inherit",
      fontSize: "12px",
      fontWeight: 600,
      cursor: "pointer",
      borderRadius: "999px",
      padding: "5px 13px",
      transition: "all 0.18s ease",
    },
    botOptionHoveredStyle: {
      background: "rgba(222, 184, 65, 0.1)",
      border: "1px solid rgba(222, 184, 65, 0.8)",
      color: "#deb841",
    },
    chatInputContainerStyle: {
      background: "#1a1a1a",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "10px 12px",
    },
    chatInputAreaStyle: {
      background: "#252525",
      color: "#ffffff",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "10px",
      fontFamily: "inherit",
      fontSize: "13.5px",
    },
    chatInputAreaFocusedStyle: {
      border: "1px solid rgba(222, 184, 65, 0.55)",
      boxShadow: "0 0 0 3px rgba(222, 184, 65, 0.07)",
    },
    sendButtonStyle: {
      background: "#deb841",
      borderRadius: "10px",
      border: "none",
    },
    sendButtonHoveredStyle: {
      background: "#c9a530",
    },
    sendIconStyle: {
      color: "#111111",
      fill: "#111111",
    },
    /* Floating chat button — dark with gold border */
    chatButtonStyle: {
      background: "#1a1a1a",
      border: "1px solid rgba(222, 184, 65, 0.35)",
      boxShadow:
        "0 4px 24px rgba(0,0,0,0.6), 0 0 0 1px rgba(222,184,65,0.1)",
    },
    chatButtonHoveredStyle: {
      background: "#242424",
      border: "1px solid rgba(222, 184, 65, 0.65)",
      boxShadow:
        "0 6px 32px rgba(0,0,0,0.7), 0 0 16px rgba(222,184,65,0.15)",
    },
    /* Favicon shown via CSS override in globals.css (.rcb-toggle-icon) */
    chatIconStyle: {},
    rcbTypingIndicatorDotStyle: {
      background: "#deb841",
    },
    footerStyle: {
      display: "none",
    },
  };

  return <ChatBot flow={flow} settings={settings} styles={styles} />;
}
