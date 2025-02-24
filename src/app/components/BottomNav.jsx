// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import Window from "./Window";
// import data from "../data/data"; // Ensure data.js contains content for windows

// export default function BottomNav() {
//   const [openWindows, setOpenWindows] = useState([]);

//   const handleClick = (type) => {
//     console.log(`Opening window: ${type}`);
  
//     setOpenWindows((prev) => {
//       if (prev.some((win) => win.id === type)) return prev; // Prevent duplicates
//       return [...prev, { id: type }];
//     });
//   };

//   const handleClose = (id) => {
//     setOpenWindows((prev) => prev.filter((win) => win.id !== id));
//   };

//   return (
//     <>
//       {/* Taskbar */}
//       <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 shadow-lg min-w-max max-w-fit h-fit justify-center items-center">
//         <div className="w-fit flex flex-row justify-around items-center bg-gray-700 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
//           <div className="p-4 gap-4 flex flex-row justify-around items-center">
//             {[
//               { src: "about", alt: "About", id: "about" },
//               { src: "work", alt: "Work", id: "work" },
//               { src: "services", alt: "Services", id: "services" },
//               { src: "contact", alt: "Contact", id: "contact" },
//             ].map(({ src, alt, id }) => (
//               <div key={id} className="relative group flex flex-col items-center">
//                 <span className="absolute -top-8 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//                   {alt}
//                 </span>
//                 <div className="hover:bg-white hover:text-black px-2 py-1 rounded-xl transition-all duration-300 ease-in-out cursor-pointer"
//                 onClick={() => handleClick(id)}>{src}</div>

//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Render all open windows */}
//       {openWindows.map((win) => (
//         <Window key={win.id} content={win.content} onClose={() => handleClose(win.id)} />
//       ))}
//     </>
//   );
// }

"use client";
import { useState } from "react";
import Window from "./Window";

export default function BottomNav() {
  const [openWindows, setOpenWindows] = useState([]);

  const handleClick = (type) => {
    console.log(`Opening window: ${type}`);

    setOpenWindows((prev) => {
      if (prev.some((win) => win.id === type)) return prev; // Prevent duplicates
      return [...prev, { id: type, contentType: type }]; // Ensure contentType is passed
    });
  };

  const handleClose = (id) => {
    setOpenWindows((prev) => prev.filter((win) => win.id !== id));
  };

  return (
    <>
      {/* Taskbar */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 shadow-lg min-w-max max-w-fit h-fit justify-center items-center">
        <div className="w-fit flex flex-row justify-around items-center bg-gray-700 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
          <div className="p-4 gap-4 flex flex-row justify-around items-center">
            {[
              { src: "about", alt: "About", id: "about" },
              { src: "work", alt: "Work", id: "work" },
              { src: "services", alt: "Services", id: "services" },
              { src: "contact", alt: "Contact", id: "contact" },
            ].map(({ src, alt, id }) => (
              <div key={id} className="relative group flex flex-col items-center">
                <span className="absolute -top-8 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {alt}
                </span>
                <div
                  className="hover:bg-white hover:text-black px-2 py-1 rounded-xl transition-all duration-300 ease-in-out cursor-pointer"
                  onClick={() => handleClick(id)}
                >
                  {src}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Render all open windows */}
      {openWindows.map((win) => (
        <Window key={win.id} contentType={win.contentType} onClose={() => handleClose(win.id)} />
      ))}
    </>
  );
}
