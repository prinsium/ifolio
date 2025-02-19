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


import Image from "next/image";

export default function Taskbar({ onSelect }) {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 shadow-lg min-w-max max-w-fit h-fit justify-center items-center">
      <div className="w-fit flex flex-row justify-around items-center bg-gray-700 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
        <div className="p-4 gap-4 flex flex-row justify-around items-center">
          <Image onClick={() => onSelect("about")} className="hover:scale-[1.15] transition-all duration-300 ease-in-out cursor-pointer"
            src="/web/63.svg" width={65} height={65} alt="About"/>
          <Image onClick={() => onSelect("work")} className="hover:scale-[1.15] transition-all duration-300 ease-in-out cursor-pointer"
            src="/web/79.svg" width={65} height={65} alt="Work"/>
          <Image onClick={() => onSelect("services")} className="hover:scale-[1.15] transition-all duration-300 ease-in-out cursor-pointer"
            src="/web/100.svg" width={65} height={65} alt="Services"/>
          <Image onClick={() => onSelect("contact")} className="hover:scale-[1.15] transition-all duration-300 ease-in-out cursor-pointer"
            src="/web/63.svg" width={65} height={65} alt="Contact"/>
        </div>
      </div>
    </div>
  );
}

