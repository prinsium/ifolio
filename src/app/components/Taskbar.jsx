import Image from "next/image";

export default function Taskbar(){
    return(
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 shadow-lg w-fit h-fit justify-center items-center">
            <div className="w-fit flex flex-row justify-around items-center bg-gray-700 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
                <div className="p-4 gap-4 flex flex-row justify-around items-center">
                <Image className="hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer" src="/web/63.svg" width={75} height={75} alt="Start" />
                <Image className="hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer" src="/web/79.svg" width={75} height={75} alt="Start" />
                <Image className="hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer" src="/web/100.svg" width={75} height={75} alt="Start" />
                </div>
            </div>
        </div>
    )
}