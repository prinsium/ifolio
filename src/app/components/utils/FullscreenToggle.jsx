"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function FullscreenToggle() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Handle fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Listen for fullscreen changes (ESC key or other exits)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <button
      onClick={toggleFullscreen}
      className="p-3 text-white bg-gray-700 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20"
    >
      {isFullscreen ? 
      <div><Image src="/web/close.svg" width={18} height={18} alt="open"/></div> : 
      <div><Image src="/web/open.svg" width={18} height={18} alt="close"/></div>
        }
    </button>
  );
}
