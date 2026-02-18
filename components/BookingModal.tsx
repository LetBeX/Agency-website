"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useBooking } from "./BookingContext";

export default function BookingModal() {
  const { isOpen, closeModal } = useBooking();

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeModal]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-[9999] p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-5xl h-[85vh] bg-[#09060f] border border-[#ffffff1a] rounded-2xl shadow-2xl overflow-hidden relative pointer-events-auto flex flex-col"
            >
              {/* Header/Close Button */}
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={closeModal}
                  className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Iframe Content */}
              <div className="w-full h-full relative overflow-hidden bg-[#09060f]">
                <iframe
                  src={process.env.NEXT_PUBLIC_BOOKING_LINK || "https://cal.com/rick/get-rick-rolled?theme=dark"}
                  width="100%"
                  height="100%" // Fallback default
                  frameBorder="0"
                  allowFullScreen
                  title="Book a Project Scope Call"
                  className="absolute left-0 w-full h-full md:top-[-46px] md:h-[calc(100%+90px)]"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
