"use client";

import Image from "next/image";
import React, { useContext } from "react";
import sunrise from "@/assets/sunrise.gif";
import sunset from "@/assets/sunset.gif";
import { UserContext } from "@/context";
import { unixTimeToDate } from "@/helpers/helpers";

const SunDetails = () => {
    const { weather } = useContext(UserContext);
    const sunRise = "0" + unixTimeToDate(weather?.sys.sunrise || 0);
    const sunSet = unixTimeToDate(weather?.sys.sunset || 0);
    
    return (
        <div className="bg-white h-auto px-5 py-2 rounded-3xl shadow-lg shadow-gray-200/50">
            <div className="flex items-center justify-around ">
                <div className="text-xl font-medium">Sunrises at:</div>
                <Image src={sunrise} alt="sunrise" width={40} height={40} />
            </div>
            <div className="flex md:justify-start justify-center pb-2 pl-6 border-b-2 border-gray-400 text-2xl font-light">
                {sunRise}
            </div>
            <div className="flex items-center justify-around pt-2">
                <div className="text-xl font-medium">Sunsets at:</div>
                <Image src={sunset} alt="sunset" width={40} height={40} />
            </div>
            <div className="flex md:justify-start justify-center pl-6 text-2xl font-light">
                {sunSet}
            </div>
        </div>
    );
};

export default SunDetails;
