"use client";
import React from "react";
import { Radio } from "react-loader-spinner";

const CurrentLocationAccess = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="w-auto md:min-w-[700px] sm:min-w-[400px] max-w-[700px] h-[450px] bg-white m-10 flex flex-col justify-center items-center rounded-2xl">
                <Radio
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="radio-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
                <div className="text-2xl font-semibold px-4 pb-4 text-center">
                    Detecting your location
                </div>
                <div className="text-center px-4">
                    Please allow access to the location to provide weather of
                    your current location
                </div>
            </div>
        </div>
    );
};

export default CurrentLocationAccess;
