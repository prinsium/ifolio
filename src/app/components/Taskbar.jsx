// import Image from "next/image";

// export default function Taskbar() {
//   return (
//     <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 shadow-lg min-w-max max-w-fit h-fit justify-center items-center">
//       <div className="w-fit flex flex-row justify-around items-center bg-gray-700 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
//         <div className="p-4 gap-4 flex flex-row justify-around items-center">
//           <Image  className="hover:scale-[1.15] transition-all duration-300 ease-in-out cursor-pointer"
//             src="/web/63.svg" width={65} height={65} alt="Start"/>
//           <Image  className="hover:scale-[1.15] transition-all duration-300 ease-in-out cursor-pointer"
//             src="/web/79.svg" width={65} height={65} alt="Start"/>
//           <Image className="hover:scale-[1.15] transition-all duration-300 ease-in-out cursor-pointer"
//             src="/web/100.svg" width={65} height={65} alt="Start"/>
//             <Image  className="hover:scale-[1.15] transition-all duration-300 ease-in-out cursor-pointer"
//             src="/web/63.svg" width={65} height={65} alt="Start"/>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import { useState } from "react";
import Image from "next/image";
import Window from "./Window";
import data from "../data/data"; // Assuming data.js contains content for windows

export default function Taskbar() {
  const [activeWindow, setActiveWindow] = useState(null);

  const handleClick = (type) => {
    console.log(`Opening window: ${type}`); // DEBUG
    setActiveWindow(type);
  };

  return (
    <>
      {/* Taskbar */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 shadow-lg min-w-max max-w-fit h-fit justify-center items-center">
        <div className="w-fit flex flex-row justify-around items-center bg-gray-700 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
          {/* <div className="p-4 gap-4 flex flex-row justify-around items-center">
            <Image className="hover:scale-[1.15] transition-all duration-300 ease-in-out cursor-pointer" id="about"
              src="/web/about.svg" width={65} height={65} alt="About" onClick={() => handleClick("about")} />
            <Image className="hover:scale-[1.15] transition-all duration-300 ease-in-out cursor-pointer"
              src="/web/work.svg" width={65} height={65} alt="Work" onClick={() => handleClick("work")} />
            <Image className="hover:scale-[1.15] transition-all duration-300 ease-in-out cursor-pointer"
              src="/web/100.svg" width={65} height={65} alt="Services" onClick={() => handleClick("services")} />
            <Image className="hover:scale-[1.15] transition-all duration-300 ease-in-out cursor-pointer"
              src="/web/contact.svg" width={65} height={65} alt="Contact" onClick={() => handleClick("contact")} />
          </div> */}

<div className="p-4 gap-4 flex flex-row justify-around items-center">
  {[
    { src: "/web/about.svg", alt: "About", id: "about" },
    { src: "/web/work.svg", alt: "Work", id: "work" },
    { src: "/web/services.svg", alt: "Services", id: "services" },
    { src: "/web/contact.svg", alt: "Contact", id: "contact" },
  ].map(({ src, alt, id }) => (
    <div key={id} className="relative group flex flex-col items-center">
      {/* Label hidden by default, appears on hover */}
      <span className="absolute -top-8 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {alt}
      </span>
      <Image
        className="hover:scale-[1.15] transition-all duration-300 ease-in-out cursor-pointer"
        src={src}
        width={65}
        height={65}
        alt={alt}
        onClick={() => handleClick(id)}
      />
    </div>
  ))}
</div>


        </div>
      </div>

      {/* Render Window if activeWindow is set */}
      {activeWindow && (
        <Window
          content={data[activeWindow]}
          onClose={() => {
            console.log("Closing window..."); // DEBUG
            setActiveWindow(null);
          }}
        />
      )}
    </>
  );
}

