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
      className="fixed top-4 right-4 p-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 transition"
    >
      {isFullscreen ? 
      <div><Image src="/web/close.svg" width={15} height={15} alt="open"/></div> : 
      <div><Image src="/web/open.svg" width={15} height={15} alt="close"/></div>
        }
    </button>
  );
}
