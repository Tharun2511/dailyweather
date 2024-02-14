import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Forecast = () => {
    return (
        <div className="bg-white h-auto px-5 py-4 flex justify-between items-center text-xl font-semibold rounded-3xl shadow-lg shadow-gray-200/50">
            <div>5 day weather forecast</div>
            <div className="text-lg text-sky-400 border-sky-400 border-[1px] px-4 py-1 flex items-center justify-between gap-2 rounded-lg hover:bg-sky-400 hover:text-white transition-all duration-500 cursor-pointer">
                <div>View More</div>
                <BsArrowRight className="text-2xl" />
            </div>
        </div>
    );
};

export default Forecast;