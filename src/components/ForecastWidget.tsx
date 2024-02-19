import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const ForecastWidget = () => {
    return (
        <div className="bg-white h-auto px-5 py-4 gap-5 flex justify-between items-center text-xl font-semibold rounded-3xl shadow-lg shadow-gray-200/50">
            <div className="md:text-xl text-base">Weather forecast</div>
            <Link href={"/forecast"} className="text-lg text-sky-400 border-sky-400 border-[1px] px-2 py-1 flex items-center justify-between gap-2 rounded-lg hover:bg-sky-400 hover:text-white transition-all duration-500 cursor-pointer">
                <div className="text-base">View More</div>
                <BsArrowRight className="text-xl" />
            </Link>
        </div>
    );
};

export default ForecastWidget;
