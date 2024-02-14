import Image from "next/image";
import React from "react";
import sunrise from "@/assets/sunrise.gif";
import sunset from "@/assets/sunset.gif";

const SunDetails = () => {
    const sunRise = "06:44:31 AM";
    const sunSet = "06:44:31 PM";
    return (
        <div className="bg-white h-auto px-5 py-2 rounded-3xl shadow-lg shadow-gray-200/50">
            <div className="flex items-center md:justify-between justify-around">
                <div className="text-xl font-medium">Sunrises at:</div>
                <Image src={sunrise} alt="sunrise" width={40} height={40} />
            </div>
            <div className="flex md:justify-start justify-center pb-2 border-b-2 border-gray-400 text-2xl font-light">
                {sunRise}
            </div>
            <div className="flex items-center md:justify-between justify-around pt-2">
                <div className="text-xl font-medium">Sunsets at:</div>
                <Image src={sunset} alt="sunset" width={40} height={40} />
            </div>
            <div className="flex md:justify-start justify-center text-2xl font-light">
                {sunSet}
            </div>
        </div>
    );
};

export default SunDetails;
