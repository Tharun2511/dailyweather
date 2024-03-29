"use client";

import { UserContext } from "@/context";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import { IoIosEye, IoIosEyeOff, IoMdPerson } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Signup = () => {
    const router = useRouter();
    const { setUser, setFavourites } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const onSubmit = async (e: any) => {
        e.preventDefault();
        if (currentUser.name.length === 0) {
            toast.error("Name field must not be empty");
            return;
        } else if (currentUser.name.length < 8) {
            toast.error("Name must be at least 8 characters");
            return;
        } else if (currentUser.name.length > 12) {
            toast.error("Name must not be greater than 12 characters");
            return;
        } else if (currentUser.email.length === 0) {
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
            const result = await axios.post("/api/signup", currentUser);
            toast.success("Sign up Successfull");
            setUser({
                name: currentUser.name,
                email: currentUser.email,
                favoutites: [],
            });
            setFavourites([]);
            router.push("/");
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full h-full flex justify-center items-center mt-10">
            <div className="lg:w-[450px] w-full h-[450px] px-8 bg-white flex flex-col items-center shadow-lg shadow-gray-400">
                <div className="text-4xl text-sky-600 font-semibold py-6">
                    Sign Up
                </div>
                <form
                    className="w-full flex flex-col justify-cente gap-5 md:rounded-none rounded-xl"
                    onSubmit={onSubmit}
                >
                    <div className="relative">
                        <input
                            name="name"
                            placeholder="Enter your name"
                            type="text"
                            onChange={(e) => {
                                setCurrentUser({
                                    ...currentUser,
                                    name: e.target.value,
                                });
                            }}
                            autoComplete="off"
                            className="w-full h-[60px] pl-12 bg-gray-200 text-base text-gray-700 font-medium rounded-md focus:outline-none"
                        />
                        <IoMdPerson className="absolute left-0 top-[20px] text-xl text-gray-400 ml-4" />
                    </div>
                    <div className="relative">
                        <input
                            name="email"
                            placeholder="Enter your email"
                            type="text"
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
                            placeholder="Enter a password"
                            type={`${showPassword ? "text" : "password"}`}
                            onChange={(e) => {
                                setCurrentUser({
                                    ...currentUser,
                                    password: e.target.value,
                                });
                            }}
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
                        className="w-full h-14 flex justify-center items-center text-2xl font-medium text-white rounded-xl bg-sky-400 cursor-pointer hover:bg-gradient-to-r hover:from-cyan-500 hover:via-purple-600 hover:to-sky-500 transition-all duration-300"
                        onClick={onSubmit}
                    >
                        {loading ? <ClipLoader color="white" /> : "SIGN UP"}
                    </button>
                </form>
                <div className="w-full py-3 flex justify-around items-center md:text-lg text-base">
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
                    src="https://source.unsplash.com/random?sky,forest"
                    // weather&forest
                    alt="Login Cover"
                    fill
                />
            </div>
        </div>
    );
};

export default Signup;
