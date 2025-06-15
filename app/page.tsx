"use client";
import { useEffect, useRef, useState } from "react";
import FOG from "vanta/src/vanta.fog.js";
import * as THREE from "three";
import Image from "next/image";

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
      {/* Background effect */}
      <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full z-0" />

      {/* Certpal logo (top-left) */}
      <div className="absolute top-6 left-6 z-10">
        <h1 className="text-white text-3xl font-extrabold">certpal</h1>
      </div>

      {/* Left hand */}
      <div className="absolute bottom-50 -left-10 z-10">
        <Image src="/hand-left.png" alt="Left Hand" width={500} height={500} />
      </div>

      {/* Right hand */}
      <div className="absolute bottom-10 -right-8 z-10">
        <Image src="/hand-right.png" alt="Right Hand" width={500} height={500} />
      </div>

      {/* Certificate in center */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <Image src="/certificate.png" alt="Certificate" width={500} height={350} />
      </div>

      {/* Bottom-left text */}
      <div className="absolute bottom-6 left-6 z-10">
        <p className="text-white text-xl font-semibold">
          For all your certification needs.
        </p>
      </div>

      {/* Email input (centered bottom) */}
      <div className="absolute bottom-20 w-full flex justify-center z-10">
        <input
        type="email"
        placeholder="Enter email for further updates."
        className="bg-black/20 backdrop-blur-sm text-white px-6 py-2 rounded-lg 
                  placeholder:text-white placeholder:opacity-70 w-[300px] text-center 
                  transition-all duration-300 transform 
                  hover:scale-105 hover:shadow-lg"
      />
      </div>
    </div>
  );
}
