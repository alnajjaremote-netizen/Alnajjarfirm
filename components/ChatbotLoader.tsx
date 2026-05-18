"use client";

import dynamic from "next/dynamic";
import { Component, type ReactNode } from "react";

const Chatbot = dynamic(() => import("@/components/Chatbot"), {
  ssr: false,
  loading: () => null,
});

class ChatbotErrorBoundary extends Component<
  { children: ReactNode },
  { error: boolean }
> {
  state = { error: false };

  static getDerivedStateFromError() {
    return { error: true };
  }

  render() {
    if (this.state.error) return null;
    return this.props.children;
  }
}

export default function ChatbotLoader() {
  return (
    <ChatbotErrorBoundary>
      <Chatbot />
    </ChatbotErrorBoundary>
  );
}
