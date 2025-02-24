"use client";
import { useState, useEffect } from "react";
import { Rnd } from "react-rnd";
import dynamic from "next/dynamic";

// Dynamically import components with SSR disabled
const Services = dynamic(() => import("./windowRender/Services"), { ssr: false });
const Work = dynamic(() => import("./windowRender/Work"), { ssr: false });
const Contact = dynamic(() => import("./windowRender/Contact"), { ssr: false });
const About = dynamic(() => import("./windowRender/About"), { ssr: false });

export default function Window({ contentType, onClose }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDraggable, setIsDraggable] = useState(false);
  const [size, setSize] = useState({ width: "60vw", height: "60vh" });
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [ready, setReady] = useState(false); // Prevents hydration mismatch

  useEffect(() => {
    setReady(true);
  }, []);

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => {
      if (!prev) setIsDraggable(false); // Disable dragging when fullscreen
      return !prev;
    });
  };

  const toggleDraggable = () => {
    if (!isFullscreen) {
      setIsDraggable((prev) => !prev);
    }
  };

  return (
    <Rnd
      className="fixed bg-gray-200 rounded-md shadow-lg bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 transition-all duration-300 overflow-hidden"
      size={isFullscreen ? { width: "100vw", height: "100vh" } : size}
      position={isFullscreen ? { x: 0, y: 0 } : position}
      onDragStop={(e, d) => isDraggable && !isFullscreen && setPosition({ x: d.x, y: d.y })}
      onResizeStop={(e, direction, ref, delta, pos) =>
        !isFullscreen && setSize({ width: ref.style.width, height: ref.style.height })
      }
      disableDragging={!isDraggable}
    >
      {/* Draggable Header */}
      <div 
        className="p-2 rounded-t-md shadow-md flex flex-row justify-between items-center bg-slate-300"
      >
        <div className="z-30 flex flex-row gap-1.5">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="size-5 rounded-full bg-[#ff4570] border-[.2px] border-gray-700"
          ></button>
          {/* Fullscreen Toggle Button */}
          <button
            onClick={toggleFullscreen}
            className="size-5 rounded-full bg-[#ffe345] border-[.2px] border-gray-700"
          ></button>
          {/* Draggable Toggle Button */}
          <button
            onClick={toggleDraggable}
            className={`size-5 rounded-full border-[.2px] border-gray-700 ${isDraggable ? 'bg-purple-700' : 'bg-purple-500'}`}
          ></button>
        </div>
        <div className="absolute z-10 w-full flex justify-center items-center">
          <h1 className="text-center capitalize">{contentType}</h1>
        </div>
      </div>
      {/* Content Area */}
      <div className="p-4 overflow-auto h-full">
        {ready ? (
          contentType === "services" ? <Services /> :
          contentType === "work" ? <Work /> :
          contentType === "contact" ? <Contact /> :
          contentType === "about" ? <About /> :
          <div style={{ color: "red" }}>No content available (invalid type: {contentType})</div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </Rnd>
  );
}





// *********


// "use client";
// import { useState, useRef } from "react";
// import FullscreenToggle from "./utils/FullscreenToggle";

// export default function Window({ content, onClose }) {
//   const windowRef = useRef(null);
//   const [position, setPosition] = useState({ x: 100, y: 100 });
//   const [dragging, setDragging] = useState(false);
//   const [offset, setOffset] = useState({ x: 0, y: 0 });
//   const [isFullscreen, setIsFullscreen] = useState(false);

//   const getClientPos = (e) => {
//     if (e.touches) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
//     return { x: e.clientX, y: e.clientY };
//   };

//   const handleStart = (e) => {
//     if (isFullscreen) return; // Disable dragging in fullscreen
//     const { x, y } = getClientPos(e);
//     setDragging(true);
//     setOffset({ x: x - position.x, y: y - position.y });
//   };

//   const handleMove = (e) => {
//     if (!dragging || isFullscreen) return;
//     const { x, y } = getClientPos(e);
//     setPosition({ x: x - offset.x, y: y - offset.y });
//   };

//   const handleEnd = () => {
//     setDragging(false);
//   };

//   const toggleFullscreen = () => {
//     setIsFullscreen((prev) => !prev);
//   };

//   return (
//     <div
//       ref={windowRef}
//       className="fixed bg-gray-200 rounded-md shadow-lg bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 transition-all duration-300"
//       style={{
//         left: isFullscreen ? 0 : `${position.x}px`,
//         top: isFullscreen ? 0 : `${position.y}px`,
//         width: isFullscreen ? "100vw" : "60vw",
//         height: isFullscreen ? "100vh" : "60vh",
//         zIndex: isFullscreen ? 50 : 10,
//       }}
//       onMouseMove={handleMove}
//       onMouseUp={handleEnd}
//       onTouchMove={handleMove}
//       onTouchEnd={handleEnd}
//     >
//       {/* Draggable Header */}
//       <div
//         className="p-2 rounded-t-md shadow-md flex flex-row justify-between items-center bg-slate-300 cursor-grab"
//         onMouseDown={handleStart}
//         onTouchStart={handleStart}
//       >
//         <div className="z-30 flex flex-row gap-1.5">
//           {/* Close Button */}
//           <button
//             onClick={onClose}
//             className="size-5 rounded-full bg-[#ff4570] border-[.2px] border-gray-700"
//           ></button>
//           {/* Fullscreen Toggle Button */}
//           <button
//             onClick={toggleFullscreen}
//             className="size-5 rounded-full bg-[#ffe345] border-[.2px] border-gray-700"
//           ></button>
//         </div>
//         <div className="absolute z-10 w-full flex justify-center items-center">
//           <h1 className="text-center">{isFullscreen ? "Fullscreen Window" : "Window"}</h1>
//         </div>
//       </div>

//       {/* Content Area */}
//       <div className="p-4">{content}</div>
//     </div>
//   );
// }


// *********

// "use client";
// import { useState } from "react";
// import { Rnd } from "react-rnd";

// export default function Window({ content, onClose }) {
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [size, setSize] = useState({ width: "60vw", height: "60vh" });
//   const [position, setPosition] = useState({ x: 100, y: 100 });

//   const toggleFullscreen = () => {
//     setIsFullscreen((prev) => !prev);
//   };

//   return (
//     <Rnd
//       className="fixed bg-gray-200 rounded-md shadow-lg bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 transition-all duration-300"
//       size={isFullscreen ? { width: "100vw", height: "100vh" } : size}
//       position={isFullscreen ? { x: 0, y: 0 } : position}
//       onDragStop={(e, d) => !isFullscreen && setPosition({ x: d.x, y: d.y })}
//       onResizeStop={(e, direction, ref, delta, pos) =>
//         !isFullscreen && setSize({ width: ref.style.width, height: ref.style.height })
//       }
//       disableDragging={isFullscreen}
//     >
//       {/* Draggable Header */}
//       <div
//         className="p-2 rounded-t-md shadow-md flex flex-row justify-between items-center bg-slate-300 cursor-grab"
//       >
//         <div className="z-30 flex flex-row gap-1.5">
//           {/* Close Button */}
//           <button
//             onClick={onClose}
//             className="size-5 rounded-full bg-[#ff4570] border-[.2px] border-gray-700"
//           ></button>
//           {/* Fullscreen Toggle Button */}
//           <button
//             onClick={toggleFullscreen}
//             className="size-5 rounded-full bg-[#ffe345] border-[.2px] border-gray-700"
//           ></button>
//         </div>
//         <div className="absolute z-10 w-full flex justify-center items-center">
//           <h1 className="text-center">{isFullscreen ? "Fullscreen Window" : "Window"}</h1>
//         </div>
//       </div>
//       {/* Content Area */}
//       <div className="p-4">{content}</div>
//     </Rnd>
//   );
// }
