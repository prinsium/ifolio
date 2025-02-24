
"use client"
import { useEffect, useState } from "react";
import Taskbar from "./components/Taskbar";
import Window from "./components/Window";
import data from "./data/data";
import Topbar from "./components/Topbar";
import BottomNav from "./components/BottomNav";
import Work from "./components/windowRender/Work";
import About from "./components/windowRender/About";
import Contact from "./components/windowRender/Contact";
import Services from "./components/windowRender/Services";


export default function App() {

  useEffect(() => {
    const preventReload = (e) => {
      if (e.touches.length > 1 || window.scrollY === 0) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchmove", preventReload, { passive: false });

    return () => {
      document.removeEventListener("touchmove", preventReload);
    };
  }, []);


  const [selectedContent, setSelectedContent] = useState(null);
  const [isWindowOpen, setIsWindowOpen] = useState(false);

  const handleSelect = (section) => {
    setSelectedContent(data[section]);
    setIsWindowOpen(true);
  };

  const handleClose = () => {
    setIsWindowOpen(false);
  };

  return (
    <div>
      <Topbar />
      <BottomNav onSelect={handleSelect} />
      {isWindowOpen && <Window content={selectedContent} onClose={handleClose} />}
  
    </div>
  );
}