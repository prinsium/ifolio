// export default function Window(){
//     return(
//         <div className="w-[80vw] h-[80vh] bg-gray-200 rounded-md shadow-lg bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
//             <div className="w-full h-full flex flex-col">
            
//             <div className="relative p-2 rounded-t-md shadow-md flex flex-row justify-between items-center bg-slate-300">

//                 <div className="flex flex-row gap-1.5">
//                 <button className="size-5 rounded-full bg-[#ff4570] border-[.2px] border-gray-700"></button>
//                 <button className="size-5 rounded-full bg-[#ffe345] border-[.2px] border-gray-700"></button>
//                 </div>

//                 <div className="absolute w-full justify-center items-center">
//                 <h1 className="text-center">work</h1>
//                 </div>

//             </div>

//             <div></div>

//             </div>
//         </div>
//     )
// }

// ************


// "use client";
// import { useState, useRef } from "react";

// export default function Window({ content, onClose }) {
//   const windowRef = useRef(null);
//   const [position, setPosition] = useState({ x: 100, y: 100 });
//   const [dragging, setDragging] = useState(false);
//   const [offset, setOffset] = useState({ x: 0, y: 0 });

//   const getClientPos = (e) => {
//     if (e.touches) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
//     return { x: e.clientX, y: e.clientY };
//   };

//   const handleStart = (e) => {
//     const { x, y } = getClientPos(e);
//     setDragging(true);
//     setOffset({ x: x - position.x, y: y - position.y });
//   };

//   const handleMove = (e) => {
//     if (!dragging) return;
//     const { x, y } = getClientPos(e);
//     setPosition({ x: x - offset.x, y: y - offset.y });
//   };

//   const handleEnd = () => {
//     setDragging(false);
//   };

//   return (
//     <div
//       ref={windowRef}
//       className="fixed w-[80vw] h-[80vh] bg-gray-200 rounded-md shadow-lg bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20"
//       style={{ left: `${position.x}px`, top: `${position.y}px` }}
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
//             onClick={() => {
//               console.log("Close button clicked!"); // DEBUG
//               onClose(); // Close the window
//             }}
//             className="size-5 rounded-full bg-[#ff4570] border-[.2px] border-gray-700"
//           ></button>
//           <button className="size-5 rounded-full bg-[#ffe345] border-[.2px] border-gray-700"></button>
//         </div>
//         <div className="absolute z-10 w-full flex justify-center items-center">
//           <h1 className="text-center">Window</h1>
//         </div>
//       </div>

//       {/* Content Area */}
//       <div className="p-4">{content}</div>
//     </div>
//   );
// }

// *********


// "use client";
// import { useState, useRef } from "react";
// import FullscreenToggle from "./utils/FullscreenToggle";

// export default function Window({ content, onClose }) {
//   const windowRef = useRef(null);
//   const [position, setPosition] = useState({ x: 100, y: 100 });
//   const [dragging, setDragging] = useState(false);
//   const [offset, setOffset] = useState({ x: 0, y: 0 });

//   const getClientPos = (e) => {
//     if (e.touches) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
//     return { x: e.clientX, y: e.clientY };
//   };

//   const handleStart = (e) => {
//     const { x, y } = getClientPos(e);
//     setDragging(true);
//     setOffset({ x: x - position.x, y: y - position.y });
//   };

//   const handleMove = (e) => {
//     if (!dragging) return;
//     const { x, y } = getClientPos(e);
//     setPosition({ x: x - offset.x, y: y - offset.y });
//   };

//   const handleEnd = () => {
//     setDragging(false);
//   };

//   return (
//     <div
//       ref={windowRef}
//       className="fixed w-[60vw] h-[60vh] bg-gray-200 rounded-md shadow-lg bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20"
//       style={{ left: `${position.x}px`, top: `${position.y}px` }}
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
//           <button className="size-5 rounded-full bg-[#ffe345] border-[.2px] border-gray-700"></button>
//         </div>
//         <div className="absolute z-10 w-full flex justify-center items-center">
//           <h1 className="text-center">Window</h1>
//         </div>
//       </div>

//       {/* Content Area */}
//       <div className="p-4">{content}</div>
//     </div>
//   );
// }


"use client";
import { useState, useRef } from "react";
import FullscreenToggle from "./utils/FullscreenToggle";

export default function Window({ content, onClose }) {
  const windowRef = useRef(null);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);

  const getClientPos = (e) => {
    if (e.touches) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    return { x: e.clientX, y: e.clientY };
  };

  const handleStart = (e) => {
    if (isFullscreen) return; // Disable dragging in fullscreen
    const { x, y } = getClientPos(e);
    setDragging(true);
    setOffset({ x: x - position.x, y: y - position.y });
  };

  const handleMove = (e) => {
    if (!dragging || isFullscreen) return;
    const { x, y } = getClientPos(e);
    setPosition({ x: x - offset.x, y: y - offset.y });
  };

  const handleEnd = () => {
    setDragging(false);
  };

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  return (
    <div
      ref={windowRef}
      className="fixed bg-gray-200 rounded-md shadow-lg bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 transition-all duration-300"
      style={{
        left: isFullscreen ? 0 : `${position.x}px`,
        top: isFullscreen ? 0 : `${position.y}px`,
        width: isFullscreen ? "100vw" : "60vw",
        height: isFullscreen ? "100vh" : "60vh",
        zIndex: isFullscreen ? 50 : 10,
      }}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
    >
      {/* Draggable Header */}
      <div
        className="p-2 rounded-t-md shadow-md flex flex-row justify-between items-center bg-slate-300 cursor-grab"
        onMouseDown={handleStart}
        onTouchStart={handleStart}
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
        </div>
        <div className="absolute z-10 w-full flex justify-center items-center">
          <h1 className="text-center">{isFullscreen ? "Fullscreen Window" : "Window"}</h1>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4">{content}</div>
    </div>
  );
}

