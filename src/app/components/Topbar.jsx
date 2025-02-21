import FullscreenToggle from "./utils/FullscreenToggle";
import TimeZoneDisplay from "./utils/TimeZoneDisplay";


export default function Topbar() {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 shadow-lg min-w-max max-w-fit h-fit justify-center items-center gap-2 flex flex-row">
      
      <div className="w-fit flex flex-row justify-around items-center bg-gray-700 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">

        <div className="flex flex-row justify-center items-center p-2">
        <div className="text-gray-300 jersey flex flex-row gap-1">
          Local Time : <span><TimeZoneDisplay /></span> // India
        </div>
        </div>
      
      </div>

      <FullscreenToggle />
      
    </div>
  );
}