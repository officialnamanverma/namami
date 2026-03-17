"use client";
/*
 * Project: NAMAMI AI
 * Developer: Naman V Verma
 * Portfolio: https://officialnamanverma.vercel.app/
 * Description: AI-powered assistant with modern UI/UX
 */
import Link from "next/link";
import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden text-white bg-[#0b0f1a]">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(138,180,248,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(192,132,252,0.15),transparent_40%),radial-gradient(circle_at_50%_50%,rgba(249,168,212,0.08),transparent_50%)]"></div>

      <div className="mb-6 px-6 py-2 rounded-full bg-white/[0.04] border border-white/5 backdrop-blur-md">
        <span className="text-sm bg-gradient-to-r from-[#8ab4f8] via-[#c084fc] to-[#f9a8d4] bg-clip-text text-transparent">
          NAMAMI
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full bg-white/[0.04] border border-white/5 rounded-3xl p-8 backdrop-blur-xl"
      >
        <Link href="/" className="text-sm text-gray-400 hover:text-white transition">
          ← Back
        </Link>

        <h1 className="text-3xl font-semibold mt-4 mb-2 bg-gradient-to-r from-[#8ab4f8] via-[#c084fc] to-[#f9a8d4] bg-clip-text text-transparent">
          Privacy Policy
        </h1>

        <p className="text-gray-400 text-sm mb-6">
          Your trust matters. We design NAMAMI to respect your privacy.
        </p>

        <div className="space-y-4 text-sm text-gray-300">
          <div className="p-4 rounded-xl bg-white/[0.05] border border-white/5">
            AI assistance is provided with a privacy-first approach.
          </div>

          <div className="p-4 rounded-xl bg-white/[0.05] border border-white/5">
            Conversations are processed in real-time only.
          </div>

          <div className="p-4 rounded-xl bg-white/[0.05] border border-white/5">
            No sensitive data is stored or shared.
          </div>
        </div>

        <div className="mt-6 text-xs text-gray-400 flex justify-between">
          <span>© {new Date().getFullYear()} NAMAMI</span>

          <a
            href="https://officialnamanverma.vercel.app/"
            target="_blank"
            className="text-[#8ab4f8] hover:text-white transition"
          >
            Naman V Verma
          </a>
        </div>
      </motion.div>
    </div>
  );
}
/*
 * Project: NAMAMI AI
 * Developer: Naman V Verma
 * Portfolio: https://officialnamanverma.vercel.app/
 * Description: AI-powered assistant with modern UI/UX
 */