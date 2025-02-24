// import { workData } from "@/app/data/workData";

// export default function Work() {
//   return (
//     <div className="flex flex-col justify-between items-center">
//       {workData.map((work, index) => (
//         <div key={index} className="p-4 gap-4 flex flex-col justify-around items-center" >
//           <h1>{work.name}</h1>

//           <img src={work.image} className="w-[200px] h-[160px]" alt="{work.name}"/>
//         </div>
//       ))}
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { workData } from "@/app/data/workData";

export default function Work() {
  const [selectedWork, setSelectedWork] = useState(workData[0]); // Default to id = 1

  return (
    <div className="grid grid-cols-[200px_1fr] h-screen p-6 gap-6">
      {/* Left Column: Names */}
      <div className="flex flex-col gap-2">
        {workData.map((work) => (
          <button
            key={work.id}
            className={`p-2 text-left bg-gray-700 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 ${
              selectedWork.id === work.id ? "text-green-400 bg-gray-200" : "text-gray-200"
            }`}
            onClick={() => setSelectedWork(work)}
          >
            {work.name}
          </button>
        ))}
      </div>

      {/* Right Column: Image */}
      <div className="flex flex-col justify-start items-start">
        <img src={selectedWork.image} className="w-[300px] h-[240px] object-cover" alt={selectedWork.name}/>
        <h1>{selectedWork.para}</h1>
        <p>{selectedWork.tools}</p>
      </div>
    </div>
  );
}
