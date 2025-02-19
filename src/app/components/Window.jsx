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


"use client";
import { useState, useRef } from "react";

export default function Window({ content, onClose }) {
  const windowRef = useRef(null);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Start Dragging
  const handleMouseDown = (e) => {
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  // Dragging
  const handleMouseMove = (e) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  // Stop Dragging
  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      ref={windowRef}
      className="fixed w-[80vw] h-[80vh] bg-gray-200 rounded-md shadow-lg bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Draggable Header */}
      <div
        className="p-2 rounded-t-md shadow-md flex flex-row justify-between items-center bg-slate-300 cursor-grab"
        onMouseDown={handleMouseDown}
      >
        <div className="flex flex-row gap-1.5">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="size-5 rounded-full bg-[#ff4570] border-[.2px] border-gray-700"
          ></button>
          <button className="size-5 rounded-full bg-[#ffe345] border-[.2px] border-gray-700"></button>
        </div>
        <div className="absolute w-full flex justify-center items-center">
          <h1 className="text-center">Window</h1>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4">{content}</div>
    </div>
  );
}

  