
"use client"
import { useState } from "react";
import Taskbar from "./components/Taskbar";
import Window from "./components/Window";
import data from "./data/data";
import Topbar from "./components/Topbar";
import BottomNav from "./components/BottomNav";
import Work from "./components/windowRender/Work";
import About from "./components/windowRender/About";
import Contact from "./components/windowRender/Contact";


export default function App() {
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
      {/* <Taskbar onSelect={handleSelect} />
      {isWindowOpen && <Window content={selectedContent} onClose={handleClose} />} */}
      <Contact />
    </div>
  );
}