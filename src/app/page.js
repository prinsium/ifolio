import Taskbar from "./components/Taskbar";
import Window from "./components/Window";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Window />
      <Taskbar />
    </div>
  );
}
