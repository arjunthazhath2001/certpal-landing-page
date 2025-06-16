"use client";
import { useEffect, useRef, useState } from "react";
import FOG from "vanta/src/vanta.fog.js";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<ReturnType<typeof FOG> | null>(null);

  const certificateImages = [
    "/cert1.webp",
    "/cert2.webp",
    "/cert3.webp",
    "/cert4.webp",
    "/cert5.webp",
    "/cert6.webp",
    "/cert7.webp",
    "/cert8.webp",
    "/cert9.webp",
    "/cert10.webp",
  ];
  const [currentCert, setCurrentCert] = useState(0);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x20ff,
          midtoneColor: 0xc5ff,
          lowlightColor: 0xe5e5f2,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCert((prev) => (prev + 1) % certificateImages.length);
    }, 600); // Rotate every 600ms
    return () => clearInterval(interval);
  }, [certificateImages.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full z-0" />

      {/* Logo top-left */}
      <div className="absolute top-10 left-12 z-10">
        <h1 className="text-white text-3xl font-extrabold">certpal</h1>
      </div>

      {/* Text tagline above certificate */}
      <div className="absolute top-[20%] md:top-[15%] w-full flex justify-center z-10">
        <p className="text-white text-center text-3xl md:text-4xl font-bold px-4 max-w-[400px] md:max-w-[500px]">
          11+ Industries.<br></br> 5000+ Ceritifications.
        </p>
      </div>

      {/* Animated Certificate Montage */}
      <motion.div
        className="absolute inset-0 flex items-center top-20 justify-center z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative w-[80%] sm:w-[60%] md:w-[40%] max-w-[600px] aspect-[5/3]">
     <AnimatePresence mode="wait">
      <motion.img
        key={certificateImages[currentCert]}
        src={certificateImages[currentCert]}
        alt="Certificate"
        className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(255,255,255,1)] absolute"
      />
    </AnimatePresence>

        </div>
      </motion.div>

      {/* Email input */}
      <div className="absolute bottom-35 md:bottom-20 w-full flex justify-center z-10">
        <input
          type="email"
          placeholder="Enter email for further updates."
          className="bg-black/50 backdrop-blur-sm text-white px-6 py-2 rounded-lg 
                  placeholder:text-white placeholder:opacity-70 w-[300px] text-center 
                  transition-all duration-300 transform 
                  hover:scale-105 hover:shadow-lg"
        />
      </div>
    </div>
  );
}
