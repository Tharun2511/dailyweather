"use client";
import { UserContext } from "@/context";
import { changeFavourite } from "@/helpers/helpers";
import React, { useContext, useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { TbStarFilled } from "react-icons/tb";
import { ClipLoader } from "react-spinners";

const UpdateFavourites = () => {
    const { user, setUser, favourites, setFavourites, location } =
        useContext(UserContext);
    const [loading, setLoading] = useState<boolean>(false);
    const [isFavourite, setisFavourite] = useState(
        favourites.indexOf(location) > -1 ? true : false
    );

    useEffect(() => {
        setisFavourite(favourites.includes(location));
    }, [favourites, location]);

    return (
        <div className="w-full h-auto bg-white py-4 px-4 rounded-xl text-xl font-semibold flex justify-between items-center">
            <div>
                {isFavourite ? "Remove from Favourites?" : "Add to Favourites?"}
            </div>
            <div
                onClick={() =>
                    changeFavourite(
                        setLoading,
                        setisFavourite,
                        favourites,
                        setFavourites,
                        setUser,
                        user,
                        location,
                        isFavourite
                    )
                }
            >
                {loading ? (
                    <ClipLoader color="blue" size={20} />
                ) : isFavourite ? (
                    <TbStarFilled className="text-3xl text-yellow-400 cursor-pointer" />
                ) : (
                    <CiStar className="text-3xl font-bold cursor-pointer" />
                )}
            </div>
        </div>
    );
};

export default UpdateFavourites;
