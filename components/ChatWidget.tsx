"use client";
import { useState, useEffect, useRef } from "react";
import { sendChatMessage } from "@/app/actions/chat";

export default function ChatWidget() {
  const [isAppearing, setIsAppearing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { role: "user" | "ai"; text: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState("");

  const scrollBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAppearing(!entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    const hero = document.getElementById("hero-trigger");
    if (hero) observer.observe(hero);

    return () => {
      if (hero) observer.unobserve(hero);
    };
  }, []);

  useEffect(() => {
    let id = localStorage.getItem("hbs_session_id");
    if (!id) {
      id = `HBS-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      localStorage.setItem("hbs_session_id", id);
    }
    setSessionId(id);
  }, []);

  useEffect(() => {
    scrollBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userText = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setInput("");
    setLoading(true);

    const result = await sendChatMessage(userText, sessionId);

    if (result.error) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "⚠️ " + result.error },
      ]);
    } else {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: result.output || "" },
      ]);
    }
    setLoading(false);
  };

  if (!isAppearing) return null;

  return (
    // Container: Adjust spacing from edges based on screen size
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end group max-w-[calc(100vw-2rem)]">
      {/* Chat Window */}
      {isOpen && (
        <div
          className="mb-4 flex flex-col bg-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-300
          /* Responsive Widths */
          w-[calc(100vw-2rem)] 
          xs:w-[320px] 
          sm:w-[380px] 
          md:w-[400px] 
          lg:w-[420px]
          /* Responsive Heights */
          h-[50vh]
          sm:h-[500px] 
          max-h-[700px]"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-3 sm:p-4 text-white flex justify-between items-center shrink-0">
            <div>
              <h3 className="font-semibold text-sm sm:text-base">
                HBS AI Assistant
              </h3>
              <p className="text-[10px] text-blue-100 opacity-70 uppercase tracking-widest">
                Live Support
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/10 p-2 rounded-full transition-colors touch-manipulation"
              aria-label="Close chat"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m18 6-12 12" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          {/* Messages: Flexible height */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scroll-smooth">
            {messages.length === 0 && (
              <div className="text-center text-gray-400 text-xs mt-10 sm:mt-20 px-6 sm:px-10 italic">
                Hi! I can help you with hardware repairs, software installs, or
                networking queries.
              </div>
            )}

            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[90%] sm:max-w-[85%] px-3 py-2 sm:px-4 sm:py-2 rounded-2xl text-xs sm:text-sm ${
                    m.role === "user"
                      ? "bg-blue-600 text-white rounded-tr-none shadow-lg shadow-blue-900/20"
                      : "bg-white/10 text-gray-100 border border-white/5 rounded-tl-none"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/5 text-gray-400 px-4 py-2 rounded-2xl text-[10px] animate-pulse">
                  AI Assistant is typing...
                </div>
              </div>
            )}
            <div ref={scrollBottomRef} />
          </div>

          {/* Input: Responsive padding */}
          <div className="p-3 sm:p-4 bg-black/20 border-t border-white/10 flex gap-2 shrink-0">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="How can we help?"
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white p-2 rounded-xl transition-all flex items-center justify-center min-w-[40px] touch-manipulation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button: Slightly larger for touch on mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-500 text-white p-3.5 sm:p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 border border-white/20 touch-manipulation flex items-center justify-center"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 6-12 12" />
            <path d="m6 6 12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          </svg>
        )}
      </button>
    </div>
  );
}
