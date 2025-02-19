// import FullscreenToggle from "./components/FullscreenToggle";
// import Taskbar from "./components/Taskbar";
// import Window from "./components/Window";

// export default function Home() {
//   return (
//     <div className="w-screen h-screen">
//       <FullscreenToggle />
//       <div className="m-10">
//       <Window />
//       </div>
//       <Taskbar />
//     </div>
//   );
// }


"use client"
import { useState } from "react";
import Taskbar from "./components/Taskbar";
import Window from "./components/Window";
import data from "./data/data";


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
      <Taskbar onSelect={handleSelect} />
      {isWindowOpen && <Window content={selectedContent} onClose={handleClose} />}
    </div>
  );
}
