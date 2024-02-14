"use client";
import Image from "next/image";
import React, { useState } from "react";
import sun from "@/assets/sun.gif";
import { ImLocation } from "react-icons/im";
import { usePathname } from "next/navigation";

const Main = () => {
    const [isCelcius, setIsCelcius] = useState(true);
    const path = usePathname();
    return (
        <div
            className={`${
                path === "/" ? "w-full" : "w-[450px]"
            } h-[480px] md:mt-0 mt-5 p-4 bg-white flex flex-col gap-4 rounded-3xl shadow-lg shadow-gray-200/50`}
        >
            <div className="text-3xl font-medium p-2 flex justify-center border-b-2 border-gray-400">
                Weather
            </div>
            <div className="w-full flex justify-around pt-2">
                <div className="w-1/2 flex flex-col items-center pr-10">
                    <Image src={sun} alt="WeatherIcon" width={80} height={80} />
                    <div className="lg:text-2xl text-xl font-[Poppins] font-semibold text-gray-600 italic">
                        Clear Sky
                    </div>
                </div>
                {path === "/" ? (
                    <div className="w-1/2 flex flex-col items-start justify-center lg:text-xl pl-2 text-lg border-l-2 border-gray-400">
                        <div>
                            Latitude:{" "}
                            <span className="font-semibold">73.8553&deg;</span>
                        </div>
                        <div>
                            Longitude:{" "}
                            <span className="font-semibold">73.8553&deg;</span>
                        </div>
                    </div>
                ) : (
                    <div className="w-1/2 flex flex-col items-start justify-center lg:text-xl text-lg pl-6 border-l-2 border-gray-400">
                        <div>
                            Sunrises at:{" "}
                            <span className="font-semibold">73.8553&deg;</span>
                        </div>
                        <div>
                            sunsets at:{" "}
                            <span className="font-semibold">73.8553&deg;</span>
                        </div>
                    </div>
                )}
            </div>
            <div className="flex flex-col items-center pt-2 gap-2">
                <div className="text-5xl pt-2 font-semiboldold">
                    200.8&deg; C
                </div>
                <div className="flex justify-center ">
                    <div
                        className={`w-[100px] h-[40px] border-y-2 font-semibold border-l-2 border-sky-400 flex items-center justify-center cursor-pointer rounded-l-md ${
                            isCelcius ? "bg-sky-400 text-white" : "text-sky-400"
                        }`}
                        onClick={() => setIsCelcius(true)}
                    >
                        celcius
                    </div>
                    <div
                        className={`w-[100px] h-[40px] border-y-2 border-r-2 font-semibold border-sky-400 flex items-center justify-center cursor-pointer rounded-r-md ${
                            !isCelcius
                                ? "bg-sky-400 text-white"
                                : "text-sky-400"
                        }`}
                        onClick={() => setIsCelcius(false)}
                    >
                        Fahrenheit
                    </div>
                </div>
                <div className="flex pt-5 items-center gap-5">
                    <ImLocation className="text-3xl" />
                    <div className="text-2xl">Pune (IN)</div>
                </div>
                <div className="w-full flex justify-around pt-2 mt-2 border-t-2 border-gray-400">
                    <div className="w-1/2 lg:text-xl text-lg border-r-2 border-gray-400 flex justify-center">
                        <div>
                            Feels Like:{" "}
                            <span className="font-semibold">200.8&deg; C</span>
                        </div>
                    </div>
                    <div className="w-1/2 lg:text-xl text-lg pl-2 flex justify-center">
                        <div>
                            Humidity: <span className="font-semibold">90%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
