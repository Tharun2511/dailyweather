"use client";
import React from "react";
import { RevolvingDot } from "react-loader-spinner";

const Loader = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="w-auto md:min-w-[700px] sm:min-w-[400px] max-w-[700px] h-[450px] bg-white m-10 flex flex-col justify-center items-center rounded-2xl">
                <RevolvingDot
                    visible={true}
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="revolving-dot-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
                <div className="md:text-4xl text-2xl font-semibold px-4 pb-4 text-center">
                    Please wait...
                </div>
                <div className="md:text-2xl text-xl text-center px-4">
                    weather details of location is being fetched...
                </div>
            </div>
        </div>
    );
};

export default Loader;
