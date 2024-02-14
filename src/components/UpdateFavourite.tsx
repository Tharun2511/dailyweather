"use client";
import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { TbStarFilled } from "react-icons/tb";

const UpdateFavourite = () => {
    const [favourites, setFavourites] = useState([
        "Kaashi",
        "Dwaraka",
        "Ayodhya",
        "Kedarnath",
    ]);
    const [isFavourite, setisFavourite] = useState(true);
    const [location, setLocation] = useState("Dwarak");
    useEffect(() => {
        console.log("Changed");
    }, [isFavourite]);
    const changeFavourite = () => {
        const index = favourites.indexOf(location);
        if (index > -1) {
            setisFavourite(false);
            favourites.splice(index, 1);
        } else {
            setisFavourite(true);
            favourites.push(location);
        }
    };

    return (
        <div className="w-full h-auto bg-white py-4 px-4 rounded-xl text-xl font-semibold flex justify-between items-center">
            <div>
                {isFavourite ? "Remove from Favourites?" : "Add to Favourites?"}
            </div>
            <div onClick={changeFavourite}>
                {isFavourite ? (
                    <TbStarFilled className="text-4xl text-yellow-400 cursor-pointer" />
                ) : (
                    <CiStar className="text-4xl cursor-pointer" />
                )}
            </div>
        </div>
    );
};

export default UpdateFavourite;
