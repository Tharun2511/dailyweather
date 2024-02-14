"use client";
import { IoSearch, IoPersonCircleOutline } from "react-icons/io5";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

const NavBar = () => {
    const [user, setUser] = useState("Tharun");
    return (
        <div className="w-full md:h-14 h-28 md:px-4 px-2 pt-2 md:pb-2 pb-10 bg-white flex justify-between md:items-center rounded-lg shadow-md shadow-gray-500/50 relative">
            <div className="md:text-2xl text-xl md:py-1 py-2 flex gap-2 items-start">
                <Image src={logo} alt="Logo" width={30} height={30} />
                <div>
                    Daily
                    <span className="font-medium font-sans cursor-pointer">
                        Weather
                    </span>
                </div>
            </div>
            <div className="flex gap-5 justify-between md:items-center border-b-[2px] border-gray-400 md:static absolute top-16 left-2 md:w-[350px] w-[95%]">
                <input
                    type="text"
                    placeholder="Search place, city or country..."
                    className="text-lg text-gray-600 p-1 focus:outline-none md:w-[300px] w-full"
                />
                <IoSearch className="text-2xl text-gray-400 cursor-pointer" />
            </div>
            <div className="md:pr-2 pr-5">
                {user ? (
                    <div className="flex gap-2 items-center justify-center">
                        <div className="flex items-center gap-2">
                            <IoPersonCircleOutline className="text-4xl cursor-pointer" />
                            <div className="text-lg">{user}</div>
                        </div>
                    </div>
                ) : (
                    <Link
                        href={"/login"}
                        className="text-lg font-bold flex items-center border-gray-700 border-[2px] px-3 py-1 rounded-lg hover:text-gray-100 hover:bg-sky-500 hover:border-sky-500 transition-all duration-300"
                    >
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default NavBar;
