
"use client"
import { useState } from "react";
import Taskbar from "./components/Taskbar";
import Window from "./components/Window";
import data from "./data/data";
import Topbar from "./components/Topbar";


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
      <Taskbar onSelect={handleSelect} />
      {isWindowOpen && <Window content={selectedContent} onClose={handleClose} />}
    </div>
  );
}