"use client"
import { useEffect, useRef, useState } from "react";
import FOG from 'vanta/src/vanta.fog.js';
import * as THREE from "three";

export default function Home() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(FOG({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0x20ff,
        midtoneColor: 0xc5ff,
        lowlightColor: 0xe5e5f2
      }));
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div>
      <div ref={vantaRef} className="w-full h-screen overflow-hidden" />
    </div>
  );
}
