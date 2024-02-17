"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import sun from "@/assets/sun.gif";
import { ImLocation } from "react-icons/im";
import { usePathname } from "next/navigation";
import { UserContext } from "@/context";
import { toCelcius, toFahrenheit } from "@/helpers/helpers";

const Main = () => {
    const { weather } = useContext(UserContext);
    const [isCelcius, setIsCelcius] = useState(true);
    const path = usePathname();
    return (
        <div
            className={`lg:w-[450px] md:w-[400px] h-[480px] md:mt-0 mt-5 p-4 bg-white flex flex-col gap-4 rounded-3xl shadow-lg shadow-gray-200/50`}
        >
            <div className="text-3xl font-medium p-2 flex justify-center border-b-2 border-gray-400">
                Weather
            </div>
            <div className="w-full flex justify-around pt-2">
                <div className="w-1/2 flex flex-col items-center pr-10">
                    <Image
                        src={`https://openweathermap.org/img/wn/${
                            weather?.weather[0].icon || "10d"
                        }@2x.png`}
                        alt="WeatherIcon"
                        width={80}
                        height={80}
                    />
                    <div className="lg:text-2xl text-xl font-[Poppins] font-semibold text-gray-600 italic">
                        {weather?.weather[0].description || "Clear sky"}
                    </div>
                </div>

                <div className="w-1/2 flex flex-col items-start justify-center lg:text-xl pl-2 text-lg border-l-2 border-gray-400">
                    <div>
                        Latitude:{" "}
                        <span className="font-semibold">
                            {weather?.coord.lat || "23.22"}
                        </span>
                    </div>
                    <div>
                        Longitude:{" "}
                        <span className="font-semibold">
                            {weather?.coord.lon || "74.55"}
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div className="text-5xl pt-2 font-semiboldold">
                    {`${
                        isCelcius
                            ? toCelcius(weather?.main.temp || "23.22")
                            : toFahrenheit(weather?.main.temp || "74.55")
                    }\u00B0 ${isCelcius ? "C" : "F"}`}
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
                    <div className="text-2xl">{`${weather?.name || "Delhi"}, ${
                        weather?.sys.country || "IN"
                    }`}</div>
                </div>
                <div className="w-full flex justify-around pt-2 mt-2 border-t-2 border-gray-400">
                    <div className="w-1/2 lg:text-xl text-lg border-r-2 border-gray-400 flex justify-center">
                        <div>
                            Feels Like: <br />
                            <span className="font-semibold">{`${
                                isCelcius
                                    ? toCelcius(
                                          weather?.main.feels_like || "23.22"
                                      )
                                    : toFahrenheit(
                                          weather?.main.feels_like || "74.55"
                                      )
                            }\u00B0 ${isCelcius ? "C" : "F"}`}</span>
                        </div>
                    </div>
                    <div className="w-1/2 lg:text-xl text-lg pl-2 flex justify-center">
                        <div>
                            Humidity: <br />
                            <span className="font-semibold">
                                {`${weather?.main.humidity || 46} %`}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
