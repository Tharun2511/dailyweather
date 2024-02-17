"use client";
import { IoSearch, IoPersonCircleOutline } from "react-icons/io5";
import React, { useContext, useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { UserContext } from "@/context";
import { useRouter } from "next/navigation";

const NavBar = () => {
    const { user } = useContext(UserContext);
    const [searchLocation, setSearchLocation] = useState("");
    const router = useRouter();
    return (
        <div
            className={`w-full md:h-14 ${
                user ? "h-28 justify-between" : "h-14 justify-center"
            } md:px-4 px-2 pt-2 md:pb-2 pb-10 bg-white flex md:items-center rounded-lg shadow-md shadow-gray-500/50 relative`}
        >
            <div className="md:text-2xl text-xl md:py-1 py-2 flex gap-2 items-start">
                <Image src={logo} alt="Logo" width={30} height={30} />
                <div>
                    Daily
                    <span className="font-medium font-sans cursor-pointer">
                        Weather
                    </span>
                </div>
            </div>
            <div
                className={`flex gap-5 justify-between md:items-center border-b-[2px] border-gray-400 md:static absolute top-16 left-2 md:w-[350px] w-[95%] ${
                    user ? "block" : "hidden"
                }`}
            >
                <input
                    name="searchLocation"
                    type="text"
                    id="searchLocation"
                    placeholder="Search place, city or country..."
                    className="text-lg text-gray-600 p-1 focus:outline-none md:w-[300px] w-full"
                    onChange={(e) => {
                        setSearchLocation(e.target.value);
                    }}
                    value={searchLocation}
            
                />
                <IoSearch className="text-2xl text-gray-400 cursor-pointer" onClick={() => {
                    router.push(`/home/${searchLocation}
                    `);
                    setSearchLocation("");
                }}/>
            </div>
            <div className="md:pr-2 pr-5">
                <div className="flex gap-2 items-center justify-center">
                    <div className="flex items-center gap-2">
                        {user && (
                            <IoPersonCircleOutline className="text-4xl cursor-pointer" />
                        )}
                        <div className="text-lg">{user?.name}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;