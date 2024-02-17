import React from "react";
import Timer from "./Timer";
import SunDetails from "./SunDetails";
import Wind from "./Wind";
import Main from "./Main";
import Favourites from "./Favourites";
import UpdateFavourites from "./UpdateFavourites";
import ForecastWidget from "./ForecastWidget";

const HomeLayout = () => {
    return (
        <div className="w-full h-full md:flex justify-around pt-5 pb-3 gap-10">
            <div className="max-w-[450px] flex flex-col md:gap-7 gap-5">
                <Timer />
                <SunDetails />
                <Wind />
            </div>
            <div className="max-w-[450px]"><Main /></div>
            
            <div className="max-w-[450px] flex flex-col justify-around md:gap-8 gap-4 md:mt-0 mt-5">
                <Favourites />
                <UpdateFavourites />
                <ForecastWidget />
            </div>
        </div>
    );
};

export default HomeLayout;
