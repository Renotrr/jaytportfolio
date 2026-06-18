import { motion } from "framer-motion";

export const PhoneFrame = ({
  src,
  delay = 0,
  rotate = 0,
  className = "",
}: {
  src: string;
  delay?: number;
  rotate?: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: rotate * 0.5 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.2, 0.8, 0.2, 1] }}
      className={`relative ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* Glow */}
      <div
        className="absolute -inset-10 rounded-[60px] blur-3xl opacity-60 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsla(280,100%,68%,0.35) 0%, transparent 70%)",
        }}
      />
      {/* Frame */}
      <div
        className="relative w-[280px] h-[580px] rounded-[44px] p-[10px]"
        style={{
          background: "linear-gradient(160deg,#2a2a32 0%,#0d0d12 60%,#1a1a22 100%)",
          boxShadow:
            "0 30px 60px -20px rgba(0,0,0,0.7), 0 0 0 1.5px rgba(255,255,255,0.08), inset 0 0 0 1px rgba(255,255,255,0.04)",
        }}
      >
        <div className="relative w-full h-full rounded-[36px] overflow-hidden bg-background">
          {/* Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 w-24 h-6 bg-black rounded-full" />
          <iframe
            src={src}
            title={src}
            className="w-[390px] h-[844px] origin-top-left border-0 bg-background"
            style={{ transform: "scale(0.667)", width: "390px", height: "844px" }}
            scrolling="no"
          />
        </div>
      </div>
    </motion.div>
  );
};

export const LaptopFrame = ({
  src,
  delay = 0,
}: {
  src: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, delay, ease: [0.2, 0.8, 0.2, 1] }}
      className="relative w-full max-w-[920px] mx-auto"
    >
      <div
        className="absolute -inset-16 rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, hsla(280,100%,68%,0.4) 0%, transparent 65%)",
        }}
      />
      {/* Screen */}
      <div
        className="relative rounded-t-2xl p-3"
        style={{
          background: "linear-gradient(180deg,#2a2a32 0%,#15151c 100%)",
          boxShadow:
            "0 40px 80px -30px rgba(0,0,0,0.8), 0 0 0 1.5px rgba(255,255,255,0.06)",
        }}
      >
        <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-background">
          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-black/60 backdrop-blur-sm z-10 flex items-center px-3 gap-1.5 border-b border-white/5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
            <div className="ml-3 text-[10px] text-white/40 font-mono">
              queuetop.app
            </div>
          </div>
          <iframe
            src={src}
            title={src}
            className="absolute inset-0 w-full h-full border-0"
            style={{ paddingTop: "24px" }}
          />
        </div>
      </div>
      {/* Base */}
      <div
        className="h-3 rounded-b-2xl mx-auto"
        style={{
          background: "linear-gradient(180deg,#15151c 0%,#0a0a10 100%)",
          width: "108%",
          marginLeft: "-4%",
          boxShadow: "0 10px 20px -5px rgba(0,0,0,0.6)",
        }}
      />
      <div
        className="h-1 mx-auto rounded-b-full"
        style={{ width: "20%", background: "#0a0a10" }}
      />
    </motion.div>
  );
};
