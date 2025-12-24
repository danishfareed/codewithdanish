"use client";
import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
const FINAL_TEXT = ["CODE", "WITH", "DANISH"];

export default function Logo() {
  const [displayWords, setDisplayWords] = useState([
    { text: "CODE", settled: true },
    { text: "WITH", settled: true },
    { text: "DANISH", settled: true },
  ]);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDisplayWords([
      { text: "CODE", settled: false },
      { text: "WITH", settled: false },
      { text: "DANISH", settled: false },
    ]);

    let frame = 0;
    const duration = 30;
    const staggerDelay = 10;

    const interval = setInterval(() => {
      frame++;

      setDisplayWords((prev) =>
        prev.map((word, wordIdx) => {
          const settleFrame = duration - staggerDelay * (2 - wordIdx);
          
          if (frame >= settleFrame && !word.settled) {
            return { text: FINAL_TEXT[wordIdx], settled: true };
          }

          if (word.settled) return word;

          return {
            text: FINAL_TEXT[wordIdx]
              .split("")
              .map(() => CHARS[Math.floor(Math.random() * CHARS.length)])
              .join(""),
            settled: false,
          };
        })
      );

      if (frame >= duration + 10) {
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, 60);
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <div 
      className="font-mono text-xl font-bold flex items-center gap-1.5 tracking-tight cursor-pointer select-none"
      onMouseEnter={startAnimation}
    >
      <span className="text-white/30">{`{`}</span>
      
      <div className="flex gap-2">
        {displayWords.map((word, idx) => (
          <span
            key={idx}
            className={`inline-block transition-all duration-500 ${
              word.settled 
                ? "opacity-100 scale-100 bg-gradient-to-r from-sky-400 via-violet-400 to-pink-400 bg-clip-text text-transparent" 
                : "opacity-60 scale-95"
            }`}
            style={{
              color: word.settled ? "transparent" : "rgba(255,255,255,0.4)",
              textShadow: word.settled
                ? "0 0 24px rgba(124,58,237,0.5), 0 0 8px rgba(124,58,237,0.3)"
                : "none",
              transform: word.settled ? "translateY(0)" : "translateY(2px)",
            }}
          >
            {word.text}
          </span>
        ))}
      </div>

      <span className="text-white/30">{`}`}</span>
    </div>
  );
}
