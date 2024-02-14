import React from "react";
import Timer from "./Timer";
import SunDetails from "./SunDetails";
import Wind from "./Wind";
import Main from "./Main";
import Favourites from "./Favourites";
import Forecast from "./Forecast";
import UpdateFavourite from "./UpdateFavourite";

const HomeLayout = () => {
    return (
        <div className="w-full h-full md:flex justify-between pt-5 pb-3 gap-10">
            <div className="w-auto flex flex-col md:gap-7 gap-5">
                <Timer />
                <SunDetails />
                <Wind />
            </div>
            <Main />
            <div className="w-full flex flex-col justify-around md:gap-8 gap-4 md:mt-0 mt-5">
                <Favourites />
                <UpdateFavourite />
                <Forecast />
            </div>
        </div>
    );
};

export default HomeLayout;
