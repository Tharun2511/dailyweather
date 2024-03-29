"use client";

import { UserContext } from "@/context";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Login = () => {
    const { setUser, setFavourites } = useContext(UserContext);
    const Router = useRouter();
    const [loading, setLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const onSubmit = async (e: any) => {
        e.preventDefault();
        if (currentUser.email.length === 0) {
            toast.error("Email field must not be empty");
            return;
        } else if (currentUser.password.length === 0) {
            toast.error("Password field must not be empty");
            return;
        } else if (currentUser.password.length < 8) {
            toast.error("Password must be at least 8 characters");
            return;
        }
        try {
            setLoading(true);
            const { data } = await axios.post("/api/signin", currentUser);
            setUser({
                name: data.data.name,
                email: data.data.email,
                favourites: data.data.favourites || [],
            });
            setFavourites(data.data.favourites || []);
            toast.success("Sign in Successfull");
            Router.push("/");
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full h-full flex justify-center items-center mt-10">
            <div className="w-[450px] h-[450px] relative md:block hidden">
                <Image
                    src="https://source.unsplash.com/random?mountains&sky"
                    alt="Login Cover"
                    fill
                />
            </div>
            <div className="lg:w-[450px] w-full h-[450px] px-8 bg-white flex flex-col items-center shadow-lg shadow-gray-400">
                <div className="text-4xl text-sky-800 font-semibold py-10">
                    Sign in
                </div>
                <form className="w-full flex flex-col justify-center gap-5">
                    <div className="relative">
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter your email"
                            onChange={(e) => {
                                setCurrentUser({
                                    ...currentUser,
                                    email: e.target.value,
                                });
                            }}
                            autoComplete="off"
                            className="w-full h-[60px] pl-12 bg-gray-200 text-base text-gray-700 font-medium rounded-md focus:outline-none"
                        />
                        <MdEmail className="absolute left-0 top-[20px] text-xl text-gray-400 ml-4" />
                    </div>
                    <div className="relative">
                        <input
                            name="password"
                            type={`${showPassword ? "text" : "password"}`}
                            placeholder="Enter your password"
                            onChange={(e) => {
                                setCurrentUser({
                                    ...currentUser,
                                    password: e.target.value,
                                });
                            }}
                            autoComplete="off"
                            className="w-full h-[60px] pl-12 bg-gray-200 text-base text-gray-700 font-medium rounded-md focus:outline-none"
                        />
                        <RiLockPasswordFill className="absolute left-0 top-[20px] text-xl text-gray-400 ml-4" />
                        <IoIosEye
                            className={`absolute right-0 top-5 text-2xl text-gray-400 mr-4 ${
                                showPassword && "hidden"
                            } cursor-pointer`}
                            onClick={() => {
                                setShowPassword(!showPassword);
                            }}
                        />
                        <IoIosEyeOff
                            className={`absolute right-0 top-5 text-2xl text-gray-400 mr-4 ${
                                !showPassword && "hidden"
                            } cursor-pointer`}
                            onClick={() => {
                                setShowPassword(!showPassword);
                            }}
                        />
                    </div>
                    <button
                        className="w-full h-14 mt-5 flex justify-center items-center text-2xl font-medium text-white rounded-xl bg-sky-400 cursor-pointer hover:bg-gradient-to-r hover:from-cyan-500 hover:via-purple-600 hover:to-sky-500 transition-all duration-300"
                        onClick={onSubmit}
                    >
                        {loading ? <ClipLoader color="white" /> : "SIGN IN"}
                    </button>
                </form>
                <div className="w-full py-5 flex justify-around items-center text-lg">
                    <div>Don&apos;t have an account?</div>
                    <Link
                        href={"/signup"}
                        className="text-sky-500 underline hover:text-purple-700 cursor-pointer font-semibold"
                    >
                        SIGN UP
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
