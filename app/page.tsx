"use client";
import { useEffect, useRef, useState } from "react";
import FOG from "vanta/src/vanta.fog.js";
import * as THREE from "three";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

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

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full z-0" />

      {/* Logo */}
      <div className="absolute top-4 left-4 z-10">
        <h1 className="text-white text-2xl sm:text-3xl font-extrabold">certpal</h1>
      </div>

      {/* Left Hand */}
      <motion.div
        className="absolute bottom-32 left-0 sm:left-[-40px] z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/hand-left.png"
          alt="Left Hand"
          width={300}
          height={300}
          className="drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] sm:w-[400px] sm:h-[400px]"
        />
      </motion.div>

      {/* Right Hand */}
      <motion.div
        className="absolute bottom-10 right-0 sm:right-[-32px] z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Image
          src="/hand-right.png"
          alt="Right Hand"
          width={300}
          height={300}
          className="drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] sm:w-[400px] sm:h-[400px]"
        />
      </motion.div>

      {/* Certificate */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-10 px-4"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/certificate.png"
          alt="Certificate"
          width={400}
          height={300}
          className="w-[90%] max-w-[500px] drop-shadow-[0_0_20px_rgba(255,255,255,1)]"
        />
      </motion.div>

      {/* Tagline */}
      <div className="absolute bottom-4 left-4 sm:left-6 z-10">
        <p className="text-white text-base sm:text-lg font-semibold">
          For all your certification needs.
        </p>
      </div>

      {/* Email Input */}
      <div className="absolute bottom-20 w-full flex justify-center z-10 px-4">
        <input
          type="email"
          placeholder="Enter email for further updates."
          className="bg-black/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg 
                     placeholder:text-white placeholder:opacity-70 w-full max-w-xs 
                     text-center transition-all duration-300 transform 
                     hover:scale-105 hover:shadow-lg"
        />
      </div>
    </div>
  );
}
