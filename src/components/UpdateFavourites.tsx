"use client";
import { UserContext } from "@/context";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { TbStarFilled } from "react-icons/tb";

const UpdateFavourites = () => {
    const { user, setUser, favourites, setFavourites, location } = useContext(UserContext);

    const [isFavourite, setisFavourite] = useState(
        favourites.includes(location)
    );
    const changeFavourite = async () => {
        if (isFavourite) {
            const index = favourites.indexOf(location);
            setisFavourite(false);
            favourites.splice(index, 1);
        } else {
            setisFavourite(true);
            favourites.push(location);
        }

        const result  = await axios.post("/api/updatefavourites", {
            email: user?.email,
            favourites
        });
        setFavourites(favourites);
        setUser({ ...user, favourites: favourites });
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

export default UpdateFavourites;
