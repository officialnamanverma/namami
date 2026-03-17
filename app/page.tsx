"use client";
/*
 * Project: NAMAMI AI
 * Developer: Naman V Verma
 * Portfolio: https://officialnamanverma.vercel.app/
 * Description: AI-powered assistant with modern UI/UX
 */
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import AIAssistant from "@/components/AIAssistant";

export default function Home() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<any[]>([
    { role: "assistant", content: "Hello 👋 I’m NAMAMI. How can I help you?" },
  ]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<any>(null);

  const typing = input.length > 0;
/*
 * Project: NAMAMI AI
 * Developer: Naman V Verma
 * Portfolio: https://officialnamanverma.vercel.app/
 * Description: AI-powered assistant with modern UI/UX
 */
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const streamText = async (text: string, baseMessages: any[]) => {
    let current = "";
    for (let i = 0; i < text.length; i++) {
      current += text[i];
      setMessages([...baseMessages, { role: "assistant", content: current }]);
      await new Promise((r) => setTimeout(r, 10));
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: newMessages.slice(-5) }),
    });

    const data = await res.json();

    setLoading(false);
    await streamText(data.reply, newMessages);
  };

  return (
    <div className="h-screen flex flex-col text-white relative overflow-hidden bg-[#0b0f1a]">

      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_20%_30%,rgba(138,180,248,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(192,132,252,0.15),transparent_40%),radial-gradient(circle_at_50%_50%,rgba(249,168,212,0.08),transparent_50%)]"></div>

      <div className="w-full flex justify-center pt-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-6 py-2 rounded-full bg-white/[0.04] border border-white/5 backdrop-blur-md"
        >
          <h1 className="text-lg font-medium tracking-wide bg-gradient-to-r from-[#8ab4f8] via-[#c084fc] to-[#f9a8d4] bg-clip-text text-transparent">
            NAMAMI
          </h1>
        </motion.div>
      </div>

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-2xl">

          <div className="w-full h-[70vh] rounded-3xl border border-white/5 bg-white/[0.04] backdrop-blur-xl flex flex-col overflow-hidden">

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              <AnimatePresence>
                {messages.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`px-4 py-3 rounded-2xl max-w-[75%] text-sm ${
                        m.role === "user"
                          ? "bg-gradient-to-r from-[#8ab4f8] to-[#c084fc] text-black"
                          : "bg-white/[0.05] border border-white/5"
                      }`}
                    >
                      {m.content}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {loading && (
                <div className="text-sm text-[#8ab4f8]">Thinking...</div>
              )}

              <div ref={chatEndRef} />
            </div>

            <div className="p-4 border-t border-white/5 flex gap-3 bg-white/[0.02]">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Message NAMAMI..."
                className="flex-1 px-4 py-3 rounded-xl bg-white/[0.05] border border-white/5 outline-none focus:ring-1 focus:ring-[#8ab4f8]/40"
              />

              <button
                onClick={sendMessage}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                →
              </button>
            </div>
          </div>

          <div className="mt-6 text-xs text-gray-400 text-center space-y-1">
            <div>
              © {new Date().getFullYear()} NAMAMI •{" "}
              <Link href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </div>

            <div>
              Built by{" "}
              <a
                href="https://officialnamanverma.vercel.app/"
                target="_blank"
                className="text-[#8ab4f8] hover:text-white transition"
              >
                Naman V Verma
              </a>
            </div>
          </div>
        </div>
      </div>

      <AIAssistant typing={typing} loading={loading} />
    </div>
  );
}
/*
 * Project: NAMAMI AI
 * Developer: Naman V Verma
 * Portfolio: https://officialnamanverma.vercel.app/
 * Description: AI-powered assistant with modern UI/UX
 */