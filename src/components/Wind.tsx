import Image from "next/image";
import React from "react";
import wind from "@/assets/wind.gif";

const Wind = () => {
    return (
        <div className="bg-white max-h-[150px] flex flex-col gap-6 p-3 rounded-3xl shadow-lg shadow-gray-200/50">
            <div className="flex justify-center border-b-2 border-gray-400 text-2xl">
                Wind Info
            </div>
            <div className="flex items-center md:justify-between justify-around">
                <Image src={wind} alt="wind" width={60} height={60} />
                <div className="flex flex-col gap-2">
                    <div className="text-lg">
                        Wind Speed:{" "}
                        <span className="font-semibold">2.5 km/ h</span>
                    </div>
                    <div className="text-lg">
                        Wind direction:{" "}
                        <span className="font-semibold">180 deg</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wind;
