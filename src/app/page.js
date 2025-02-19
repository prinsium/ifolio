import Taskbar from "./components/Taskbar";
import Window from "./components/Window";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Window />
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 shadow-lg w-fit h-fit justify-center items-center">
      <Taskbar />
      </div>
    </div>
  );
}
