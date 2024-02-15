"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const Signup = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const onSubmit = async (e: any) => {
        e.preventDefault();
        try {
            setLoading(true);
            const result = await axios.post("/api/signup", user);
            toast.success("Sign in Successfull");
            router.push("/");
        } catch (error: any) {
            toast.error(error.response.data.error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (
            user.name &&
            user.name.length >= 8 &&
            user.password &&
            user.password.length >= 8
        ) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="w-full h-full flex justify-center items-center mt-10">
            <div className="lg:w-[450px] w-full h-[450px] px-8 bg-white flex flex-col items-center">
                <div className="text-4xl font-semibold md:py-10 py-6">
                    Sign Up
                </div>
                <form
                    className="w-full flex flex-col justify-cente gap-5 md:rounded-none rounded-xl"
                    onSubmit={onSubmit}
                >
                    <input
                        name="name"
                        placeholder="Enter your name"
                        type="text"
                        onChange={(e) => {
                            setUser({ ...user, name: e.target.value });
                        }}
                        className="w-full h-[40px] text-lg focus:outline-none border-b-2 border-gray-400 focus:border-sky-400 focus:text-sky-400 focus:placeholder:text-sky-400 focus:text-xl shadow-lg shadow-gray-200/40 focus:shadow-sky-200/20 transition-all duration-500"
                    />
                    <input
                        name="email"
                        placeholder="Enter your email"
                        type="text"
                        onChange={(e) => {
                            setUser({ ...user, email: e.target.value });
                        }}
                        className="w-full h-[40px] text-lg focus:outline-none border-b-2 border-gray-400 focus:border-sky-400 focus:text-sky-400 focus:placeholder:text-sky-400 focus:text-xl shadow-lg shadow-gray-200/40 focus:shadow-sky-200/20 transition-all duration-500"
                    />
                    <input
                        name="password"
                        placeholder="Enter a password"
                        type="password"
                        onChange={(e) => {
                            setUser({ ...user, password: e.target.value });
                        }}
                        className="w-full h-[40px] text-lg focus:outline-none border-b-2 border-gray-400 focus:border-sky-400 focus:text-sky-400 focus:placeholder:text-sky-400 focus:text-xl shadow-lg shadow-gray-200/40 focus:shadow-sky-200/20 transition-all duration-500"
                    />
                    <button
                        className={`w-full h-14 mt-5 flex justify-center items-center text-2xl font-medium text-white rounded-xl ${
                            buttonDisabled
                                ? "bg-gray-400 pointer-events-none"
                                : "bg-sky-400 cursor-pointer hover:bg-gradient-to-r hover:from-cyan-500 hover:via-purple-600 hover:to-sky-500 transition-all duration-300"
                        }`}
                        onClick={onSubmit}
                    >
                        {loading ? <ClipLoader color="white" /> : "SIGNUP"}
                    </button>
                </form>
                <div className="w-full py-5 flex justify-around items-center md:text-lg text-base">
                    <div>Already have an account?</div>
                    <Link
                        href={"/login"}
                        className="text-sky-500 underline hover:text-purple-700 cursor-pointer font-semibold"
                    >
                        SIGN IN
                    </Link>
                </div>
            </div>
            <div className="w-[450px] h-[450px] relative md:block hidden">
                <Image
                    src="https://source.unsplash.com/random?sky"
                    alt="Login Cover"
                    fill
                />
            </div>
        </div>
    );
};

export default Signup;
