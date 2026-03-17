"use client";
/*
 * Project: NAMAMI AI
 * Developer: Naman V Verma
 * Portfolio: https://officialnamanverma.vercel.app/
 * Description: AI-powered assistant with modern UI/UX
 */
import { motion, AnimatePresence } from "framer-motion";
/*
 * Project: NAMAMI AI
 * Developer: Naman V Verma
 * Portfolio: https://officialnamanverma.vercel.app/
 * Description: AI-powered assistant with modern UI/UX
 */
export default function AIAssistant({
  typing,
  loading,
}: {
  typing: boolean;
  loading: boolean;
}) {
  return (
    <div className="fixed bottom-4 right-6 z-50 pointer-events-none">
      <AnimatePresence>
        {(typing || loading) && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center">
              <div className="flex gap-2">
                <motion.div
                  animate={loading ? { scaleY: [1, 0.3, 1] } : {}}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="w-2 h-2 bg-white rounded-full"
                />
                <motion.div
                  animate={loading ? { scaleY: [1, 0.3, 1] } : {}}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="w-2 h-2 bg-white rounded-full"
                />
              </div>
            </div>

            <div className="text-xs text-gray-400 mt-2">
              {loading ? "Thinking..." : "Listening..."}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
/*
 * Project: NAMAMI AI
 * Developer: Naman V Verma
 * Portfolio: https://officialnamanverma.vercel.app/
 * Description: AI-powered assistant with modern UI/UX
 */