"use client";
import { UserContext } from "@/context";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { TbStarFilled } from "react-icons/tb";

const UpdateFavourite = () => {
    const { user, setUser, location, favourites } = useContext(UserContext);
    const [isFavourite, setisFavourite] = useState(false);
    const currFavourites = [...favourites];

    const changeFavourite = async () => {
        const index = currFavourites.indexOf(location);
        if (index > -1) {
            setisFavourite(false);
            currFavourites.splice(index, 1);
        } else {
            setisFavourite(true);
            currFavourites.push(location);
        }
        const result = await axios.post(
            "/api/updatefavourites",
            currFavourites
        );
        setUser({ ...user, favourites: currFavourites });
    };

    useEffect(() => {
        if (currFavourites.includes(location)) {
            setisFavourite(true);
        }
    }, []);

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
