import Image from "next/image";
import Link from "next/link";
import React from "react";

const Signup = () => {
    return (
        <div className="w-full h-full flex justify-center items-center mt-10">
            <div className="lg:w-[450px] w-full h-[450px] px-8 bg-white flex flex-col items-center">
                <div className="text-4xl font-semibold py-10">Sign Up</div>
                <form className="w-full flex flex-col justify-cente gap-5">
                    <input
                        placeholder="Enter your name"
                        className="w-full h-[40px] text-lg focus:outline-none border-b-2 border-gray-400 focus:border-sky-400 focus:text-sky-400 focus:placeholder:text-sky-400 focus:text-xl shadow-lg shadow-gray-200/40 focus:shadow-sky-200/20 transition-all duration-500"
                    />
                    <input
                        placeholder="Enter your email"
                        className="w-full h-[40px] text-lg focus:outline-none border-b-2 border-gray-400 focus:border-sky-400 focus:text-sky-400 focus:placeholder:text-sky-400 focus:text-xl shadow-lg shadow-gray-200/40 focus:shadow-sky-200/20 transition-all duration-500"
                    />
                    <input
                        placeholder="Enter a password"
                        className="w-full h-[40px] text-lg focus:outline-none border-b-2 border-gray-400 focus:border-sky-400 focus:text-sky-400 focus:placeholder:text-sky-400 focus:text-xl shadow-lg shadow-gray-200/40 focus:shadow-sky-200/20 transition-all duration-500"
                    />
                    <button className="w-full h-14 mt-5 bg-sky-400 flex justify-center items-center text-2xl font-medium text-white hover: rounded-xl cursor-pointer hover:bg-gradient-to-r hover:from-cyan-500 hover:via-purple-600 hover:to-sky-500 transition-all duration-1000">
                        LOGIN
                    </button>
                </form>
                <div className="w-full py-5 flex justify-around items-center text-lg">
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
                    src="https://source.unsplash.com/random?wallpapers"
                    alt="Login Cover"
                    fill
                />
            </div>
        </div>
    );
};

export default Signup;
