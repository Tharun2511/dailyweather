"use client";
import { UserContext } from "@/context";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa";

const Favourites = () => {
    const { user, favourites, location } = useContext(UserContext);
    const router = useRouter();

    return (
        <div className="bg-white w-full min-h-[250px] flex flex-col gap-2 px-4 pb-4 rounded-3xl shadow-lg shadow-gray-200/50">
            <div className="w-full h-16 text-2xl flex justify-center font-semibold py-4 border-b-2 border-gray-400">
                Your favourites
            </div>
            {favourites.length != 0 ? (
                user?.favourites?.map((loc: string) => (
                    <div
                        key={loc}
                        className="w-full text-lg font-semibold flex p-2 justify-between items-center border-b-[1px]"
                    >
                        {loc}
                        <div
                            className={`w-fit h-7 rounded-md  border-[1px] py-4 px-4 flex justify-center items-center cursor-pointer hover:bg-sky-400 hover:text-white transition-all duration-500 ${
                                loc !== location
                                    ? "text-sky-400 border-sky-400"
                                    : "text-white bg-gray-400 pointer-events-none"
                            }`}
                            onClick={() => {
                                router.push(`/home/${loc}`);
                            }}
                        >
                            Let&apos;s visit
                            <FaLocationArrow className="text-2xl pl-2" />
                        </div>
                    </div>
                ))
            ) : (
                <div className="w-full h-full flex justify-center items-center text-2xl">
                    You have no favourites set...
                </div>
            )}
        </div>
    );
};

export default Favourites;
