"use client";

import Image from "next/image";
import React, { useContext } from "react";
import wind from "@/assets/wind.gif";
import { UserContext } from "@/context";

const Wind = () => {
    const { weather } = useContext(UserContext);
    const windSpeed = weather?.wind.speed || 2.5;
    const windDirection = weather?.wind.deg || 180;
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
                        <span className="font-semibold">{Math.round(windSpeed*3.6*100)/100} km/h</span>
                    </div>
                    <div className="text-lg">
                        Wind direction:{" "}
                        <span className="font-semibold">{windDirection} deg</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wind;
